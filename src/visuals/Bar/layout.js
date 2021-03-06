import { axis } from '../../util'
export default function barLayout() {
  function bar(dataInfo) {
    // 输入
    const data = dataInfo.data
    const barSize = dataInfo.barSize
    const transpose = dataInfo.transpose
    const stack = dataInfo.stack
    const groupGap = dataInfo.groupGap
    const stackGap = dataInfo.stackGap
    let barWidth = dataInfo.barWidth
    const splitNumber = dataInfo.splitNumber
    // 输出
    const barData = []
    const groupData = []

    const bgPillarAttr = { opacity: 0.00001, bgcolor: '#000' }

    // const valueAxis = getAxis(stack, data)
    const valueAxis = axis({ dataSet: data, stack, splitNumber })
    if (!valueAxis || !valueAxis.length) {
      return { barData, groupData }
    }
    const tableSize = transpose
      ? { label: barSize[1], value: barSize[0] }
      : { label: barSize[0], value: barSize[1] }
    const axisValueMax = Math.max.apply(this, valueAxis)
    const axisValueMin = Math.min.apply(this, valueAxis)
    const POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin) // 正负柱子高度比例
    const GROUP_BAR_NUM = computerLegend(data) // 图例显示个数

    const GROUP_NUM = data[0].length
    let gap = 0
    // 柱子宽度，根据数据绘制类型计算，是否分组，是否旋转
    if (barWidth === 0) {
      barWidth = stack
        ? (tableSize.label * 0.5) / GROUP_NUM
        : (tableSize.label * 0.5) / (GROUP_NUM * GROUP_BAR_NUM)

      gap = stack ? barWidth : barWidth * GROUP_BAR_NUM
    } else {
      gap = stack
        ? (tableSize.label - barWidth * GROUP_NUM) / GROUP_NUM
        : (tableSize.label -
            barWidth * GROUP_BAR_NUM * GROUP_NUM -
            groupGap * (GROUP_BAR_NUM - 1) * GROUP_NUM) /
          GROUP_NUM
    }

    const BAR_HEIGHT_FACTOR = tableSize.value / (axisValueMax - axisValueMin)
    if (!stack) {
      // 分组柱状图
      for (let i = 0, len = GROUP_NUM; i < len; i++) {
        let flag = 0 // 计算当前柱子前面有几根被隐藏
        let value = 0
        let gpData = { rects: [] }
        // 计算单根柱子
        for (let j = 0, lenj = data.length; j < lenj; j++) {
          if (data[j][i].disabled !== true) {
            data[j][i].disabled = false
          }

          value = data[j][i].__valueGetter__()
          let barHeight = BAR_HEIGHT_FACTOR * Math.abs(value)
          let rect = {
            anchor: [
              transpose && value < 0 ? 1 : 0,
              transpose || value < 0 ? 0 : 1
            ],
            size: transpose
              ? [barHeight, barWidth - 1]
              : [barWidth - 1, barHeight],
            pos: transpose
              ? [
                tableSize.value * (1 - POSITIVE_RATIO),
                gap / 2 +
                    (barWidth + groupGap) * (j - flag) +
                    (barWidth * GROUP_BAR_NUM +
                      groupGap * (GROUP_BAR_NUM - 1) +
                      gap) *
                      i
              ]
              : [
                gap / 2 +
                    (barWidth + groupGap) * (j - flag) +
                    (barWidth * GROUP_BAR_NUM +
                      groupGap * (GROUP_BAR_NUM - 1) +
                      gap) *
                      i,
                tableSize.value * POSITIVE_RATIO
              ],

            labelAttrs: {
              opacity: !data[j][i].disabled ? 1 : 0,
              text: value,
              anchor: [transpose && value < 0 ? 1 : 0, 0.5],
              pos: transpose
                ? [
                  tableSize.value * (1 - POSITIVE_RATIO),
                  gap / 2 +
                      (barWidth + groupGap) * (j - flag) +
                      (barWidth * GROUP_BAR_NUM +
                        groupGap * (GROUP_BAR_NUM - 1) +
                        gap) *
                        i +
                      barWidth * 0.5
                ]
                : [
                  gap / 2 +
                      (barWidth + groupGap) * (j - flag) +
                      (barWidth * GROUP_BAR_NUM +
                        groupGap * (GROUP_BAR_NUM - 1) +
                        gap) *
                        i +
                      barWidth * 0.5,
                  tableSize.value * POSITIVE_RATIO
                ],
              rotate: transpose ? 0 : value < 0 ? 90 : 270
            },
            ...data[j][i]
          }
          if (rect.disabled) {
            rect.size = transpose ? [0, rect.size[1]] : [rect.size[0], 0]
            flag++
          } else {
            gpData.rects.push(rect)
          }
          barData.push(rect)
        }
        // 柱子整体属性
        gpData = Object.assign(gpData, {
          // title: data[0][i]['_x'],
          pos: transpose
            ? [
              0,
              (gap +
                  barWidth * GROUP_BAR_NUM +
                  groupGap * (GROUP_BAR_NUM - 1)) *
                  i
            ]
            : [
              (gap +
                  barWidth * GROUP_BAR_NUM +
                  groupGap * (GROUP_BAR_NUM - 1)) *
                  i,
              0
            ],
          size: transpose
            ? [
              tableSize.value,
              barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap
            ]
            : [
              barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap,
              tableSize.value
            ],
          ...bgPillarAttr
        })
        groupData.push(gpData)
      }
    } else {
      // 堆叠柱状图
      for (let i = 0, len = GROUP_NUM; i < len; i++) {
        let heightSumUp = 0
        let heightSumDown = 0
        let value = 0
        let gpData = { rects: [] }
        // 计算单根柱子
        for (let j = 0, lenj = data.length; j < lenj; j++) {
          let stackGapTemp = stackGap
          if (data[j][i].disabled !== true) {
            data[j][i].disabled = false
          }
          value = data[j][i].__valueGetter__()
          let barHeight = BAR_HEIGHT_FACTOR * Math.abs(value)
          if (barHeight === 0) {
            stackGapTemp = 0
          }
          let posY =
            value < 0
              ? tableSize.value * POSITIVE_RATIO + heightSumDown
              : tableSize.value * POSITIVE_RATIO - heightSumUp
          let posX =
            value < 0
              ? tableSize.value * (1 - POSITIVE_RATIO) - heightSumDown
              : tableSize.value * (1 - POSITIVE_RATIO) + heightSumUp
          let posLabelY =
            value < 0
              ? tableSize.value * POSITIVE_RATIO + heightSumDown + barHeight
              : tableSize.value * POSITIVE_RATIO - heightSumUp
          let rect = {
            anchor: [
              transpose && value < 0 ? 1 : 0,
              transpose || value < 0 ? 0 : 1
            ],
            size: transpose
              ? [barHeight - stackGapTemp, barWidth]
              : [barWidth, barHeight - stackGapTemp],
            pos: transpose
              ? [posX, gap / 2 + (barWidth + gap) * i]
              : [gap / 2 + (barWidth + gap) * i, posY],
            index: j,
            labelAttrs: {
              opacity: !data[j][i].disabled ? 1 : 0,
              text: value,
              anchor: transpose ? (value < 0 ? [1, 0.5] : [0, 0.5]) : [0.5, 1],
              pos: transpose
                ? [posX, +(gap + barWidth) / 2 + (barWidth + gap) * i]
                : [(gap + barWidth) / 2 + (barWidth + gap) * i, posLabelY]
            },
            ...data[j][i]
          }
          if (rect.disabled) {
            rect.size = transpose ? [0, rect.size[1]] : [rect.size[0], 0]
          } else {
            value < 0
              ? (heightSumDown = heightSumDown + barHeight)
              : (heightSumUp = heightSumUp + barHeight)
            gpData.rects.push(rect)
          }
          barData.push(rect)
        }
        // 柱子整体属性
        gpData = Object.assign(gpData, {
          pos: transpose
            ? [0, (gap + barWidth) * i]
            : [(gap + barWidth) * i, 0],
          size: transpose
            ? [tableSize.value, barWidth + gap]
            : [barWidth + gap, tableSize.value],
          ...bgPillarAttr
        })
        groupData.push(gpData)
      }
    }

    return { barData, groupData }
  }

  function computerLegend(data) {
    let flag = 0
    for (let i = 0, len = data.length; i < len; i++) {
      if (data[i][0].disabled !== true) {
        flag++
      }
    }
    if (flag === 0) {
      // console.warn('data invalid!')
    }
    return flag || 1
  }
  return bar
}
