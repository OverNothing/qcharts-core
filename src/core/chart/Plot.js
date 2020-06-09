import { Group, Scene } from 'spritejs'
import { isObject, debounce, convertPercent2Number, isWeixinApp } from '../../util'
import ResizeObserver from './ResizeObserver'

export class Plot {
  constructor(container, opts) {
    if (isObject(container)) {
      opts = container
      container = opts.container
    }
    this.domElement = container
    this.initScene(this.domElement, opts)
    this.plots = []
    this.charts = []
  }

  initScene(container, opts) {
    if (!isWeixinApp() && opts.forceFit) {
      opts.viewport = 'auto'
    } else {
      opts.viewport = opts.size ? opts.size : [opts.width, opts.height]
    }

    /**
      {
        vwr: 1,
        layer: 'fglayer',
      }
     */
    if (isWeixinApp()) {
      let [width, height] = opts.viewport;
      let pixelRatio = opts.pixelRatio || 'px';
      this.scene = new Scene(Number(width) || null, Number(height) || null, pixelRatio);
    } else {
      this.scene = new Scene({
        container,
        displayRatio: '1',
        ...opts,
      })
    }
    const layerID = opts.layer || 'default'
    if (isWeixinApp()) {
      this.layer = this.scene.layer(layerID, opts.component)
    } else {
      this.layer = this.scene.layer(layerID)
    }

    this.canvas = this.layer.canvas

    if (opts.forceFit) {
      this.forceFit()
    }
  }

  forceFit() {
    if (isWeixinApp()) return; // ignored
    const onResize = (w, h) => {
      // this.scene.setViewport(w, h)
      this.scene.setResolution(w, h)
      this.plots.forEach(({ $group, pos, size }) => {
        $group.attr(this.recalculateLayout(pos, size))
      })
      this.charts.forEach(chart => {
        chart.emit('resize')
        chart.update && chart.update()
      })
    }

    const dom = this.domElement
    const observer = ResizeObserver(
      debounce(element => {
        let { width, height } = getComputedStyle(element)
        onResize(parseInt(width), parseInt(height))
      }, 300)
    )
    observer.observe(dom)
  }

  recalculateLayout([x, y], [width, height]) {
    const viewport = Object.values(this.scene.getResolution());
    const pos = [x, y].map((n, i) => convertPercent2Number(n, viewport[i]))
    const size = [width, height].map((n, i) =>
      convertPercent2Number(n, viewport[i])
    )
    return { pos, size }
  }

  subPlot(pos, size) {
    const $group = new Group({
      boxSizing: 'border-box',
      ...this.recalculateLayout(pos, size)
    })
    this.layer.appendChild($group)
    this.plots.push({ $group, pos, size })
    return $group
  }

  addChart(chart) {
    chart.id = this.plots.length + 1 // 设置 chart 的 ID
    Object.defineProperty(chart, 'id', {
      writable: false,
      configurable: true
    })
    chart.layer = this.layer
    this.charts.push(chart)
  }
}
