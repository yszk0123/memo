(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7o6c":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[id]",function(){return n("MjEs")}])},MjEs:function(e,t,n){"use strict";n.r(t);var o=n("p0XB"),a=n.n(o),c=n("q1tI"),i=n.n(c),l=n("nOHt"),d=n("FLDa"),u=n("gRwr"),r=n("Y6qy"),s=n("IbkR"),p=n("/xIX"),b=i.a.createElement;t.default=function(){var e=Object(l.useRouter)(),t=a()(e.query.id)?null:e.query.id,n=Object(r.a)(function(e){return p.a.note(e,t)}),o=Object(s.e)(),i=Object(s.d)(),f=Object(s.b)(),m=Object(c.useCallback)(function(e){n&&o(n.id,e)},[o,n]),w=Object(c.useCallback)(function(){null!==t&&(i(t),e.push("/"))},[t,i,e]);return Object(c.useEffect)(function(){null===n&&null!==t&&f(t)},[n,t,f]),null===n?b(d.a,null,b("p",null,"Not Found")):b(u.a,{initialText:n.text,note:n,onRemove:w,onSubmit:m})}},gRwr:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),c=n("vOnD"),i=n("ZOvD"),l=n("vEPf"),d=a.a.createElement,u=function(e){var t=e.coordinate;return d("iframe",{src:"https://maps.google.co.jp/maps?output=embed&q=".concat(t.latitude,",").concat(t.longitude)})},r=c.b.textarea.withConfig({displayName:"TextArea",componentId:"sc-19zfc46-0"})(["padding:var(--space);width:100%;"]),s=n("FLDa");n.d(t,"a",function(){return b});var p=a.a.createElement,b=function(e){var t=e.initialText,n=e.note,a=e.onSubmit,c=e.onRemove,i=Object(o.useState)(t),l=i[0],d=i[1],r=Object(o.useState)(!1),b=r[0],g=r[1],O=Object(o.useCallback)(function(e){var t=e.currentTarget.value;d(t)},[]),C=Object(o.useCallback)(function(){a(l)},[l,a]),_=Object(o.useCallback)(function(){g(function(e){return!e})},[]),N=""===l;return p(s.a,null,p(f,null,p(w,{autoFocus:!0,value:l,onChange:O}),p(h,{onClick:c},"Remove"),null!=n&&null!=n.coordinate&&b&&p(m,null,p(u,{coordinate:n.coordinate}))),p(j,{disabled:N,onClick:C},"Update"),p(v,{className:b?void 0:"hidden",onClick:_},"Map"))},f=c.b.div.withConfig({displayName:"NoteAdd__Content",componentId:"sc-1ejw8p0-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;"]),m=c.b.div.withConfig({displayName:"NoteAdd__Map",componentId:"sc-1ejw8p0-1"})(["display:flex;justify-content:center;width:100%;flex-grow:1;"]),w=Object(c.b)(r).withConfig({displayName:"NoteAdd__ContentText",componentId:"sc-1ejw8p0-2"})(["font-size:var(--font-md);flex-grow:1;min-height:","px;border:none;"],300),j=Object(c.b)(l.a).withConfig({displayName:"NoteAdd__UpdateFab",componentId:"sc-1ejw8p0-3"})(["position:fixed;right:calc(var(--space) * 2);bottom:calc(var(--space) * 2);"]),v=Object(c.b)(l.b).withConfig({displayName:"NoteAdd__MapFab",componentId:"sc-1ejw8p0-4"})(["position:fixed;left:calc(var(--space) * 2);bottom:calc(var(--space) * 2);&.hidden{opacity:var(--opacity--hover);}"]),h=Object(c.b)(i.b).withConfig({displayName:"NoteAdd__RemoveButton",componentId:"sc-1ejw8p0-5"})(["width:100%;"])}},[["7o6c",1,0]]]);