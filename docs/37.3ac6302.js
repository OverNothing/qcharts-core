(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{90:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基本雷达图")]),s._v(" "),t("block-demo",{attrs:{tip:"基本雷达图",source:"const data = [\n  { label: '分类一', category: '类别一', value: 19 },\n  { label: '分类二', category: '类别一', value: 74 },\n  { label: '分类三', category: '类别一', value: 40 },\n  { label: '分类四', category: '类别一', value: 46 },\n  { label: '分类五', category: '类别一', value: 30 },\n  { label: '分类六', category: '类别一', value: 62 }\n]\n\nconst { Chart, Radar, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: 'category',\n  value: 'value',\n  text: 'label'\n})\nconst radar = new Radar()\n\nradar.style('point', false)\n\nconst legend = new Legend({ align: ['center', 'bottom'] })\n\nchart.add([radar, legend])\n\nchart.add(\n  new Tooltip({\n    title: d => d[0].data[0].category,\n    formatter: d => {\n      const content = d.data.map(d => `${d.label}:${d.value}`)\n      return content.join('\\n')\n    }\n  })\n)\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("19")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类三'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类四'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类五'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'分类六'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Radar, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" radar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Radar()\n\nradar.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n\nchart.add([radar, legend])\n\nchart.add(\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].data["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].category,\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" content = d.data.map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.label}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(")\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" content.join("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'\\n'")]),s._v(")\n    }\n  })\n)\nchart.render()\n")])])])],1)},[],!1,null,null,null);a.default=l.exports}}]);