### 插件介绍

Legend， 图例。

### attrs

| 属性名    | 类型     | 默认值            | 描述                                                                                                                                                                                                                |
| --------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size      | Array    | `[100%, 100%]`    | Legend 容器大小                                                                                                                                                                                                     |
| orient    | String   | `horizontal`      | 布局方式，默认水平布局，可选值 `horizontal | vertical`                                                                                                                                                              |
| align     | Array    | `['left', 'top']` | 对齐方式，第 1 个值控制水平方向布局（可选值：`left | center | right`，也可设置为 **_数字_** 或 **_百分比_**），第 2 个值控制垂直方向布局（可选值：`top | center | bottom`， 也可设置为 **_数字_** 或 **_百分比_**） |
| formatter | Function | `d => d`          | 文本格式化函数                                                                                                                                                                                                      |

### style

```javascript
const legend = new Legend()
legend.style('text', { color: '#fff' }
```

组件中可以自定义 css 属性的元素如下表：

| 名称       | 基础类型 | 描述               |
| ---------- | -------- | ------------------ |
| icon       | 面       | 图标样式           |
| icon:hover | 面       | 鼠标经过时图标样式 |
| text       | 文本     | 文字样式           |
| text:hover | 文本     | 鼠标经过时文字样式 |
