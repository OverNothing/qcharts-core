(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{153:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("标题设置")]),s._v(" "),s._m(0),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [1, 2, 3, 4, 5].map(num => {\n  return { value: num }\n})\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n})\n\nchart.source(data, { value: 'value' })\n\nconst pie = new Pie()\n\nconst tooltip = new Tooltip({ title: '数字', formatter: d => d.value })\n\nchart.add([pie, tooltip])\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("].map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("num")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": num }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n})\n\nchart.source(data, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie()\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'数字'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.value })\n\nchart.add([pie, tooltip])\nchart.render()\n")])])]),t("block-demo",{attrs:{tip:"",source:"const data = [1, 2, 3, 4, 5].map(num => {\n  return { value: num }\n})\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n})\n\nchart.source(data, { value: 'value' })\n\nconst pie = new Pie()\n\nconst tooltip = new Tooltip({\n  title: d => {\n    return `数组 ${d[0].value}`\n  },\n  formatter: d => d.value\n})\n\nchart.add([pie, tooltip])\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("].map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("num")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": num }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n})\n\nchart.source(data, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie()\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`数组 "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].value}")]),s._v("`")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.value\n})\n\nchart.add([pie, tooltip])\nchart.render()\n")])])])],1)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("Tooltip")]),s._v(" 的标题可以设置为 "),t("code",{pre:!0},[s._v("string")]),s._v("，也可以设置为 "),t("code",{pre:!0},[s._v("function")]),s._v("。两者区别："),t("code",{pre:!0},[s._v("string")]),s._v(" 将固定标题为某字符串，"),t("code",{pre:!0},[s._v("function")]),s._v(" 则将 title 设置为函数返回值。")])}],!1,null,null,null);a.default=e.exports}}]);