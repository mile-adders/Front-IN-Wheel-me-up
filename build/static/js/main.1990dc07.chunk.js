(this["webpackJsonpFront-End-Wheel-me-up"]=this["webpackJsonpFront-End-Wheel-me-up"]||[]).push([[0],{128:function(e,t,a){e.exports=a(255)},154:function(e,t){},156:function(e,t){},193:function(e,t){},194:function(e,t){},254:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(117),c=a.n(l),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=a(15),m=a(18),s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"center"},"Home"),r.a.createElement("p",null,"Welcome Home our dear customer"))},p=function(e){var t=["red","blue","orange","green","yellow","purple"][Math.floor(5*Math.random())]+"-text";return function(a){return r.a.createElement("div",{className:t},r.a.createElement(e,a))}}((function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"About-Us"),r.a.createElement("p",null,"Welcome About-Us our dear customer and we are the great Mile adder Team enjoy you trip "))})),d=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"ContactUs"),r.a.createElement("p",null,"Welcome ContactUs our dear customer"))},E=a(3),f=a(24),b=a.n(f),g=void 0,h=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(E.a)(o,2),i=u[0],m=u[1],s=Object(n.useState)(""),p=Object(E.a)(s,2),d=p[0],f=p[1],h=Object(n.useState)(""),v=Object(E.a)(h,2),O=v[0],j=v[1],y=Object(n.useState)(""),w=Object(E.a)(y,2),S=w[0],N=w[1],k=Object(n.useState)(""),C=Object(E.a)(k,2),I=C[0],D=C[1],L=Object(n.useState)([]),U=Object(E.a)(L,2),W=U[0],x=U[1],P=Object(n.useState)(""),A=Object(E.a)(P,2),q=A[0],F=A[1];return Object(n.useEffect)((function(){return b.a.get("https://wheel-me-up-m.herokuapp.com/api/v1/car-company").then((function(e){console.log("response:",e),x(e.data)})).catch((function(e){console.log(e),F("Error retrieving Data")})),function(){console.log("error")}}),[]),r.a.createElement("div",null,"Car-Company Schema",r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={carName:l,brand:i,type:d,year:O,dateAvailable:S,priceForRent:I};console.log("State:",t),b.a.post("https://wheel-me-up-m.herokuapp.com/api/v1/car-company",t).then((function(e){console.log("response:",e),g.setState({posts:e.data})})).catch((function(e){console.log(e),F("Error retrieving data")}))}},r.a.createElement("input",{type:"text",className:"useInput",name:"carName",value:l,placeholder:"car name",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"text",className:"useInput",name:"brand",value:i,placeholder:"Brand",onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{type:"text",className:"useInput",name:"type",value:d,placeholder:"car type",onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{type:"text",className:"useInput",name:"year",value:O,placeholder:"manufacturing year",onChange:function(e){return j(e.target.value)}}),r.a.createElement("input",{type:"date",className:"useInput",name:"dateAvailable ",value:S,placeholder:"Dates Available",onChange:function(e){return N(e.target.value)}}),r.a.createElement("input",{type:"text",className:"useInput",name:"priceForRent",value:I,placeholder:"price",onChange:function(e){return D(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Go!")),r.a.createElement("div",null,r.a.createElement("div",{className:"results"},"Cars available",W.length?W.map((function(e){return r.a.createElement("div",{key:e.id},e.title)})):null,q?r.a.createElement("div",null,q):null)))},v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"DashBoard"),r.a.createElement("p",null,"Welcome DashBoard our dear customer"),r.a.createElement(h,null))};function O(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(E.a)(o,2),i=u[0],m=u[1],s=Object(n.useState)(""),p=Object(E.a)(s,2),d=p[0],f=p[1],g=Object(n.useState)(""),h=Object(E.a)(g,2),v=h[0],O=h[1],j=Object(n.useState)([]),y=Object(E.a)(j,2),w=y[0],S=y[1],N=Object(n.useState)(""),k=Object(E.a)(N,2),C=k[0],I=k[1];return Object(n.useEffect)((function(){return b.a.get("https://wheel-me-up-m.herokuapp.com/api/v1/user-car").then((function(e){console.log("response:",e),S(e.data)})).catch((function(e){console.log(e),I("Error retrieving Data")})),function(){console.log("error")}}),[]),r.a.createElement("div",null,"car rent form",r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={pickupLocation:l,pickupDate:i,dropOffDate:d,car:v};console.log("state",t),b.a.post("https://wheel-me-up-m.herokuapp.com/api/v1/user-car",t).then((function(e){console.log("response",e),S(e.data)})).catch((function(e){console.log(e),I("Error retrieving data")}))}},r.a.createElement("input",{type:"text",className:"useInput",name:"pickupLocation",value:l,placeholder:"Pickup Location",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"date",className:"useInput",name:"pickupDate",value:i,placeholder:"Pickup Date",onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{type:"date",className:"useInput",name:"dropOffDate",value:d,placeholder:"Drop off Date",onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{type:"text",className:"useInput",name:"car",value:v,placeholder:"car",onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{className:"submit",type:"submit"},"Go Rent!!")),r.a.createElement("div",null,r.a.createElement("div",{className:"results"},"Cars available",w.length?w.map((function(e){return r.a.createElement("div",{key:e.id},e.title)})):null,C?r.a.createElement("div",null,C):null)))}a(59),a(118),a(39),a(119),r.a.createContext(),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API;var j=r.a.createContext();var y=a(120),w=a(121),S=a(126),N=a(127),k=a(122),C=a.n(k),I=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.responseFacebook=function(t){e.setState({isLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url})},e.componentClicked=function(){return console.log("clicked")},e}return Object(w.a)(a,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?r.a.createElement("div",null,r.a.createElement("img",{src:this.state.picture,alt:this.state.name}),r.a.createElement("h2",null,"Welcome ",this.state.name),"Email: ",this.state.email):r.a.createElement(C.a,{appId:"653628268747487",autoLoad:!1,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),r.a.createElement("div",null,e)}}]),a}(n.Component),D=a(123),L=a.n(D);var U=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(""),s=Object(E.a)(m,2),p=s[0],d=s[1],f=function(e){l(e.profileObj.name),i(e.profileObj.email),d(e.profileObj.imageUrl)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Login with Google"),r.a.createElement("h2",null," Welcome: ",a),r.a.createElement("h2",null," Email: ",u),r.a.createElement("img",{src:p,alt:a}),r.a.createElement(L.a,{clientId:"911474006429-5ppak2jacmahu6ie9gphplcdok82flej.apps.googleusercontent.com",buttonText:"Login",onSuccess:f,onFailure:f,cookiePolicy:"single_host_origin"}))},W=function(){var e=Object(n.useContext)(j);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target.name.value,n=t.target.password.value;e.logIn(a,n)}},r.a.createElement("label",null," UserName: ",r.a.createElement("input",{name:"name",required:!0})," "),r.a.createElement("label",null," Password: ",r.a.createElement("input",{type:"password",name:"password",required:!0})),r.a.createElement("button",{type:"submit"}," LogIn "),r.a.createElement(I,null),r.a.createElement(U,null)),r.a.createElement(O,null),r.a.createElement("button",{onClick:function(){e.logOut()}}," LogOut "))},x=a(60),P=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),l=Object(E.a)(a,2),c=(l[0],l[1],Object(n.useState)(!0)),o=Object(E.a)(c,2);o[0],o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",null," User Name: ",r.a.createElement("input",{name:"userName",required:!0})),r.a.createElement("label",null," First Name: ",r.a.createElement("input",{name:"firstName",required:!0})),r.a.createElement("label",null,"  Last Name: ",r.a.createElement("input",{name:"lastName",required:!0})),r.a.createElement("label",null," Email: ",r.a.createElement("input",{name:"email",required:!0})),r.a.createElement("label",null," Password: ",r.a.createElement("input",Object(x.a)({required:!0,type:"password",name:"password"},"required",!0))),r.a.createElement("label",null," Confirm Password: ",r.a.createElement("input",Object(x.a)({required:!0,type:"password",name:"confirmPassword"},"required",!0))),r.a.createElement("label",null," Sign As:",r.a.createElement("input",{type:"radio",value:"guest",name:"role",required:!0})," Car user",r.a.createElement("input",{type:"radio",value:"user",name:"role",required:!0})," Car rental"),r.a.createElement("label",null,"I accept the Terms of Use & Privacy Policy"),r.a.createElement("input",{type:"checkbox",required:!0}),r.a.createElement("button",{type:"submit",name:"signUp"}," SignUp ")),r.a.createElement(W,null))},A=Object(m.e)((function(e){return r.a.createElement("nav",{className:"nav-wrapper red "},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"brand-logo"},r.a.createElement("h4",null,"Wheel-Me-Up"))),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/aboutus"},"About-Us")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/contactus"},"Contact-US")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/dashboard"},"DashBoard")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/bookingform"},"BookingForm")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login"},"LogIn")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/signup"},"SignUp"))))})),q=(a(254),function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(m.a,{exact:!0,path:"/",component:s}),r.a.createElement(m.a,{path:"/aboutus",component:p}),r.a.createElement(m.a,{path:"/contactus",component:d}),r.a.createElement(m.a,{path:"/dashboard",component:v}),r.a.createElement(m.a,{path:"/bookingform",component:O}),r.a.createElement(m.a,{path:"/login",component:W}),r.a.createElement(m.a,{path:"/signup",component:P})))});function F(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null))}var T=document.getElementById("root");c.a.render(r.a.createElement(F,null),T),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");o?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):u(e)}))}}()}},[[128,1,2]]]);
//# sourceMappingURL=main.1990dc07.chunk.js.map