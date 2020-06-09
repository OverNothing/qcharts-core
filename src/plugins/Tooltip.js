import { Group, Label, Rect } from 'spritejs'
import { isArray, throttle, isFunction } from '../util'
import { BasePlugin } from '../core'

function refixTooltipPosition(x, y, w, h, vw, vh, gap = 10) {
  // 极坐标等坐标系
  if (x < vw / 2) {
    // 左边
    if (w + 2 * gap < x) {
      x -= w + gap
    } else {
      x += gap
    }
  } else {
    // 右边
    if (x + w + 2 * gap < vw) {
      x += gap
    } else {
      x -= w + gap
    }
  }

  if (x < 0) {
    x = gap
  }

  if (y < vh / 2) {
    // 上边
    if (h + 2 * gap < y) {
      y -= gap
    }
  } else {
    // 下边
    if (y + h + 2 * gap < vh) {
      y += gap
    } else {
      y -= h + gap
    }
  }

  return [x, y]
}

export class Tooltip extends BasePlugin {
  constructor(attrs) {
    super(attrs)
    this.$group = null
    this.prevPos = [0, 0]
    this.state = { hide: true }
    // this.init()
    return this
  }

  getDefaultAttrs() {
    return {
      throttleTime: 300,
      formatter: k => k.value || k,
      sort: k => true,
      title: null,
      pos: null, // 一旦设置了此值，tooltip 的位置将固定
      _pos: null // 更新 pos 属性计算出的值，因为 pos 属性可以设置为 百分比
    }
  }

  beforeRender() {
    // super.beforeRender()
    const pos = this.attr('pos')

    this.dataset.on(
      'hover:data',
      throttle(d => {
        if (!d) {
          !pos && this.setState({ hide: true }, true)
        } else {
          let { data } = d
          let { layerX: x, layerY: y } = data.evt;
          const { hide } = this.state
          const [chartWidth, chartHieght] = this.chart.getSize()
          data = isArray(data) ? data : [data]
          if (hide) {
            let self = this
            // 如果第一次出现，直接出现到当前位置
            // this.$group.attr('pos', [x, y])
            this.$group.addEventListener('afterdraw', function fixPos() {
              let { width, height } = self.getWidthAndHeight()
              setTimeout(() => {
                self.setState({
                  pos: refixTooltipPosition(
                    x,
                    y,
                    width,
                    height,
                    chartWidth,
                    chartHieght
                  )
                })
              }, 300)
              self.$group.removeEventListener('afterdraw', fixPos)
            })
          }
          let { width, height } = this.getWidthAndHeight()
          this.setState(
            {
              pos:
                pos ||
                refixTooltipPosition(
                  x,
                  y,
                  width,
                  height,
                  chartWidth,
                  chartHieght
                ),
              data: data,
              hide: false
            },
            true
          )
        }
      }, 300)
    )
  }

  beforeUpdate() {}

  getTheme() {
    return this.chart.resolveTheme('Tooltip')
  }

  getWidthAndHeight() {
    let [width, height] = this.$group.contentSize
    const [t, r, b, l] = this.$group.attr('padding')
    const { borderWidth } = this.$group.attributes;
    width += r + l + 2 * borderWidth
    height += t + b + 2 * borderWidth
    return { width, height }
  }

  render() {
    const {
      title: titleStyle = {},
      group = {},
      icon = {},
      text = {},
      ...root
    } = this.getTheme()
    let { hide, data = [] } = this.state
    const titleGetter = this.attr('title')
    const dataSort = this.attr('sort')
    data = data.sort(dataSort)
    const title =
      typeof titleGetter === 'undefined'
        ? null
        : isFunction(titleGetter)
          ? data && data.length
            ? titleGetter(data)
            : null
          : titleGetter

    const rootPaddingBottom = root.padding
      ? isArray(root.padding)
        ? root.padding[0]
        : root.padding
      : root.paddingBottom || 0
    return (
      <Group
        {...{
          clipOverflow: false,
          flexDirection: 'column',
          zIndex: 9999,
          ...(this.chart.style('Tooltip')() || {}),
          ...root,
          ...(this.style('background')() || {})
        }}
        display={hide ? 'none' : 'flex'}
        opacity={hide ? 0 : 1}
      >
        {title ? (
          <Label
            text={title}
            {...titleStyle}
            {...(this.style('title')() || {})}
          />
        ) : null}
        {data.map((d, i) => {
          return (
            <Group
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              enableCache={false}
              {...group}
              {...(i === 0 ? { paddingTop: rootPaddingBottom } : {})}
            >
              <Rect
                {...icon}
                bgcolor={d.color}
                {...(this.style('icon')(d, d.dataOrigin, d.index) || {})}
              />
              <Label
                enableCache={false}
                {...text}
                text={this.attr('formatter')(d)}
                {...(this.style('text')() || {})}
              />
            </Group>
          )
        })}
      </Group>
    )
  }
  updated() {
    const pos = this.$group.attributes.pos
    if (pos && pos.length && pos[0] !== 0 && pos[1] !== 0) {
      let width = this.$group.attributes.pos[0]
      this.$group.attr({ width: width + 0.1 })
      this.$group.transition(0.2).attr('pos', pos)
      // setTimeout(_ => {
      //   // 触发reflow
      //   this.$group.attr({ width: '' })
      // })
    }
  }
}
