(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Paper}));var Paper=__webpack_require__(1).b.div.withConfig({displayName:"Paper",componentId:"ozq042-0"})(["box-shadow:0 1px 2px 1px var(--color-shadow);"])},169:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyle}));var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(373),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);function _templateObject(){var data=Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  /* Apply border-box to all elements */\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  /* Variables */\n  :root {\n    --space: 8px;\n    --radius: 4px;\n    --border-width: 1px;\n    --opacity--hover: 0.4;\n    --menu-offset-x: calc(var(--space) / 2);\n    --menu-offset-y: calc(var(--space));\n    --fab-size: 48px;\n    --avatar-size: 36px;\n    --header-height: 52px;\n    --subheader-height: 36px;\n\n    --font-sm: 1.4rem;\n    --font-md: 1.6rem;\n    --font-lg: 1.8rem;\n\n    --transition: 0.16s ease-out;\n\n    /* @see https://material-ui.com/customization/color/#color-palette */\n    --palette-white: #ffffff;\n    --palette-blue-200: #90caf9;\n    --palette-blue-300: #64b5f6;\n    --palette-blue-400: #90caf9;\n    --palette-blue-500: #42a5f5;\n    --palette-pink-200: #f48fb1;\n    --palette-pink-300: #f06292;\n    --palette-pink-400: #ec407a;\n    --palette-pink-500: #e91e63;\n    --palette-pink-a100: #ff80ab;\n    --palette-pink-a200: #ff4081;\n    --palette-pink-a400: #f50057;\n\n    --palette-grey-50: #fafafa;\n    --palette-grey-100: #f5f5f5;\n    --palette-grey-200: #eeeeee;\n    --palette-grey-300: #e0e0e0;\n    --palette-grey-400: #bdbdbd;\n    --palette-grey-500: #9e9e9e;\n    --palette-grey-600: #757575;\n    --palette-grey-700: #616161;\n    --palette-grey-800: #424242;\n    --palette-grey-900: #212121;\n\n    --color-shadow: rgba(0, 0, 0, 0.1);\n    --color-default: var(--palette-white);\n    --color-default--hover: var(--palette-grey-200);\n    --color-text: var(--palette-grey-900);\n    --color-secondary-text: var(--palette-grey-500);\n    --color-dim: var(--palette-grey-100);\n    --color-disabled: var(--palette-grey-200);\n    --color-button-default: var(--palette-white);\n    --color-button-default-hover: var(--palette-grey-200);\n    --color-button-default-active: var(--palette-grey-300);\n    --color-button-default-text: var(--palette-grey-900);\n    --color-button-primary: var(--palette-blue-500);\n    --color-button-primary-hover: var(--palette-blue-300);\n    --color-button-primary-active: var(--palette-blue-200);\n    --color-button-primary-text: var(--palette-white);\n    --color-button-secondary: var(--palette-pink-a400);\n    --color-button-secondary-hover: var(--palette-pink-300);\n    --color-button-secondary-active: var(--palette-pink-200);\n    --color-button-secondary-text: var(--palette-white);\n    --color-button-secondary-text--reverse: var(--palette-grey-500);\n    --color-sheet: var(--palette-grey-900);\n    --color-loading: var(--palette-blue-500);\n    --color-menu-bg: var(--palette-white);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(_templateObject())},170:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Avatar})),__webpack_require__.d(__webpack_exports__,"b",(function(){return InitialAvatar}));var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(388),_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(69),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),Avatar=(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div.withConfig({displayName:"Avatar",componentId:"p9jya3-0"})(["display:flex;align-items:center;justify-content:center;width:var(--avatar-size);height:var(--avatar-size);border-radius:50%;overflow:hidden;"])),InitialAvatar=function InitialAvatar(_ref2){_ref2.ref;var text=_ref2.text,props=Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref2,["ref","text"]),initial=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){var parts=text.split(/\s+/);if(parts.length>=2){var _parts=Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(parts,2),last=_parts[0],first=_parts[1];if(last.length&&first.length)return"".concat(last[0].toUpperCase()).concat(first[0].toUpperCase())}return text.slice(0,2).toUpperCase()}),[text]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InitialAvatarContainer,props,initial)},InitialAvatarContainer=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.b)(Avatar).withConfig({displayName:"Avatar__InitialAvatarContainer",componentId:"p9jya3-1"})(["color:var(--color-text);background-color:var(--color-button-default);"])},37:function(module,__webpack_exports__,__webpack_require__){"use strict";var object_assign=__webpack_require__(239),assign_default=__webpack_require__.n(object_assign),objectWithoutProperties=__webpack_require__(69),classnames=__webpack_require__(383),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),Paper=__webpack_require__(123),classCallCheck=__webpack_require__(384),createClass=__webpack_require__(385),possibleConstructorReturn=__webpack_require__(389),getPrototypeOf=__webpack_require__(386),inherits=__webpack_require__(392),react_dom=__webpack_require__(166),react_dom_default=__webpack_require__.n(react_dom),Portal_Portal=function(_React$Component){function Portal(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,Portal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(Portal)).call.apply(_getPrototypeOf2,[this].concat(args)))).element=void 0,_this}return Object(inherits.a)(Portal,_React$Component),Object(createClass.a)(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.element=document.querySelector(this.props.selector)}},{key:"render",value:function render(){return null==this.element?null:react_dom_default.a.createPortal(this.props.children,this.element)}}]),Portal}(react_default.a.Component);__webpack_require__.d(__webpack_exports__,"b",(function(){return MenuPlacement})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Menu_Menu})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useMenuState}));var MenuPlacement;react_default.a.createElement;!function(MenuPlacement){MenuPlacement.LEFT_TOP="LEFT_TOP",MenuPlacement.LEFT_BOTTOM="LEFT_BOTTOM",MenuPlacement.RIGHT_TOP="RIGHT_TOP",MenuPlacement.RIGHT_BOTTOM="RIGHT_BOTTOM",MenuPlacement.BOTTOM="BOTTOM"}(MenuPlacement||(MenuPlacement={}));var Menu_Menu=function Menu(_ref){var _ref$state=_ref.state,isOpen=_ref$state.isOpen,position=_ref$state.position,onClose=_ref$state.onClose,props=Object(objectWithoutProperties.a)(_ref,["state"]);return react_default.a.createElement(Menu_BareMenu,assign_default()({},props,{isOpen:isOpen,position:position,onClose:onClose}))};function useMenuState(){var _useState=Object(react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],_useState2=Object(react.useState)(null),position=_useState2[0],setPosition=_useState2[1],onOpen=Object(react.useCallback)((function(event){var x=event.clientX,y=event.clientY;setPosition({x:x,y:y}),setIsOpen(!0)}),[]),onClose=Object(react.useCallback)((function(){setIsOpen(!1)}),[]);return Object(react.useMemo)((function(){return{isOpen:isOpen,position:position,onOpen:onOpen,onClose:onClose}}),[isOpen,position,onOpen,onClose])}var Menu_BareMenu=function BareMenu(_ref2){_ref2.ref;var isOpen=_ref2.isOpen,position=_ref2.position,_ref2$placement=_ref2.placement,placement=void 0===_ref2$placement?MenuPlacement.RIGHT_BOTTOM:_ref2$placement,onClose=_ref2.onClose,props=Object(objectWithoutProperties.a)(_ref2,["ref","isOpen","position","placement","onClose"]),style=Object(react.useMemo)((function(){return null!==position?{left:position.x,top:position.y}:void 0}),[position]);return react_default.a.createElement(Portal_Portal,{selector:"#modal"},isOpen&&react_default.a.createElement(Sheet,{onClick:onClose}),react_default.a.createElement(MainWrapper,{className:classnames_default()({hidden:!isOpen,leftTop:placement===MenuPlacement.LEFT_TOP,leftBottom:placement===MenuPlacement.LEFT_BOTTOM,rightTop:placement===MenuPlacement.RIGHT_TOP,rightBottom:placement===MenuPlacement.RIGHT_BOTTOM,bottom:placement===MenuPlacement.BOTTOM}),style:style},react_default.a.createElement(Main,props)))},Sheet=styled_components_browser_esm.b.div.withConfig({displayName:"Menu__Sheet",componentId:"fzmn4t-0"})(["left:0;top:0;position:fixed;width:100vw;height:100vh;opacity:0;"]),MainWrapper=Object(styled_components_browser_esm.b)(Paper.a).withConfig({displayName:"Menu__MainWrapper",componentId:"fzmn4t-1"})(["position:absolute;background-color:var(--color-menu-bg);transition:transform var(--transition),opacity var(--transition);opacity:1;pointer-events:auto;&.leftTop{transform:translate(-100%,-100%);&.hidden{transform:translate(calc(var(--menu-offset-x) - 100%),calc(var(--menu-offset-y) - 100%));}}&.leftBottom{transform:translate(-100%,0);&.hidden{transform:translate(calc(var(--menu-offset-x) - 100%),calc(-1 * var(--menu-offset-y)));}}&.rightTop{transform:translate(0,-100%);&.hidden{transform:translate(calc(-1 * var(--menu-offset-x)),calc(var(--menu-offset-y) - 100%));}}&.rightBottom{transform:translate(0,0);&.hidden{transform:translate(calc(-1 * var(--menu-offset-x)),calc(-1 * var(--menu-offset-y)));}}&.bottom{transform:translate(-50%,0);&.hidden{transform:translate(calc(-50%),calc(-1 * var(--menu-offset-y)));}}&.hidden{opacity:0;pointer-events:none;}"]),Main=styled_components_browser_esm.b.div.withConfig({displayName:"Menu__Main",componentId:"fzmn4t-2"})(["position:relative;"])},393:function(module,exports,__webpack_require__){__webpack_require__(394),__webpack_require__(507),module.exports=__webpack_require__(508)},415:function(module,exports){},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(172),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(168),_src_components_core_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(169),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1);__webpack_require__(708),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(764),module);var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_core_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__.a,null),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.b.div.withConfig({displayName:"config__Wrapper",componentId:"sc-1485e96-0"})(["font-size:var(--font-md);"]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper,null,storyFn()),_ref)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)}.call(this,__webpack_require__(509)(module))},708:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(25),__webpack_require__(111);var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(377),_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__),next_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(378),next_router__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__),noopResolve=function(){return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve()},proxy=new Proxy({},{get:function get(target,name){return console.log("Router.router.".concat(name," is mocked")),name in target?target[name]:noopResolve}});next_router__WEBPACK_IMPORTED_MODULE_3___default.a.router=proxy},764:function(module,exports,__webpack_require__){var map={"./atoms/__stories__/Avatar.stories.tsx":856,"./atoms/__stories__/Button.stories.tsx":777,"./atoms/__stories__/Paper.stories.tsx":790,"./core/__stories__/Layout.stories.tsx":855,"./molecules/__stories__/Menu.stories.tsx":853};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=764},777:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultButtonStory",(function(){return DefaultButtonStory})),__webpack_require__.d(__webpack_exports__,"PrimaryButtonStory",(function(){return PrimaryButtonStory})),__webpack_require__.d(__webpack_exports__,"SecondaryButtonStory",(function(){return SecondaryButtonStory}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(94);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;__webpack_exports__.default={title:"atoms/Button"};var DefaultButtonStory=function DefaultButtonStory(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("clicked")},"Button")},PrimaryButtonStory=function PrimaryButtonStory(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.b,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("clicked")},"Button")},SecondaryButtonStory=function SecondaryButtonStory(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.c,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("clicked")},"Button")}},790:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PaperStory",(function(){return PaperStory})),__webpack_require__.d(__webpack_exports__,"PaperWithStyleStory",(function(){return PaperWithStyleStory}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_Paper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(123);react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;__webpack_exports__.default={title:"atoms/Paper"};var PaperStory=function PaperStory(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paper__WEBPACK_IMPORTED_MODULE_2__.a,null,"Paper")},PaperWithStyleStory=function PaperWithStyleStory(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper,null,"Paper")},StyledPaper=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.b)(_Paper__WEBPACK_IMPORTED_MODULE_2__.a).withConfig({displayName:"Paperstories__StyledPaper",componentId:"sc-191q96v-0"})(["margin:var(--space);padding:var(--space);width:100px;height:100px;"])},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MenuStory",(function(){return MenuStory}));var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(168),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;__webpack_exports__.default={title:"molecules/Menu"};var MenuStory=function MenuStory(){var placement=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.select)("placement",{LeftTop:_Menu__WEBPACK_IMPORTED_MODULE_3__.b.LEFT_TOP,LeftBottom:_Menu__WEBPACK_IMPORTED_MODULE_3__.b.LEFT_BOTTOM,RightTop:_Menu__WEBPACK_IMPORTED_MODULE_3__.b.RIGHT_TOP,RightBottom:_Menu__WEBPACK_IMPORTED_MODULE_3__.b.RIGHT_BOTTOM,Bottom:_Menu__WEBPACK_IMPORTED_MODULE_3__.b.BOTTOM},_Menu__WEBPACK_IMPORTED_MODULE_3__.b.RIGHT_BOTTOM),menuState=Object(_Menu__WEBPACK_IMPORTED_MODULE_3__.c)();return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondaryBox,{onClick:menuState.onOpen}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__.a,{placement:null!==placement?placement:void 0,state:menuState},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrimaryBox,null,placement)))},Box=styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.withConfig({displayName:"Menustories__Box",componentId:"sc-18qi7je-0"})(["display:flex;align-items:center;justify-content:center;width:100px;height:100px;margin:var(--space);"]),PrimaryBox=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.b)(Box).withConfig({displayName:"Menustories__PrimaryBox",componentId:"sc-18qi7je-1"})(["background:var(--color-button-primary);margin:var(--space);"]),SecondaryBox=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.b)(Box).withConfig({displayName:"Menustories__SecondaryBox",componentId:"sc-18qi7je-2"})(["background:var(--color-button-secondary);margin:var(--space);"])},855:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var dist=__webpack_require__(63),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),Avatar=__webpack_require__(170),Button=__webpack_require__(94),List=styled_components_browser_esm.b.div.withConfig({displayName:"List",componentId:"en5n9j-0"})(["display:flex;flex-direction:column;background-color:var(--color-default);"]),TouchableListItem=styled_components_browser_esm.b.div.withConfig({displayName:"ListItem__TouchableListItem",componentId:"sc-1bho34m-0"})(["transition:background-color var(--transition);cursor:pointer;&:hover{background-color:var(--color-default--hover);}"]),ListItem=styled_components_browser_esm.b.div.withConfig({displayName:"ListItem",componentId:"sc-1bho34m-1"})([""]),objectWithoutProperties=__webpack_require__(69),next_link=__webpack_require__(245),link_default=__webpack_require__.n(next_link),TextLink_HeadingLink=(react_default.a.createElement,styled_components_browser_esm.b.p.withConfig({displayName:"TextLink__Text",componentId:"qhjavd-0"})(["cursor:pointer;transition:opacity var(--transition);:hover{opacity:var(--opacity--hover);}"]),function HeadingLink(_ref2){var children=_ref2.children,props=Object(objectWithoutProperties.a)(_ref2,["children"]);return react_default.a.createElement(link_default.a,props,react_default.a.createElement(Heading,null,children))}),Heading=styled_components_browser_esm.b.h3.withConfig({displayName:"TextLink__Heading",componentId:"qhjavd-1"})(["cursor:pointer;transition:opacity var(--transition);margin:0;:hover{opacity:var(--opacity--hover);}"]),Menu=__webpack_require__(37),GlobalStyle=__webpack_require__(169),Layout_Layout=(react_default.a.createElement,function Layout(_ref){var children=_ref.children,center=_ref.center,user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,menuState=Object(Menu.c)();return react_default.a.createElement(Container,null,react_default.a.createElement(Header,null,react_default.a.createElement(Nav,null,react_default.a.createElement(Left,null,react_default.a.createElement(TextLink_HeadingLink,{href:"/"},"Memo")),center,react_default.a.createElement(Right,null,null!==user?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(UserAvatar,{text:user.displayName||"-",onClick:menuState.onOpen}),react_default.a.createElement(Menu.a,{placement:Menu.b.LEFT_BOTTOM,state:menuState},react_default.a.createElement(List,null,react_default.a.createElement(ListItem,null,react_default.a.createElement(SecondaryText,null,"Logged in as ",user.displayName)),react_default.a.createElement(TouchableListItem,null,react_default.a.createElement(Layout_Text,{onClick:onLogout},"Logout"))))):react_default.a.createElement(LoginButton,{onClick:onLogin},"Login")))),react_default.a.createElement(Content,null,children),react_default.a.createElement(GlobalStyle.a,null))}),Container=styled_components_browser_esm.b.div.withConfig({displayName:"Layout__Container",componentId:"sc-1ul9zoz-0"})(["position:absolute;display:flex;width:100vw;height:100vh;flex-direction:column;font-size:var(--font-md);"]),UserAvatar=Object(styled_components_browser_esm.b)(Avatar.b).withConfig({displayName:"Layout__UserAvatar",componentId:"sc-1ul9zoz-1"})(["transition:background-color var(--transition);cursor:pointer;&:hover{background-color:var(--color-default--hover);}"]),Header=styled_components_browser_esm.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1ul9zoz-2"})(["display:flex;align-items:center;background-color:var(--color-button-primary);padding:var(--space) calc(var(--space) * 2);color:var(--color-button-primary-text);box-shadow:0 1px 1px 0 var(--color-shadow);width:100%;height:var(--header-height);"]),Nav=styled_components_browser_esm.b.nav.withConfig({displayName:"Layout__Nav",componentId:"sc-1ul9zoz-3"})(["display:flex;align-items:center;justify-content:space-between;width:100%;"]),Content=styled_components_browser_esm.b.main.withConfig({displayName:"Layout__Content",componentId:"sc-1ul9zoz-4"})(["width:100%;flex-grow:1;"]),Left=styled_components_browser_esm.b.div.withConfig({displayName:"Layout__Left",componentId:"sc-1ul9zoz-5"})(["align-items:center;display:flex;"]),Right=styled_components_browser_esm.b.div.withConfig({displayName:"Layout__Right",componentId:"sc-1ul9zoz-6"})(["align-items:center;display:flex;"]),LoginButton=Object(styled_components_browser_esm.b)(Button.a).withConfig({displayName:"Layout__LoginButton",componentId:"sc-1ul9zoz-7"})(["margin-left:var(--space);"]),Layout_Text=styled_components_browser_esm.b.p.withConfig({displayName:"Layout__Text",componentId:"sc-1ul9zoz-8"})(["white-space:nowrap;font-size:var(--font-md);margin:0;padding:var(--space) calc(var(--space) * 2);"]),SecondaryText=Object(styled_components_browser_esm.b)(Layout_Text).withConfig({displayName:"Layout__SecondaryText",componentId:"sc-1ul9zoz-9"})(["color:var(--color-secondary-text);"]);__webpack_require__.d(__webpack_exports__,"LayoutWithLogoutStory",(function(){return Layout_stories_LayoutWithLogoutStory})),__webpack_require__.d(__webpack_exports__,"LayoutWithLoginStory",(function(){return Layout_stories_LayoutWithLoginStory}));react_default.a.createElement,__webpack_exports__.default={title:"core/Layout"};var Layout_stories_LayoutWithLogoutStory=function LayoutWithLogoutStory(){return react_default.a.createElement(Layout_Layout,{user:null,onLogin:Object(dist.action)("onLogin"),onLogout:Object(dist.action)("onLogout")},"Content")},Layout_stories_LayoutWithLoginStory=function LayoutWithLoginStory(){return react_default.a.createElement(Layout_Layout,{user:{id:"id-1",displayName:"Jonh Smith"},onLogin:Object(dist.action)("onLogin"),onLogout:Object(dist.action)("onLogout")},"Content")}},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Avatar=__webpack_require__(170),CenterBox=__webpack_require__(1).b.div.withConfig({displayName:"Box__CenterBox",componentId:"u18d57-0"})(["background-color:var(--color-button-primary);width:100%;height:100%;display:flex;align-items:center;justify-content:center;"]);__webpack_require__.d(__webpack_exports__,"AvatarStory",(function(){return Avatar_stories_AvatarStory}));react_default.a.createElement,__webpack_exports__.default={title:"atoms/Avatar"};var Avatar_stories_AvatarStory=function AvatarStory(){return react_default.a.createElement(Avatar.a,null,react_default.a.createElement(CenterBox,null,"A"))}},94:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DefaultButton})),__webpack_require__.d(__webpack_exports__,"b",(function(){return PrimaryButton})),__webpack_require__.d(__webpack_exports__,"c",(function(){return SecondaryButton}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),Button=styled_components__WEBPACK_IMPORTED_MODULE_0__.b.button.withConfig({displayName:"Button",componentId:"sc-13zme8w-0"})(["padding:var(--space);border-width:var(--border-width);border-radius:var(--radius);&:hover{cursor:pointer;}&:active{cursor:pointer;}&:disabled{background-color:var(--color-disabled);border-color:var(--color-disabled);cursor:default;}"]),DefaultButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(Button).withConfig({displayName:"Button__DefaultButton",componentId:"sc-13zme8w-1"})(["background-color:var(--color-button-default);border-color:var(--color-button-default);&:hover{background-color:var(--color-button-default-hover);border-color:var(--color-button-default-hover);}&:active{background-color:var(--color-button-default-active);border-color:var(--color-button-default-active);}"]),PrimaryButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(Button).withConfig({displayName:"Button__PrimaryButton",componentId:"sc-13zme8w-2"})(["background-color:var(--color-button-primary);border-color:var(--color-button-primary);&:hover{background-color:var(--color-button-primary-hover);border-color:var(--color-button-primary-hover);}&:active{background-color:var(--color-button-primary-active);border-color:var(--color-button-primary-active);}"]),SecondaryButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(Button).withConfig({displayName:"Button__SecondaryButton",componentId:"sc-13zme8w-3"})(["background-color:var(--color-button-secondary);border-color:var(--color-button-secondary);:hover{background-color:var(--color-button-secondary-hover);border-color:var(--color-button-secondary-hover);}:active{background-color:var(--color-button-secondary-active);border-color:var(--color-button-secondary-active);}"])}},[[393,1,2]]]);
//# sourceMappingURL=main.f15b1ba724d53d045475.bundle.js.map