(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),n=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Bar Chart 基础条形图")]),s._v(" "),t("block-demo",{attrs:{tip:"1",source:"const data = [\n  { value: 6100, label: 'TOP1' },\n  { value: 5200, label: 'TOP2' },\n  { value: 4400, label: 'TOP3' },\n  { value: 3700, label: 'TOP4' },\n  { value: 2800, label: 'TOP5' },\n  { value: 2000, label: 'TOP6' },\n  { value: 1300, label: 'TOP7' },\n  { value: 400, label: 'TOP8' }\n]\nconst { Chart, Bar, Tooltip, Axis, Legend } = qcharts\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: '*',\n  value: 'value',\n  text: 'label'\n})\nconst bar = new Bar({\n  pos: ['20%', '10%'],\n  size: ['70%', '80%'],\n  transpose: true,\n  barWidth: 18\n})\nbar.style('pillar', { fillColor: '#47A1FF' })\nconst tooltip = new Tooltip({\n  formatter: d => `${d.label}: ${d.value}`\n}).style('icon', { fillColor: '#47A1FF' })\nconst legend = new Legend({ align: ['center', 'bottom'] }).style('text', {\n  text: '图例一'\n})\nconst axisBottom = new Axis().style('scale', false).style('grid', true)\nconst axisLeft = new Axis({\n  orient: 'left'\n}).style('grid', false)\nchart.add([bar, tooltip, legend, axisBottom, axisLeft])\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP1'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP2'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP3'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3700")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP4'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2800")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP5'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP6'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1300")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP7'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'TOP8'")]),s._v(" }\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Bar, Tooltip, Axis, Legend } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'*'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'20%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'70%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("transpose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("barWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("18")]),s._v("\n})\nbar.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pillar'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(" })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.label}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v("\n}).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(" })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] }).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis().style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'scale'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(").style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'grid'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v("\n}).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'grid'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\nchart.add([bar, tooltip, legend, axisBottom, axisLeft])\nchart.render()\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);