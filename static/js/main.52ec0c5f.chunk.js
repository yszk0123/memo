(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],{33:function(e,t,n){e.exports=n(59)},34:function(e,t,n){},35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);n(34),n(35);var r,a=n(1),c=n.n(a),o=n(16),u=n.n(o),E=n(12),i=n(30);function s(e){var t=e.dispatch,n=e.onAdd,c=e.onSave;!function(e){var t=e.onKeyDown;Object(a.useEffect)((function(){var e=document.body;function n(n){n.target===e&&t(n)}return e.addEventListener("keydown",n),function(){e.removeEventListener("keydown",n)}}),[t])}({onKeyDown:Object(a.useCallback)((function(e){if(e.code===r.KEY_A)n();else if(e.code===r.BACKSPACE);else if(e.code===r.ESCAPE);else{if(!e.ctrlKey&&!e.metaKey||e.code!==r.KEY_S)return;c()}e.preventDefault()}),[t,n,c])})}!function(e){e.BACKSPACE="Backspace",e.ENTER="Enter",e.ESCAPE="Escape",e.KEY_A="KeyA",e.KEY_D="KeyD",e.KEY_R="KeyR",e.KEY_S="KeyS",e.KEY_W="KeyW"}(r||(r={}));var _,S=E.c;!function(e){e.USER_LOGIN_REQUEST="USER_LOGIN_REQUEST",e.USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS",e.USER_LOGOUT_REQUEST="USER_LOGOUT_REQUEST",e.USER_LOGOUT_SUCCESS="USER_LOGOUT_SUCCESS",e.NOTE_GET_ALL_REQUEST="NOTE_GET_ALL_REQUEST",e.NOTE_GET_ALL_SUCCESS="NOTE_GET_ALL_SUCCESS",e.NOTE_ADD_REQUEST="NOTE_ADD_REQUEST",e.NOTE_ADD_SUCCESS="NOTE_ADD_SUCCESS",e.NOTE_REMOVE="NOTE_REMOVE"}(_||(_={}));var O={NOTE_ADD_REQUEST:function(e){return{type:_.NOTE_ADD_REQUEST,payload:{text:e}}},NOTE_ADD_SUCCESS:function(e){return{type:_.NOTE_ADD_SUCCESS,payload:{note:e}}},NOTE_REMOVE:function(){return{type:_.NOTE_REMOVE}},USER_LOGIN_REQUEST:function(){return{type:_.USER_LOGIN_REQUEST}},USER_LOGIN_SUCCESS:function(e){return{type:_.USER_LOGIN_SUCCESS,payload:{user:e}}},USER_LOGOUT_REQUEST:function(){return{type:_.USER_LOGOUT_REQUEST}},USER_LOGOUT_SUCCESS:function(){return{type:_.USER_LOGOUT_SUCCESS}},NOTE_GET_ALL_REQUEST:function(){return{type:_.NOTE_GET_ALL_REQUEST}},NOTE_GET_ALL_SUCCESS:function(e){return{type:_.NOTE_GET_ALL_SUCCESS,payload:{notes:e}}}},l={user:function(e){return e.user},notes:function(e){return e.notes}};function f(){}var p=n(18),d=n.n(p),b=function(e){var t=e.className,n=e.children,r=e.disabled,a=e.onClick;return c.a.createElement("button",{className:d()("Button",t),disabled:r,onClick:a},n)},U=n(32),T=function(e){var t=e.className,n=e.children,r=Object(U.a)(e,["className","children"]);return c.a.createElement("input",Object.assign({},r,{className:d()("TextInput",t)}),n)},m=function(e){var t=e.children;return c.a.createElement("div",{className:"AppLayout"},c.a.createElement("header",{className:"AppLayout__header"},"Memo"),c.a.createElement("main",{className:"AppLayout__content"},t))},C=function(){var e=Object(E.b)(),t=S(l.user),n=S(l.notes),r=Object(a.useCallback)((function(){e(O.USER_LOGIN_REQUEST())}),[e]),o=Object(a.useCallback)((function(t){e(O.NOTE_ADD_REQUEST(t))}),[e]);return s({dispatch:e,onAdd:f,onSave:f}),null===t?c.a.createElement(m,null,c.a.createElement(b,{onClick:r},"Login")):c.a.createElement(m,null,c.a.createElement("p",null,t.displayName?"Hello, ".concat(t.id,"!"):"Hello"),c.a.createElement(R,{notes:n}),c.a.createElement(N,{onSubmit:o}))},N=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],u=r[1],E=Object(a.useCallback)((function(e){var t=e.currentTarget.value;u(t)}),[]),s=Object(a.useCallback)((function(){t(o),u("")}),[o,t]),_=""===o;return c.a.createElement("div",null,c.a.createElement(T,{value:o,onChange:E}),c.a.createElement(b,{className:"HomePage__note-add",disabled:_,onClick:s},"Add"))},R=function(e){var t=e.notes;return c.a.createElement("div",{className:"NoteList"},t.map((function(e){return c.a.createElement(v,{key:e.id,note:e})})))},v=function(e){var t=e.note,n=Object(a.useMemo)((function(){return function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate(),c=t.getHours(),o=t.getMinutes();return"".concat(n,"-").concat(L(r),"-").concat(L(a)," ").concat(L(c),":").concat(L(o))}(t.createdAt)}),[t]);return c.a.createElement("div",{className:"NoteView"},c.a.createElement("p",{className:"NoteView-text"},t.text),c.a.createElement("p",{className:"NoteView-created-at"},n))};function L(e){return e<10?"0".concat(e):"".concat(e)}var j,A=n(10),y=n(19),h=n(31),D=n(13);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(D.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return t};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=t[a.type];return void 0!==c?c(r,a):n(r,a)}}({user:null,notes:[]},(j={},Object(D.a)(j,_.USER_LOGIN_SUCCESS,(function(e,t){return w({},e,{user:t.payload.user})})),Object(D.a)(j,_.USER_LOGOUT_SUCCESS,(function(e){return w({},e,{user:null})})),Object(D.a)(j,_.NOTE_GET_ALL_SUCCESS,(function(e,t){return w({},e,{notes:t.payload.notes})})),Object(D.a)(j,_.NOTE_ADD_SUCCESS,(function(e,t){var n=t.payload.note;return w({},e,{notes:[].concat(Object(h.a)(e.notes),[n])})})),j)),g=n(7),k=n.n(g),I=n(5),Q=n(22),P=n.n(Q),K=(n(45),n(47),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/memo"}).REACT_APP_FIREBASE_API_KEY,authDomain:"counter-64673.firebaseapp.com",databaseURL:"https://counter-64673.firebaseio.com",projectId:"counter-64673",storageBucket:"counter-64673.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/memo"}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:"1:61000756567:web:5d923c067f28d0ab8c6212"});P.a.initializeApp(K);var B=n(29);function M(e,t){return{id:Object(B.generate)(),text:t,authorId:e,createdAt:Date.now()}}var V=k.a.mark(q),Y=k.a.mark(Z),H=k.a.mark(ee),F=k.a.mark(te),W=k.a.mark(ne),J=k.a.mark(re),X={_:"EmptyUser"};function z(){return Object(y.b)((function(e){return P.a.auth().onAuthStateChanged((function(t){e(t||X)}))}))}function q(){var e,t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new P.a.auth.GoogleAuthProvider,t=P.a.auth(),n.next=4,Object(I.b)([t,t.signInWithRedirect],e);case 4:case"end":return n.stop()}}),V)}function Z(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=P.a.auth(),t.next=3,Object(I.b)([e,e.signOut]);case 3:case"end":return t.stop()}}),Y)}function $(e){return{id:e.uid,displayName:e.displayName}}function ee(){var e,t,n;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(I.b)(z);case 2:e=r.sent,r.prev=3;case 4:return r.next=7,Object(I.g)(e);case 7:if((t=r.sent)===X){r.next=16;break}return n=$(t),r.next=12,Object(I.e)(O.USER_LOGIN_SUCCESS(n));case 12:return r.next=14,Object(I.e)(O.NOTE_GET_ALL_REQUEST());case 14:r.next=18;break;case 16:return r.next=18,Object(I.e)(O.USER_LOGOUT_SUCCESS());case 18:r.next=4;break;case 20:return r.prev=20,r.next=23,Object(I.c)();case 23:if(!r.sent){r.next=25;break}e.close();case 25:return r.finish(20);case 26:case"end":return r.stop()}}),H,null,[[3,,20,26]])}function te(e){var t,n,r,a,c;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload.text,o.next=3,Object(I.f)(l.user);case 3:if(null!==(n=o.sent)){o.next=6;break}return o.abrupt("return");case 6:return r=M(n.id,t),a=P.a.firestore(),c=a.collection("notes"),o.next=11,Object(I.b)([c,c.add],r);case 11:return o.next=13,Object(I.e)(O.NOTE_ADD_SUCCESS(r));case 13:case"end":return o.stop()}}),F)}function ne(e){var t,n,r,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.f)(l.user);case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:return n=P.a.firestore(),r=n.collection("notes").where("authorId","==",t.id),e.next=9,Object(I.b)([r,r.get]);case 9:return a=e.sent,c=ae(a),e.next=13,Object(I.e)(O.NOTE_GET_ALL_SUCCESS(c));case 13:case"end":return e.stop()}}),W)}function re(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.h)(_.USER_LOGIN_REQUEST,q),Object(I.h)(_.USER_LOGOUT_REQUEST,Z),Object(I.h)(_.NOTE_GET_ALL_REQUEST,ne),Object(I.h)(_.NOTE_ADD_REQUEST,te),Object(I.d)(ee)]);case 2:case"end":return e.stop()}}),J)}function ae(e){var t=[];return e.forEach((function(e){return t.push(e.data()),t})),t}!function(){var e=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,t=Object(y.a)(),n=Object(A.d)(x,e(Object(A.a)(t)));return t.run(re),n}(),t=document.getElementById("root");u.a.render(c.a.createElement(E.a,{store:e},c.a.createElement(C,null)),t)}()}},[[33,1,2]]]);
//# sourceMappingURL=main.52ec0c5f.chunk.js.map