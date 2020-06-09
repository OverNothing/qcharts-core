import { getGlobal } from './util'
// core
import { h, Chart, BasePlugin, BaseVisual, Global, Dataset } from './core'
// visual
import {
  Pie,
  ArcPie,
  Area,
  Line,
  Radar,
  Progress,
  Bar,
  Funnel,
  Scatter,
  Gauge,
  RadialBar,
  PolarBar
} from './visuals'
// plugin
import { Legend, Text, Tooltip, Axis } from './plugins'
// Theme
import * as Theme from './themes'

// 注册样式
Global.registerTheme('default', Theme.light)
Global.registerTheme('dark', Theme.dark)

const version = require('../package.json').version
// 开发环境全局挂载，发布环境只挂载JSX解析函数
const qcharts = {
  version,
  h,
  Chart,
  BasePlugin,
  BaseVisual,
  Global,
  Dataset,
  Pie,
  ArcPie,
  Area,
  Line,
  Radar,
  Bar,
  Funnel,
  Scatter,
  Gauge,
  RadialBar,
  PolarBar,
  Legend,
  Text,
  Tooltip,
  Progress,
  Axis
}

const global = getGlobal()
if (process.env.NODE_ENV === 'development') {
  global.qcharts = qcharts
} else {
  global.qcharts = { h }
}

export {
  version,
  h,
  Chart,
  BasePlugin,
  BaseVisual,
  Global,
  Dataset,
  Pie,
  ArcPie,
  Area,
  Line,
  Radar,
  Bar,
  Funnel,
  Scatter,
  Gauge,
  RadialBar,
  Legend,
  Text,
  Tooltip,
  Progress,
  Axis
}

export default qcharts
