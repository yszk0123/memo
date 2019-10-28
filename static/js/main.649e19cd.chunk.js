(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],{32:function(e,t,n){e.exports=n(50)},33:function(e,t,n){},34:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(33),n(34);var a,r=n(1),c=n.n(r),o=n(15),u=n.n(o),s=n(16),E=n(20);function i(e){var t=e.dispatch,n=e.onAdd,c=e.onSave;!function(e){var t=e.onKeyDown;Object(r.useEffect)((function(){var e=document.body;function n(n){n.target===e&&t(n)}return e.addEventListener("keydown",n),function(){e.removeEventListener("keydown",n)}}),[t])}({onKeyDown:Object(r.useCallback)((function(e){if(e.code===a.KEY_A)n();else if(e.code===a.BACKSPACE);else if(e.code===a.ESCAPE);else{if(!e.ctrlKey&&!e.metaKey||e.code!==a.KEY_S)return;c()}e.preventDefault()}),[t,n,c])})}!function(e){e.BACKSPACE="Backspace",e.ENTER="Enter",e.ESCAPE="Escape",e.KEY_A="KeyA",e.KEY_D="KeyD",e.KEY_R="KeyR",e.KEY_S="KeyS",e.KEY_W="KeyW"}(a||(a={}));var l,O=s.c;!function(e){e.USER_LOGIN_REQUEST="USER_LOGIN_REQUEST",e.USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS",e.USER_LOGOUT_REQUEST="USER_LOGOUT_REQUEST",e.USER_LOGOUT_SUCCESS="USER_LOGOUT_SUCCESS",e.NOTE_REMOVE_REQUEST="NOTE_REMOVE_REQUEST",e.NOTE_REMOVE_SUCCESS="NOTE_REMOVE_SUCCESS",e.NOTE_UPDATE_REQUEST="NOTE_UPDATE_REQUEST",e.NOTE_UPDATE_SUCCESS="NOTE_UPDATE_SUCCESS",e.NOTE_GET_ALL_REQUEST="NOTE_GET_ALL_REQUEST",e.NOTE_GET_ALL_SUCCESS="NOTE_GET_ALL_SUCCESS",e.NOTE_ADD_REQUEST="NOTE_ADD_REQUEST",e.NOTE_ADD_SUCCESS="NOTE_ADD_SUCCESS"}(l||(l={}));var _={NOTE_ADD_REQUEST:function(e){return{type:l.NOTE_ADD_REQUEST,payload:{text:e}}},NOTE_ADD_SUCCESS:function(e){return{type:l.NOTE_ADD_SUCCESS,payload:{note:e}}},NOTE_REMOVE_REQUEST:function(e){return{type:l.NOTE_REMOVE_REQUEST,payload:{noteId:e}}},NOTE_REMOVE_SUCCESS:function(e){return{type:l.NOTE_REMOVE_SUCCESS,payload:{noteId:e}}},NOTE_UPDATE_REQUEST:function(e,t){return{type:l.NOTE_UPDATE_REQUEST,payload:{noteId:e,text:t}}},NOTE_UPDATE_SUCCESS:function(e){return{type:l.NOTE_UPDATE_SUCCESS,payload:{note:e}}},USER_LOGIN_REQUEST:function(){return{type:l.USER_LOGIN_REQUEST}},USER_LOGIN_SUCCESS:function(e){return{type:l.USER_LOGIN_SUCCESS,payload:{user:e}}},USER_LOGOUT_REQUEST:function(){return{type:l.USER_LOGOUT_REQUEST}},USER_LOGOUT_SUCCESS:function(){return{type:l.USER_LOGOUT_SUCCESS}},NOTE_GET_ALL_REQUEST:function(){return{type:l.NOTE_GET_ALL_REQUEST}},NOTE_GET_ALL_SUCCESS:function(e){return{type:l.NOTE_GET_ALL_SUCCESS,payload:{notes:e}}}},S={user:function(e){return e.user},notes:function(e){return e.notes}};function d(){}var b,f=n(8),m=n(7),N=n.n(m),p=function(e){var t=e.className,n=e.children,a=e.disabled,r=e.onClick;return c.a.createElement("button",{className:N()("Button",t),disabled:a,onClick:r},n)},T=function(e){var t=e.className,n=Object(f.a)(e,["className"]);return c.a.createElement(p,Object.assign({className:N()("DefaultButton",t)},n))},U=function(e){var t=e.className,n=Object(f.a)(e,["className"]);return c.a.createElement(p,Object.assign({className:N()("PrimaryButton",t)},n))},C=function(e){var t=e.className,n=Object(f.a)(e,["className"]);return c.a.createElement(p,Object.assign({className:N()("SecondaryButton",t)},n))},v=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({},a,{className:N()("List",t)}),n)},j=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({},a,{className:N()("ListItem",t)}),n)},R=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("textarea",Object.assign({},a,{className:N()("TextArea",t)}),n)},D=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({},a,{className:N()("Paper",t)}),n)},A=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({},a,{className:N()("DialogContent",t)}),n)},y=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({},a,{className:N()("DialogActions",t)}),n)},h=function(e){var t=e.className,n=e.children,a=Object(f.a)(e,["className","children"]);return u.a.createPortal(c.a.createElement("div",{className:"Dialog__outer"},c.a.createElement("div",{className:"Dialog__sheet"}),c.a.createElement("div",{className:"Dialog__main-wrapper"},c.a.createElement(D,Object.assign({},a,{className:N()("Dialog__main",t)}),n))),document.body)},g=function(e){var t=e.user,n=e.children;return c.a.createElement("div",{className:"AppLayout"},c.a.createElement("header",{className:"AppLayout__header"},c.a.createElement("p",null,"Memo"),null!==t&&c.a.createElement("p",null,t.displayName)),c.a.createElement("main",{className:"AppLayout__content"},n))};!function(e){e[e.NONE=0]="NONE",e[e.ADD=1]="ADD",e[e.UPDATE=2]="UPDATE"}(b||(b={}));var x=function(){var e=Object(s.b)(),t=Object(r.useState)(b.NONE),n=Object(E.a)(t,2),a=n[0],o=n[1],u=Object(r.useState)(null),l=Object(E.a)(u,2),f=l[0],m=l[1],N=O(S.user),p=O(S.notes),T=Object(r.useCallback)((function(){e(_.USER_LOGIN_REQUEST())}),[e]),C=Object(r.useCallback)((function(t){e(_.NOTE_ADD_REQUEST(t)),o(b.NONE)}),[e]),v=Object(r.useCallback)((function(t){f&&(e(_.NOTE_UPDATE_REQUEST(f.id,t)),o(b.NONE))}),[e,f]),j=Object(r.useCallback)((function(){o(b.ADD)}),[]),R=Object(r.useCallback)((function(e){o(b.UPDATE),m(e)}),[]),D=Object(r.useCallback)((function(){o(b.NONE)}),[]),A=Object(r.useCallback)((function(t){e(_.NOTE_REMOVE_REQUEST(t))}),[e]);return i({dispatch:e,onAdd:d,onSave:d}),null===N?c.a.createElement(g,{user:null},c.a.createElement(U,{onClick:T},"Login")):c.a.createElement(g,{user:N},c.a.createElement(k,{notes:p,onClick:R,onRemove:A}),a===b.ADD&&c.a.createElement(L,{initialText:"",onSubmit:C,onCancel:D}),a===b.UPDATE&&null!==f&&c.a.createElement(L,{initialText:f.text,onSubmit:v,onCancel:D}),c.a.createElement(U,{onClick:j},"Add"))},L=function(e){var t=e.initialText,n=e.onSubmit,a=e.onCancel,o=Object(r.useState)(t),u=Object(E.a)(o,2),s=u[0],i=u[1],l=Object(r.useCallback)((function(e){var t=e.currentTarget.value;i(t)}),[]),O=Object(r.useCallback)((function(){n(s),i("")}),[s,n]),_=""===s;return c.a.createElement(h,{className:"NoteAddDialog"},c.a.createElement(A,{className:"NoteAddDialog__content"},c.a.createElement(R,{className:"NoteAddDialog__text",value:s,onChange:l})),c.a.createElement(y,{className:"NoteAddDialog__actions"},c.a.createElement(T,{className:"NoteAddDialog__button",onClick:a},"Cancel"),c.a.createElement(U,{className:"NoteAddDialog__button",disabled:_,onClick:O},"Add")))},k=function(e){var t=e.notes,n=e.onClick,a=e.onRemove;return c.a.createElement(v,{className:"NoteList"},t.map((function(e){return c.a.createElement(w,{key:e.id,note:e,onClick:n,onRemove:a})})))},w=function(e){var t=e.note,n=e.onClick,a=e.onRemove,o=Object(r.useMemo)((function(){return function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),c=t.getHours(),o=t.getMinutes();return"".concat(n,"-").concat(G(a),"-").concat(G(r)," ").concat(G(c),":").concat(G(o))}(t.createdAt)}),[t]),u=Object(r.useCallback)((function(){n(t)}),[t,n]),s=Object(r.useCallback)((function(e){a(t.id),e.preventDefault(),e.stopPropagation()}),[t,a]);return c.a.createElement(j,{className:"NoteView",onClick:u},c.a.createElement("pre",{className:"NoteView-text"},t.text),c.a.createElement("p",{className:"NoteView-created-at"},o),c.a.createElement(C,{className:"NoteView-remove",onClick:s},"Remove"))};function G(e){return e<10?"0".concat(e):"".concat(e)}var P,Q=n(12),I=n(19),K=n(31),M=n(13);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(M.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return t};return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,c=t[r.type];return void 0!==c?c(a,r):n(a,r)}}({user:null,notes:[]},(P={},Object(M.a)(P,l.USER_LOGIN_SUCCESS,(function(e,t){return B({},e,{user:t.payload.user})})),Object(M.a)(P,l.USER_LOGOUT_SUCCESS,(function(e){return B({},e,{user:null})})),Object(M.a)(P,l.NOTE_GET_ALL_SUCCESS,(function(e,t){return B({},e,{notes:t.payload.notes})})),Object(M.a)(P,l.NOTE_ADD_SUCCESS,(function(e,t){return B({},e,{notes:[t.payload.note].concat(Object(K.a)(e.notes))})})),Object(M.a)(P,l.NOTE_UPDATE_SUCCESS,(function(e,t){var n=t.payload.note,a=e.notes.map((function(e){return e.id===n.id?n:e}));return B({},e,{notes:a})})),Object(M.a)(P,l.NOTE_REMOVE_SUCCESS,(function(e,t){var n=t.payload.noteId,a=e.notes.filter((function(e){return e.id!==n}));return B({},e,{notes:a})})),P)),J=n(6),W=n.n(J),z=n(5),X=n(23),q=n.n(X);n(44),n(46);q.a.initializeApp({apiKey:"AIzaSyA1gaf9xQvqM7Vg9RUJgMN3hsCka5eu1t4",authDomain:"counter-64673.firebaseapp.com",databaseURL:"https://counter-64673.firebaseio.com",projectId:"counter-64673",storageBucket:"counter-64673.appspot.com",messagingSenderId:"61000756567\n",appId:"1:61000756567:web:5d923c067f28d0ab8c6212"});var F=n(30);function H(e,t,n){return Z.apply(this,arguments)}function Z(){return(Z=Object(F.a)(W.a.mark((function e(t,n,a){var r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,new Promise((function(e,t){return navigator.geolocation.getCurrentPosition((function(t){var n={latitude:t.coords.latitude,longitude:t.coords.longitude};e(n)}),t)}));case 4:r=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",{id:t.id,text:a,authorId:n,createdAt:Date.now(),coordinate:r});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var $=W.a.mark(Ee),ee=W.a.mark(ie),te=W.a.mark(Oe),ne=W.a.mark(_e),ae=W.a.mark(Se),re=W.a.mark(de),ce=W.a.mark(be),oe=W.a.mark(fe),ue={_:"EmptyUser"};function se(){return Object(I.b)((function(e){return q.a.auth().onAuthStateChanged((function(t){e(t||ue)}))}))}function Ee(){var e,t;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new q.a.auth.GoogleAuthProvider,t=q.a.auth(),n.next=4,Object(z.b)([t,t.signInWithRedirect],e);case 4:case"end":return n.stop()}}),$)}function ie(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=q.a.auth(),t.next=3,Object(z.b)([e,e.signOut]);case 3:case"end":return t.stop()}}),ee)}function le(e){return{id:e.uid,displayName:e.displayName}}function Oe(){var e,t,n;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(z.b)(se);case 2:e=a.sent,a.prev=3;case 4:return a.next=7,Object(z.g)(e);case 7:if((t=a.sent)===ue){a.next=16;break}return n=le(t),a.next=12,Object(z.e)(_.USER_LOGIN_SUCCESS(n));case 12:return a.next=14,Object(z.e)(_.NOTE_GET_ALL_REQUEST());case 14:a.next=18;break;case 16:return a.next=18,Object(z.e)(_.USER_LOGOUT_SUCCESS());case 18:a.next=4;break;case 20:return a.prev=20,a.next=23,Object(z.c)();case 23:if(!a.sent){a.next=25;break}e.close();case 25:return a.finish(20);case 26:case"end":return a.stop()}}),te,null,[[3,,20,26]])}function _e(e){var t,n,a,r,c;return W.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload.text,o.next=3,Object(z.f)(S.user);case 3:if(null!==(n=o.sent)){o.next=6;break}return o.abrupt("return");case 6:return a=q.a.firestore(),r=a.collection("notes").doc(),o.next=10,Object(z.b)(H,r,n.id,t);case 10:return c=o.sent,o.next=13,Object(z.b)([r,r.set],c);case 13:return o.next=15,Object(z.e)(_.NOTE_ADD_SUCCESS(c));case 15:case"end":return o.stop()}}),ne)}function Se(e){var t,n,a,r,c,o,u;return W.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.noteId,a=t.text,s.next=3,Object(z.f)(S.user);case 3:if(null!==s.sent){s.next=6;break}return s.abrupt("return");case 6:return r=q.a.firestore(),c=r.collection("notes").doc(n),s.next=10,Object(z.b)([c,c.update],"text",a);case 10:return s.next=12,Object(z.b)([c,c.get]);case 12:return o=s.sent,s.next=15,Object(z.b)([o,o.data]);case 15:return u=s.sent,s.next=18,Object(z.e)(_.NOTE_UPDATE_SUCCESS(u));case 18:case"end":return s.stop()}}),ae)}function de(e){var t,n,a;return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.noteId,r.next=3,Object(z.f)(S.user);case 3:if(null!==r.sent){r.next=6;break}return r.abrupt("return");case 6:return n=q.a.firestore(),a=n.collection("notes").doc(t),r.next=10,Object(z.b)([a,a.delete]);case 10:return r.next=12,Object(z.e)(_.NOTE_REMOVE_SUCCESS(t));case 12:case"end":return r.stop()}}),re)}function be(e){var t,n,a,r,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.f)(S.user);case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:return n=q.a.firestore(),a=n.collection("notes").where("authorId","==",t.id).orderBy("createdAt","desc"),e.next=9,Object(z.b)([a,a.get]);case 9:return r=e.sent,c=me(r),e.next=13,Object(z.e)(_.NOTE_GET_ALL_SUCCESS(c));case 13:case"end":return e.stop()}}),ce)}function fe(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.i)(l.USER_LOGIN_REQUEST,Ee),Object(z.i)(l.USER_LOGOUT_REQUEST,ie),Object(z.i)(l.NOTE_GET_ALL_REQUEST,be),Object(z.h)(l.NOTE_ADD_REQUEST,_e),Object(z.h)(l.NOTE_UPDATE_REQUEST,Se),Object(z.h)(l.NOTE_REMOVE_REQUEST,de),Object(z.d)(Oe)]);case 2:case"end":return e.stop()}}),oe)}function me(e){var t=[];return e.forEach((function(e){return t.push(e.data()),t})),t}!function(){var e=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,t=Object(I.a)(),n=Object(Q.d)(Y,e(Object(Q.a)(t)));return t.run(fe),n}(),t=document.getElementById("root");u.a.render(c.a.createElement(s.a,{store:e},c.a.createElement(x,null)),t)}()}},[[32,1,2]]]);
//# sourceMappingURL=main.649e19cd.chunk.js.map