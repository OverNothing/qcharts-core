(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{66:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nested Pie Chart 嵌套饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 204, name: '图例一' },\n  { value: 451, name: '图例二' },\n  { value: 347, name: '图例三' },\n  { value: 256, name: '图例四' },\n\n  { value: 2790, name: '图例1' },\n  { value: 2548, name: '图例2' },\n  { value: 1350, name: '图例3' },\n  { value: 3100, name: '图例4' },\n  { value: 2340, name: '图例5' },\n  { value: 1350, name: '图例6' },\n  { value: 2450, name: '图例7' },\n  { value: 1550, name: '图例8' },\n  { value: 3450, name: '图例9' },\n  { value: 2750, name: '图例10' }\n]\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'name',\n  value: 'value'\n})\n\nconst ds = chart.dataset\n\nconst pie = new Pie({\n  radius: 0.4,\n  pos: [0, 0],\n  size: ['80%', '100%']\n}).source(ds.selectRows(data.slice(0, 4).map(d => d.name)))\npie.color(['#5982F6', '#59CB74', '#DA65CC', '#FC6980'])\npie.style('text', attrs => ({ color: '#fff', text: attrs.name }))\n\nconst pie2 = new Pie({\n  innerRadius: 0.5,\n  radius: 0.7,\n  pos: [0, 0],\n  size: ['80%', '100%']\n}).source(ds.selectRows(data.slice(4).map(d => d.name)))\npie2.color([\n  '#47A1FF',\n  '#6CD3FF',\n  '#A2E5FF',\n  '#4DCCCB',\n  '#3FDDC7',\n  '#ADDF84',\n  '#FBD54A',\n  '#FFB952',\n  '#F79452',\n  '#E37474'\n])\npie2.style('guideLine', true)\npie2.style('guideText', { fontSize: '12px' })\n\nconst legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })\nlegend.color([].concat(pie.color(), pie2.color()))\n\nlegend.style('icon', (attrs, d, i) => ({\n  marginTop: i > 0 ? 10 : 0\n}))\nlegend.style('text', (attrs, d, i) => ({\n  marginTop: i > 0 ? 10 : 0\n}))\n\nchart.add([pie, pie2, legend])\n\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("204")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("451")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("347")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("256")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例四'")]),s._v(" },\n\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2790")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例1'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2548")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例2'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例3'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例4'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2340")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例5'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例6'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例7'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例8'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例9'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2750")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例10'")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ds = chart.dataset\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n}).source(ds.selectRows(data.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(").map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name)))\npie.color(["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v("])\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", attrs => ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": attrs.name }))\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n}).source(ds.selectRows(data.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(").map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name)))\npie2.color([\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#6CD3FF'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A2E5FF'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#4DCCCB'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3FDDC7'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ADDF84'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FBD54A'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FFB952'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F79452'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#E37474'")]),s._v("\n])\npie2.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideLine'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\npie2.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideText'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'12px'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\nlegend.color([].concat(pie.color(), pie2.color()))\n\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\n\nchart.add([pie, pie2, legend])\n\nchart.render()\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);