(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(5),a=n.n(o),s=n(27),c=n.n(s),r=(n(55),n(28)),l=n(11),u=(n(56),n(48)),j=n.n(u),b=(n(221),n(222),n(49)),d=n.n(b),h=function(){return Object(i.jsx)("div",{className:"logo-box",children:Object(i.jsx)(d.a,{className:"tilt",options:{max:25},children:Object(i.jsx)("div",{className:"tilt-inner"})})})},m=function(e){var t=e.isSignedIn,n=e.onRouteChange;return Object(i.jsxs)("header",{children:[Object(i.jsx)(h,{}),!0===t?Object(i.jsx)("nav",{className:"nav-Loggedin",children:Object(i.jsx)("p",{onClick:function(){return n("signout")},children:"Sign Out"})}):Object(i.jsxs)("nav",{className:"nav-loggedout",children:[Object(i.jsx)("p",{onClick:function(){return n("signin")},children:"Sign In"}),Object(i.jsx)("p",{onClick:function(){return n("register")},children:"Register"})]})]})},p=(n(223),function(e){var t=e.onInputChange,n=e.onBtnSubmit;return Object(i.jsxs)("div",{className:"form-box",children:[Object(i.jsx)("p",{children:"Detect faces in your pictures."}),Object(i.jsxs)("div",{className:"form-input",children:[Object(i.jsx)("input",{className:"input-form",type:"text",onChange:t}),Object(i.jsx)("button",{onClick:n,children:"Scan"})]})]})}),g=(n(224),function(e){var t=e.name,n=e.entries;return Object(i.jsxs)("div",{className:"rank-box",children:[Object(i.jsx)("div",{className:"rank-text",children:"".concat(t,", your current entry count is...")}),Object(i.jsx)("div",{className:"rank-num",children:n})]})}),f=(n(225),function(e){var t=e.imageUrl,n=e.box;return Object(i.jsx)("div",{className:"facerecognition-box",children:t?Object(i.jsxs)("div",{className:"image-box",children:[Object(i.jsx)("img",{id:"inputimage",alt:"scanned",src:t}),Object(i.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]}):Object(i.jsx)("p",{children:"No picture scanned yet."})})});n(47);var O=function(e){var t=e.onRouteChange,n=e.loadUser,a=Object(o.useState)(""),s=Object(l.a)(a,2),c=s[0],r=s[1],u=Object(o.useState)(""),j=Object(l.a)(u,2),b=j[0],d=j[1];return Object(i.jsx)("div",{className:"signin-box",children:Object(i.jsx)("div",{className:"form",children:Object(i.jsxs)("fieldset",{id:"sign_in",children:[Object(i.jsx)("legend",{children:"Sign In"}),Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{type:"email",name:"email",onChange:function(e){d(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",onChange:function(e){r(e.target.value)}}),Object(i.jsx)("input",{className:"button",onClick:function(){fetch("https://frozen-shore-44702.herokuapp.com/signin",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:b,password:c})}).then((function(e){return e.json()})).then((function(e){e.id&&(n(e),t("home"))}))},type:"submit",value:"Sign in"}),Object(i.jsx)("p",{onClick:function(){return t("register")},children:"Register"})]})})})};var x=function(e){var t=e.onRouteChange,n=e.loadUser,a=Object(o.useState)(""),s=Object(l.a)(a,2),c=s[0],r=s[1],u=Object(o.useState)(""),j=Object(l.a)(u,2),b=j[0],d=j[1],h=Object(o.useState)(""),m=Object(l.a)(h,2),p=m[0],g=m[1];return Object(i.jsx)("div",{className:"signin-box",children:Object(i.jsx)("div",{className:"form",children:Object(i.jsxs)("fieldset",{id:"register",children:[Object(i.jsx)("legend",{children:"Register"}),Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{type:"text",name:"name",onChange:function(e){g(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{type:"email",name:"email",onChange:function(e){d(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",onChange:function(e){r(e.target.value)}}),Object(i.jsx)("input",{className:"button",onClick:function(){fetch("https://frozen-shore-44702.herokuapp.com/register",{method:"put",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://wannesds.github.io/facerecognition/"},body:JSON.stringify({email:b,password:c,name:p})}).then((function(e){return e.json()})).then((function(e){e.id&&(n(e),t("home"))})).catch((function(e){console.log("unable to register",e)}))},type:"submit",value:"Register"})]})})})},v={background:{color:{value:"transparent"},position:"50% 50%",repeat:"no-repeat",size:"cover"},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},connect:{distance:10},grab:{distance:400}}},particles:{color:{value:"#1f2122"},links:{color:{value:"#2de4d5"},distance:10,enable:!1,opacity:.4,triangles:{enable:!0}},move:{attract:{rotate:{x:600,y:1200}},enable:!0,outModes:{bottom:"out",left:"out",right:"out",top:"out"},speed:2},number:{density:{enable:!0},value:80},opacity:{random:{enable:!0},value:.5,animation:{enable:!0,minimumValue:.1,speed:3}},shape:{options:{polygon:{nb_sides:5},star:{nb_sides:5},image:{src:"https://cdn.matteobruni.it/images/particles/github.svg",width:100,height:100},images:{src:"https://cdn.matteobruni.it/images/particles/github.svg",width:100,height:100}}},size:{random:{enable:!0},value:4,animation:{enable:!0,minimumValue:.1,speed:2}},stroke:{color:{value:"#000000",animation:{enable:!1,speed:1,sync:!0}}},twinkle:{lines:{color:{value:"#ff0000"}},particles:{color:{value:"#ffff00"}}}}};var y=function(){var e="",t="",n={},a="signin",s=!1,c={id:"",name:"",email:"",entries:0,joined:""},u=Object(o.useState)(e),b=Object(l.a)(u,2),d=b[0],h=b[1],y=Object(o.useState)(t),C=Object(l.a)(y,2),N=C[0],w=C[1],S=Object(o.useState)(n),k=Object(l.a)(S,2),R=k[0],F=k[1],I=Object(o.useState)(a),_=Object(l.a)(I,2),z=_[0],J=_[1],T=Object(o.useState)(s),U=Object(l.a)(T,2),B=U[0],A=U[1],E=Object(o.useState)(c),P=Object(l.a)(E,2),L=P[0],D=P[1],M=function(e){D({id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined})},V=function(e){J(e),"signout"===e?(A(s),w(t)):"home"===e&&A(!0)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(m,{isSignedIn:B,onRouteChange:V}),Object(i.jsx)(j.a,{className:"particles",width:"100vw",height:"auto",canvasClassName:"App",params:v}),"home"===z?Object(i.jsxs)("section",{children:[Object(i.jsx)(g,{name:L.name,entries:L.entries}),Object(i.jsx)(p,{onInputChange:function(e){h(e.target.value)},onBtnSubmit:function(){w(d),fetch("https://frozen-shore-44702.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:d})}).then((function(e){return e.json()})).then((function(e){e&&(console.log(e),fetch("https://frozen-shore-44702.herokuapp.com/image",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:L.id})}).then((function(e){return e.json()})).then((function(e){D((function(t){return Object(r.a)(Object(r.a)({},t),{},{entries:e})}))})).catch((function(e){return console.log(e)}))),function(e){F(e),console.log(e)}(function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),i=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*i,topRow:t.top_row*o,rightCol:i-t.right_col*i,bottomRow:o-t.bottom_row*o}}(e))})).catch((function(e){return console.log(e)}))}}),Object(i.jsx)(f,{box:R,imageUrl:N})]}):"signin"===z?Object(i.jsx)(O,{onRouteChange:V,loadUser:M}):Object(i.jsx)(x,{onRouteChange:V,loadUser:M})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,228)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),a(e),s(e)}))};n(226);c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),C()},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){}},[[227,1,2]]]);
//# sourceMappingURL=main.a81d6bc8.chunk.js.map