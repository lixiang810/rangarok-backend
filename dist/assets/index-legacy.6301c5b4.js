function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,n,a,o,c){try{var u=e[o](c),i=u.value}catch(l){return void r(l)}u.done?t(i):Promise.resolve(i).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){asyncGeneratorStep(o,n,a,c,u,"next",e)}function u(e){asyncGeneratorStep(o,n,a,c,u,"throw",e)}c(void 0)}))}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(i){u=!0,a=i}finally{try{c||null==r.return||r.return()}finally{if(u)throw a}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}System.register(["./vendor-legacy.579d03f5.js"],(function(){"use strict";var e,t,r,n,a,o,c,u,i,l,s,f,m,d,p,g,y,v,b,h,E,S,w,k,_,T,A,I,x,O,j,R,C,P,G,F;return{setters:[function(L){e=L.R,t=L.C,r=L.u,n=L.a,a=L.m,o=L.c,c=L.b,u=L.d,i=L.T,l=L.e,s=L.S,f=L.G,m=L.B,d=L.v,p=L.f,g=L.g,y=L.h,v=L.i,b=L.t,h=L.r,E=L.j,S=L.I,w=L.A,k=L.k,_=L.D,T=L.l,A=L.n,I=L.o,x=L.p,O=L.q,j=L.s,R=L.w,C=L.P,P=L.x,G=L.y,F=L.z}],execute:function(){var L=function(r){var n=_slicedToArray(e.useState(!1),2),a=n[0],o=n[1];return e.createElement(t,{style:{width:"100%",height:"100%"},onMouseOver:function(){o(!0)},onMouseOut:function(){o(!1)},raised:a},r.children)},B=function(){var e=r().enqueueSnackbar;return{inherit:function(t){e(t,{variant:"default"})},success:function(t){e(t,{variant:"success"})},err:function(t){e(t,{variant:"error"})},warn:function(t){e(t,{variant:"warning"})},info:function(t){e(t,{variant:"info"})}}},D=function(e,t){var r=e.indexOf(t);return[].concat(_toConsumableArray(e.slice(0,r)),_toConsumableArray(e.slice(r+1,e.length)))},U="/api",W="",H={setToken:function(e){W="bearer ".concat(e)},studentSignById:function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("".concat(U,"/signService/signaStudentById/").concat(t),{headers:{Authorization:W}});case 2:return r=e.sent,e.abrupt("return",r.data.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),studentUnsignById:function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("".concat(U,"/signService/unsignaStudentById/").concat(t),{headers:{Authorization:W}});case 2:return r=e.sent,e.abrupt("return",r.data.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=a((function(e){return o({roomSigned:{backgroundColor:e.palette.primary.main},roomPartSigned:{backgroundColor:e.palette.primary.light},roomFullUnSigned:{backgroundColor:e.palette.secondary.main}})})),z=function(t){var r=t.room,n=N(),a=_slicedToArray(e.useState(n.roomFullUnSigned),2),o=a[0],l=a[1],s=c((function(e){return e.student}));return e.useEffect((function(){var e=r.peoples.map((function(e){return!!s.includes(e.id)}));e.includes(!1)?e.includes(!0)?l(n.roomPartSigned):l(n.roomFullUnSigned):l(n.roomSigned)}),[s]),e.createElement(e.Fragment,null,e.createElement(L,null,e.createElement(u,{className:o},e.createElement(i,{variant:"h5",align:"center",style:{color:"#fff"}},r.code),e.createElement(K,{peoples:r.peoples}))))},K=function(t){var r=t.peoples,n=l(),a=c((function(e){return e.student})),o=B();return e.createElement(s,{container:!0,direction:"column",spacing:1},r.map((function(t,r){return e.createElement(s,{item:!0,key:t.id},e.createElement(f,{in:!0,timeout:350*r},e.createElement(m,{color:a.includes(t.id)?"primary":"secondary",style:{width:76.4,paddingLeft:0,paddingRight:0},variant:"contained",onClick:function(e){if(e.preventDefault(),!localStorage.getItem("token"))return o.err("未登录，点击右上角登录");var r;a.includes(t.id)?n((r=t.id,function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H.setToken(localStorage.getItem("token")),e.next=3,H.studentUnsignById(r);case 3:n=e.sent,t({type:"unSignaStudent",data:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):n(function(e){return function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return H.setToken(localStorage.getItem("token")),t.next=3,H.studentSignById(e);case 3:n=t.sent,r({type:"signaStudent",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.id))}},t.name)))})))},M=function(t){var r=t.rooms;return e.createElement(L,null,e.createElement(u,null,e.createElement(s,{container:!0,direction:"row",spacing:1,justify:"center",alignItems:"flex-start"},r.map((function(t){return e.createElement(s,{item:!0,key:d()},e.createElement(z,{room:t}))})))))},q=function(t){var r=t.places;return e.createElement(e.Fragment,null,r.map((function(t){return e.createElement($,{place:t,key:t.name})})))},$=function(t){var r=t.place;return e.createElement(e.Fragment,null,e.createElement(i,{variant:"h4",align:"center"},r.name),e.createElement(M,{rooms:r.rooms}))},J={getGroupInfo:function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("".concat(U,"/getInf/getGroupStatByName/").concat(t));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(t){var r=t.groups,a=l();return e.useEffect((function(){a(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("".concat(U,"/getSignedStudents"));case 2:r=e.sent,t({type:"initStudents",data:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),e.createElement(e.Fragment,null,r.map((function(t){return e.createElement(V,{group:t,key:t.name})})))},V=function(t){var r=t.group,n=_slicedToArray(e.useState({name:"",signed:0,total:0}),2),a=n[0],o=n[1];return e.useEffect((function(){J.getGroupInfo(r.name).then((function(e){o(e)}))}),[]),e.createElement(e.Fragment,null,e.createElement(i,{variant:"h3",align:"center",style:{marginTop:8}},r.name),e.createElement(i,{variant:"h6",align:"center"},"签到数：",a.signed,"/",a.total),e.createElement(q,{places:r.places}))},X=function(e){return{type:"changePassword",data:e}},Y=p({student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signaStudent":return e.concat(t.data);case"unSignaStudent":return D(e,t.data);case"initStudents":return t.data;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"root",password:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeUsername":return _objectSpread(_objectSpread({},e),{},{username:t.data});case"changePassword":return _objectSpread(_objectSpread({},e),{},{password:t.data});default:return e}}}),Z=g(Y,y(v(b))),ee={palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(128, 226, 126, 1)",main:"rgba(76, 175, 80, 1)",dark:"rgba(8, 127, 35, 1)",contrastText:"#fff"},secondary:{light:"rgba(255, 121, 96, 1)",main:"rgba(244, 67, 53, 1)",dark:"rgba(185, 0, 11, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}},te=a((function(e){return{loginIconStyle:{position:"fixed",right:0},red:{color:"#fff",backgroundColor:h[500]},green:{color:"#fff",backgroundColor:E[500]}}})),re=function(){var t=te(),r=_slicedToArray(e.useState(!1),2),n=r[0],a=r[1],o=_slicedToArray(e.useState(!1),2),c=o[0],u=o[1],i=_slicedToArray(e.useState(!1),2),l=i[0],s=i[1];e.useEffect((function(){localStorage.getItem("token")&&s(!0)}),[]);return e.createElement(e.Fragment,null,e.createElement(S,{className:t.loginIconStyle,onClick:function(e){e.preventDefault(),l?u(!0):a(!0)}},e.createElement(w,{className:l?t.green:t.red},e.createElement(k,null))),e.createElement(ne,{open:n,setOpen:a,setLoggedin:s}),e.createElement(ae,{open:c,setOpen:u,setLoggedin:s}))},ne=function(t){var r=t.open,a=t.setOpen,o=t.setLoggedin,u=l(),i=c((function(e){return e.user})),s=B(),f=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),e.prev=1,e.next=4,n.post("".concat(U,"/login"),{password:i.password});case 4:t=e.sent,u({type:"changeUsername",data:t.data.user}),localStorage.setItem("token",t.data.token),o(!0),s.success("登录成功"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message),s.err("登录失败，请检查密码");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return e.createElement("div",null,e.createElement(_,{open:r,"aria-labelledby":"form-dialog-title"},e.createElement(T,{id:"form-dialog-title"},"登录"),e.createElement(A,null,e.createElement(I,null,"你把你密码给我交了"),e.createElement(x,{autoFocus:!0,margin:"dense",id:"name",label:"密码",type:"password",fullWidth:!0,onChange:function(e){u(X(e.target.value))},style:{color:"#1976d2"}})),e.createElement(O,null,e.createElement(m,{onClick:f,color:"primary"},"确定"))))},ae=function(t){var r=t.open,n=t.setOpen,a=t.setLoggedin,o=l(),c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),o(X("")),localStorage.removeItem("token"),a(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e.createElement("div",null,e.createElement(_,{open:r,onClose:u,"aria-labelledby":"form-dialog-title"},e.createElement(T,{id:"form-dialog-title"},"注销"),e.createElement(A,null,e.createElement(I,null,"当真退出登录？")),e.createElement(O,null,e.createElement(m,{onClick:u,color:"primary"},"取消"),e.createElement(m,{onClick:c,color:"secondary"},"确定"))))},oe=function(t){var r=t.children,n=e.createRef(),a=function(e){return function(){n.current.closeSnackbar(e)}};return e.createElement(j,{maxSnack:4,preventDuplicate:!0,ref:n,action:function(t){return e.createElement(m,{onClick:a(t),style:{color:"#FFF"}},"关闭")}},r)},ce=function(){var t=R(ee),r=_slicedToArray(e.useState([]),2),a=r[0],o=r[1];return e.useEffect((function(){n.get("".concat(U,"/getInf/getStudentsByRoom")).then((function(e){o(e.data)}))}),[]),e.createElement(C,{store:Z},e.createElement(P,{theme:t},e.createElement(oe,null,e.createElement(re,null),e.createElement(G,null,e.createElement(Q,{groups:a})))))};F.render(e.createElement(ce,null),document.getElementById("root"))}}}));
