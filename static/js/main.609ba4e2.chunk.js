(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{33:function(t,n,e){},34:function(t,n,e){},73:function(t,n,e){},74:function(t,n,e){},75:function(t,n,e){},76:function(t,n,e){},77:function(t,n,e){},78:function(t,n,e){},79:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(1),i=e.n(o),s=e(13),r=e.n(s),a=(e(33),e(9)),u=(e(34),e(14)),b=e.n(u),l=(e(73),e(74),e(27)),j=e.n(l),d=function(){return Object(c.jsx)("div",{className:"logo-box",children:Object(c.jsx)(j.a,{className:"tilt",options:{max:25},children:Object(c.jsx)("div",{className:"tilt-inner"})})})},f=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(d,{}),Object(c.jsx)("p",{children:"Sign Out"})]})};e(75);var x=function(t){var n=t.onInputChange,e=t.onBtnSubmit;return Object(c.jsxs)("div",{className:"form-box",children:[Object(c.jsx)("p",{children:"Detect faces in your pictures."}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("input",{className:"input-form",type:"text",onChange:n}),Object(c.jsx)("button",{onClick:e,children:"Scan"})]})]})},m=(e(76),function(){return Object(c.jsxs)("div",{className:"rank-box",children:[Object(c.jsx)("div",{className:"rank-text",children:"Wannes, your current rank is..."}),Object(c.jsx)("div",{className:"rank-num",children:"#5"})]})}),g=(e(77),function(t){var n=t.imageUrl,e=t.box;return Object(c.jsx)("div",{className:"facerecognition-box",children:n?Object(c.jsxs)("div",{className:"image-box",children:[Object(c.jsx)("img",{id:"inputimage",alt:"scanned photo",src:n}),Object(c.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})]}):Object(c.jsx)("p",{children:"No picture scanned yet."})})});var h=function(){var t=new b.a.App({apiKey:"c0b90294f2fa4311ab006f4d3930c7c8"}),n=Object(o.useState)(""),e=Object(a.a)(n,2),i=e[0],s=e[1],r=Object(o.useState)(""),u=Object(a.a)(r,2),l=u[0],j=u[1],d=Object(o.useState)({}),h=Object(a.a)(d,2),O=h[0],p=h[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsx)(m,{}),Object(c.jsx)(x,{onInputChange:function(t){s(t.target.value)},onBtnSubmit:function(){j(i),t.models.predict(b.a.FACE_DETECT_MODEL,i).then((function(t){return function(t){p(t),console.log(t)}(function(t){var n=t.outputs[0].data.regions[0].region_info.bounding_box,e=document.getElementById("inputimage"),c=Number(e.width),o=Number(e.height);return console.log(t.outputs[0].data.regions[0].region_info.bounding_box.bottom_row),{leftCol:n.left_col*c,topRow:n.top_row*o,rightCol:c-n.right_col*c,bottomRow:o-n.bottom_row*o}}(t))})).catch((function(t){return console.log(t)}))}}),Object(c.jsx)(g,{box:O,imageUrl:l})]})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,80)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,s=n.getTTFB;e(t),c(t),o(t),i(t),s(t)}))};e(78);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),O()}},[[79,1,2]]]);
//# sourceMappingURL=main.609ba4e2.chunk.js.map