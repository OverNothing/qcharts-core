## 折线轮播选中

:::demo

```javascript
const data = [
  { date: '05-01', catgory: '图例一', sales: 15.2 },
  { date: '05-02', catgory: '图例一', sales: 39.2 },
  { date: '05-03', catgory: '图例一', sales: 31.2 },
  { date: '05-04', catgory: '图例一', sales: 65.2 },
  { date: '05-05', catgory: '图例一', sales: 55.2 },
  { date: '05-06', catgory: '图例一', sales: 75.2 },
  { date: '05-07', catgory: '图例一', sales: 95.2 },
  { date: '05-08', catgory: '图例一', sales: 110 }
]

const { Chart, Line, Legend, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'catgory',
  value: 'sales',
  text: 'date'
})

const line = new Line({ smooth: true })
  .style('point', { strokeColor: '#fff' })
  .style('point:hover', { strokeColor: '#f00' })

const tooltip = new Tooltip({
  formatter: function(data) {
    return `${data.date} ${data.sales}`
  }
})

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })

const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

chart.add([line, tooltip, axisBottom, axisLeft, legend])
chart.render()
let num = 0
setInterval(_ => {
  if (num > 7) {
    num = 0
  }
  let { width, height } = chart.canvas.getBoundingClientRect()
  layerX = (width / 7) * num
  layerY = Math.random() * height
  line.dispatchAction('hover', { index: num++, layerX, layerY })
}, 3000)
```

:::
