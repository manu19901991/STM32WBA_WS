(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{123:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(40),r=n.n(s),o=(n(123),n(101)),c=n(414),l=n(52),h=n(404),p=n(27),d=n(16),u=n(17),j=n(13),m=n(20),b=n(19),O=n(35),f=n(92),x=n(424),g=n(425),v=n(407),y=n(417),C=n(418),w=n(410),S=n(385),k=n(74),T=n(1),I=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={timeoutCnt:0},a.copyToClipBoard=a.copyToClipBoard.bind(Object(j.a)(a)),a.copyTimeout=a.copyTimeout.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"copyToClipBoard",value:function(e){this.props.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var t=document.createElement("textarea");t.value=this.props.children,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);var n=this.state.timeoutCnt;n++,this.setState({timeoutCnt:n}),setTimeout(this.copyTimeout,5e3)}},{key:"copyTimeout",value:function(){var e=this.state.timeoutCnt;e>0&&(e--,this.setState({timeoutCnt:e++}))}},{key:"render",value:function(){var e,t,n,a=[];this.state.timeoutCnt>0?(e="!!   Copied   !!",t="primary"):(e="Copy code",t="primary");var i=1;if(void 0!==this.props.className&&this.props.className.includes("lang-")){var s,r=this.props.className.split("lang-").pop();r.includes("-nc")?r=r.replace("-nc",""):a=Object(T.jsx)("div",{children:Object(T.jsx)(y.a,{variant:"contained",size:"small",style:{marginBottom:12},color:t,onClick:this.copyToClipBoard,children:e})}),s=1!==this.props.children.split(/\r\n|\r|\n/).length,r.includes("-line")?(i=parseInt(r.match(/-line(\d+)/)[0].replace("-line","")),r=r.replace(/-line(\d+)/,"")):s=!1,n=Object(T.jsxs)("div",{children:[Object(T.jsx)(C.a,{}),Object(T.jsx)("div",{children:Object(T.jsx)(w.a,{language:r,style:S.a,showLineNumbers:s,startingLineNumber:i,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:this.props.children})}),a,Object(T.jsx)(C.a,{})]})}else n=Object(T.jsx)("i",{children:Object(T.jsx)("b",{children:Object(T.jsx)("code",{children:this.props.children})})});return n}}]),n}(a.Component),L=Object(k.b)(I),P=n(419),D=n(420),F=n(422),N=n(423),B=n(412),E=n(387),M=n(388),A=n(389),R=n(390),W=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={imageDescription:{},imagesLoaded:!1,imageIndex:0,imageCount:0,timeoutId:null,pause:!0},a.handleNext=a.handleNext.bind(Object(j.a)(a)),a.handleBack=a.handleBack.bind(Object(j.a)(a)),a.onTimeout=a.onTimeout.bind(Object(j.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(j.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(j.a)(a)),a.handlePausePlay=a.handlePausePlay.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.state.timeoutId)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.src;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({imageDescription:t,imagesLoaded:!0,imageCount:t.sequence.length})}))}},{key:"handleNext",value:function(){var e=this.state.imageIndex+1;e>=this.state.imageCount&&(e=0),this.setState({imageIndex:e})}},{key:"handleBack",value:function(){var e=this.state.imageIndex-1;e<0&&(e=this.state.imageCount-1),this.setState({imageIndex:e})}},{key:"onTimeout",value:function(){var e=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:e}),this.handleNext()}},{key:"onMouseEnter",value:function(){clearTimeout(this.state.timeoutId)}},{key:"onMouseLeave",value:function(){var e=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:e})}},{key:"handlePausePlay",value:function(){var e=!1;if(this.state.pause){e=!1;var t=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:t,pause:e})}else e=!0,clearTimeout(this.state.timeoutId),this.setState({pause:e})}},{key:"render",value:function(){var e=this,t=this.state.imageDescription.sequence,n=[],i=[];this.state.imagesLoaded&&(n=this.state.imageDescription.sequence.map((function(t,n){var a={display:"none",maxWidth:"100%",height:"auto"};return n===e.state.imageIndex&&(a={maxWidth:"100%",height:"auto"}),Object(T.jsx)(P.a,{sx:{justifyContent:"center",display:"flex"},onClick:e.handlePausePlay,children:Object(T.jsx)("img",{alt:n,src:e.props.mdPath+"/img/"+t.name,title:t.name,style:a},n)},n)})),i=this.state.imageDescription.sequence.map((function(t,n){var a={display:"none",padding:function(e){return e.spacing(2)}};return n===e.state.imageIndex&&(a={padding:function(e){return e.spacing(2)}}),t.hasOwnProperty("text")?Object(T.jsx)(P.a,{sx:a,children:Object(T.jsx)(v.a,{variant:"outlined",severity:"info",children:t.text},n)}):null})));var s=0,r="dots";return this.state.imagesLoaded&&(s=t.length)>10&&(r="progress"),Object(T.jsxs)(D.a,{children:[Object(T.jsx)(F.a,{size:"small",sx:{top:function(e){return e.spacing(2)},left:function(e){return e.spacing(2)}},"aria-label":"Play/Pause",onClick:this.handlePausePlay,children:this.state.pause?Object(T.jsx)(E.a,{}):Object(T.jsx)(M.a,{})}),Object(T.jsxs)(N.a,{children:[n,Object(T.jsx)(B.a,{variant:r,steps:s,position:"static",activeStep:this.state.imageIndex,nextButton:Object(T.jsx)(a.Fragment,{children:Object(T.jsxs)(y.a,{size:"small",onClick:this.handleNext,children:["Next",Object(T.jsx)(A.a,{})]})}),backButton:Object(T.jsxs)(y.a,{size:"small",onClick:this.handleBack,children:[Object(T.jsx)(R.a,{}),"Back"]})})]}),i]})}}]),n}(a.Component),G=W,q=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e,t="";return t="",e=null!==this.props.src.match(/.json/)?Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(G,{src:t+this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),mdPath:t+this.props.mdInfo.mdPath})}):Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("img",{alt:this.props.alt,src:t+this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),title:this.props.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}}),Object(T.jsx)("br",{})]}),Object(T.jsx)(a.Fragment,{children:e})}}]),n}(a.Component),U=q,_=i.a.createContext(""),z=["children"],H=["children"],J=["children"],V=["children"],$=["children"],K=["children"],Q=["children"],X=["children"],Y=["children"],Z=["children"],ee=["children"],te=["children"],ne=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t={overrides:{h1:{component:function(e){var t=e.children;Object(O.a)(e,z);return Object(T.jsxs)(x.a,{gutterBottom:!0,variant:"h4",children:[" ",t,"  "]})},props:{classes:this.props.classes}},h2:{component:function(e){var t=e.children;Object(O.a)(e,H);return Object(T.jsxs)(x.a,{gutterBottom:!0,variant:"h6",children:[" ",t]})},props:{classes:this.props.classes}},h3:{component:function(e){var t=e.children;Object(O.a)(e,J);return Object(T.jsxs)(x.a,{gutterBottom:!0,variant:"subtitle1",children:[" ",t]})},props:{classes:this.props.classes}},h4:{component:function(e){var t=e.children;Object(O.a)(e,V);return Object(T.jsxs)(x.a,{gutterBottom:!0,variant:"caption",paragraph:!0,children:[" ",t]})},props:{classes:this.props.classes}},p:{component:function(e){var t=e.children;Object(O.a)(e,$);return Object(T.jsxs)(x.a,{paragraph:!0,children:[t," "]})},props:{classes:this.props.classes}},a:{component:g.a},li:{component:function(e){var t=e.children;Object(O.a)(e,K);return Object(T.jsx)("li",{children:Object(T.jsx)(x.a,{component:"span",children:t})})},props:{classes:this.props.classes}},code:{component:L},pre:{component:function(e){var t=e.children;Object(O.a)(e,Q);return Object(T.jsx)(a.Fragment,{children:t})}},img:{component:function(t){t.children;var n=Object(O.a)(t,X);return Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(U,Object(p.a)(Object(p.a)({},n),{},{mdInfo:e.props.mdInfo,pathContext:e.context}))})}},ainfo:{component:function(e){var t=e.children;Object(O.a)(e,Y);return Object(T.jsx)(v.a,{variant:"filled",severity:"info",children:t})}},asuccess:{component:function(e){var t=e.children;Object(O.a)(e,Z);return Object(T.jsx)(v.a,{variant:"filled",severity:"success",children:t})}},awarning:{component:function(e){var t=e.children;Object(O.a)(e,ee);return Object(T.jsx)(v.a,{variant:"filled",severity:"warning",children:t})}},aerror:{component:function(e){var t=e.children;Object(O.a)(e,te);return Object(T.jsx)(v.a,{variant:"filled",severity:"error",children:t})}}}};return Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(f.a,{children:this.props.children,options:t})})}}]),n}(a.Component);ne.contextType=_;var ae=ne,ie=n(391),se={position:"fixed",bottom:function(e){return e.spacing(2)},right:function(e){return e.spacing(2)}},re=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.mdChapters,n=(t=t.split(/(^#\s.*\r\n\r\n)/g)).map((function(t,n){return Object(T.jsx)(ae,{children:t,enqueueSnackbar:e.props.enqueueSnackbar,mdInfo:e.props.mdInfo,routerLocation:e.props.routerLocation},n)}));return Object(T.jsxs)(P.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,Object(T.jsx)(F.a,{"aria-label":"Add",sx:se,color:"primary",onClick:this.scrollTop,children:Object(T.jsx)(ie.a,{})})]})}}]),n}(a.Component),oe=re,ce=n(392),le=n(406),he=n(395),pe=n(21),de={fabR:{position:"fixed",bottom:function(e){return e.spacing(2)},right:function(e){return e.spacing(2)}},fabC:{position:"fixed",bottom:function(e){return e.spacing(10)},right:function(e){return e.spacing(2)}},fabL:{position:"fixed",bottom:function(e){return e.spacing(2)},right:function(e){return e.spacing(10)}},fabLL:{position:"fixed",bottom:function(e){return e.spacing(2)},right:function(e){return e.spacing(18)}}},ue=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(d.a)(this,n);var i=(a=t.call(this,e)).props.mdChapters;(i=i.split(/^(?=#\s.*[\r\n\r\n|\n\n])/gm))[0].search(/^[\r\n\r\n|\n\n]/)>=0&&i.shift();var s=i.length;return a.state={slideIndex:0,mdChapters:i,mdChapterSize:s,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(j.a)(a)),a.previousSlide=a.previousSlide.bind(Object(j.a)(a)),a.firstSlide=a.firstSlide.bind(Object(j.a)(a)),a.onExited=a.onExited.bind(Object(j.a)(a)),a.onEnter=a.onEnter.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"firstSlide",value:function(){var e=this.state.slideIndex;this.setState({previousIndex:e,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var e=this.state.slideIndex+1;e>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:e,slide:!1})}},{key:"previousSlide",value:function(){var e=this.state.slideIndex-1;e<0&&(e=0),this.setState({slideIndex:e,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"onEnter",value:function(e){this.setState({slideIndex:e,slideToShow:e,enter:!1})}},{key:"render",value:function(){var e=this,t=Object(T.jsxs)(pe.d,{children:[Object(T.jsx)(pe.b,{exact:!0,path:"".concat(this.props.match.path,"/:id"),render:function(t){var n=t.match,i=parseInt(n.params.id);return e.state.reroute?Object(T.jsx)(pe.a,{push:!0,to:"".concat(e.props.match.url,"/").concat(e.state.slideIndex)}):(e.state.enter&&setTimeout(e.onEnter,0,i),Object(T.jsx)(a.Fragment,{}))}}),Object(T.jsx)(pe.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),n=Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(ce.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(T.jsx)("div",{children:Object(T.jsx)(ae,{children:this.state.mdChapters[this.state.slideToShow],mdInfo:this.props.mdInfo})})})});return Object(T.jsxs)(P.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[t,n,Object(T.jsx)(le.a,{title:"First slide","aria-label":"First slide",children:Object(T.jsx)(F.a,{"aria-label":"First slide",sx:de.fabLL,color:"primary",onClick:this.firstSlide,children:Object(T.jsx)(he.a,{})})}),Object(T.jsx)(le.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(T.jsx)(F.a,{"aria-label":"Previous slide",sx:de.fabL,color:"primary",onClick:this.previousSlide,children:Object(T.jsx)(R.a,{})})}),Object(T.jsx)(F.a,{"aria-label":"Slide",sx:de.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(T.jsx)(le.a,{title:"Next slide","aria-label":"Next slide",children:Object(T.jsx)(F.a,{"aria-label":"Next slide",sx:de.fabR,color:"primary",onClick:this.nextSlide,children:Object(T.jsx)(A.a,{})})})]})}}]),n}(a.Component),je=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,i=this.props.mdInfo.mdContent;return i.search(n)>=0?(console.log("presenation mode"),i=i.split(n).pop(),e=Object(T.jsx)(pe.b,{to:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(ue,Object(p.a)({mdChapters:i,mdInfo:t.props.mdInfo},e))}})):(console.log("document mode"),e=Object(T.jsx)(pe.b,{to:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(oe,Object(p.a)({mdChapters:i,mdInfo:t.props.mdInfo},e))}})),Object(T.jsx)(a.Fragment,{children:e})}}]),n}(a.Component),me=je,be=n(421),Oe=n(434),fe=n(433),xe=n(402),ge=n(403),ve=n(427),ye=n(432),Ce=n(409),we=n(426),Se=n(416),ke=n(396),Te=n(397),Ie=n(39),Le={Folder:{color:"#002052",fontWeight:"bold",paddingLeft:0},File:{color:"#002052",fontWeight:"500",paddingLeft:0}},Pe=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;function i(t){return"Folder"===t.type?function(e){return e.children.find((function(e){return i(e)}))}(t):!(!e.match.params.hasOwnProperty("fileName")||e.match.params.fileName!==t.file)}Object(d.a)(this,n);var s=i((a=t.call(this,e)).props.item);return s=void 0!==s,a.state={expand:s},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.item,i={};this.props.depth>0&&(i={paddingLeft:32*this.props.depth});var s={};if("Folder"===t.type){var r=t.children.map((function(t){return Object(T.jsx)(pe.b,{to:"".concat(e.props.match.path),render:function(a){return Object(T.jsx)(n,Object(p.a)({item:t,depth:e.props.depth+1,selectCb:e.props.selectCb},a),t.name)}},t.name)}));s=Object(T.jsxs)(a.Fragment,{children:[Object(T.jsxs)(Ce.a,{button:!0,style:i,onClick:function(t){return e.setState({expand:!e.state.expand})},children:[Object(T.jsx)(we.a,{inset:!0,primary:t.name,disableTypography:!0,sx:Le.Folder}),this.state.expand?Object(T.jsx)(ke.a,{}):Object(T.jsx)(Te.a,{})]}),Object(T.jsx)(Se.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(T.jsx)(ve.a,{component:"div",disablePadding:!0,children:r})})]})}else if("File"===t.type){var o=!1;this.props.match.params.hasOwnProperty("fileName")&&this.props.match.params.fileName===t.file&&(o=!0);var c="";if(this.props.match.path.search(":fileName")>0){var l=this.props.match.url.split("/");l.pop(),c=l.join("/")}else c=this.props.match.url;c+="/".concat(t.file),s=Object(T.jsx)(Ce.a,{button:!0,selected:o,style:i,onClick:function(n){return e.props.selectCb(t.name)},component:Ie.b,to:c,children:Object(T.jsx)(we.a,{disableTypography:!0,inset:!0,primary:t.name,sx:Le.File})})}return Object(T.jsx)(a.Fragment,{children:s})}}]),n}(a.Component),De=n(401),Fe=n(400),Ne=n(428),Be=n(429),Ee=n(430),Me=n(398),Ae=n(431),Re=n(399),We=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={open:!1},a.tagSelected=a.tagSelected.bind(Object(j.a)(a)),a.handleClose=a.handleClose.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"openDialog",value:function(){this.setState({open:!0})}},{key:"tagSelected",value:function(e){this.setState({open:!1})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.props.tags,n="",a="";return this.props.match.params.hasOwnProperty("githubName")&&(n=n+"/"+this.props.match.params.githubName),this.props.match.params.hasOwnProperty("githubRepository")&&(n=n+"/"+this.props.match.params.githubRepository),this.props.match.params.hasOwnProperty("fileName")&&(a=this.props.match.params.fileName),Object(T.jsxs)(Ne.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:this.state.open,children:[Object(T.jsx)(Be.a,{id:"simple-dialog-title",children:"Select page variant"}),Object(T.jsx)(Ee.a,{children:"Page allow multiple vatiants for its content. They can be linked to specific SW or HW version."}),Object(T.jsx)(ve.a,{children:t.map((function(t){return Object(T.jsxs)(Me.a,{onClick:function(){return e.tagSelected(t)},component:Ie.b,to:"".concat(n,"/").concat(t,"/").concat(a),children:[Object(T.jsx)(Ae.a,{children:Object(T.jsx)(Re.a,{color:"primary"})}),Object(T.jsx)(we.a,{primary:t})]},t)}))})]})}}]),n}(a.Component),Ge={flexGrow:1},qe=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).tagDialog=i.a.createRef(),a.closeDrawer=a.closeDrawer.bind(Object(j.a)(a)),a.openTagDialog=a.openTagDialog.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"closeDrawer",value:function(){this.props.drawerChange(!1)}},{key:"openTagDialog",value:function(){this.tagDialog.current.openDialog()}},{key:"render",value:function(){var e,t=this,n=this.props.classesToUse,a=this.props.menuItems.map((function(e,n){return Object(T.jsx)(pe.b,{to:"".concat(t.props.match.path),render:function(n){return Object(T.jsx)(Pe,Object(p.a)({item:e,depth:0,selectCb:t.props.selectCb,classesToUse:t.props.classesToUse},n),e.name)}},n)})),i=Object(T.jsx)(ve.a,{component:"nav",children:a});return this.props.pageOptions.allowTagSelect?e=Object(T.jsx)(y.a,{color:"inherit",onClick:this.openTagDialog,startIcon:Object(T.jsx)(Fe.a,{}),sx:Ge,children:this.props.match.params.gitTag}):Array.isArray(this.props.tagList)&&(e=Object(T.jsx)(y.a,{color:"inherit",startIcon:Object(T.jsx)(Fe.a,{}),sx:Ge,children:this.props.tagList[0]})),Object(T.jsxs)(ye.a,{sx:n.drawer,variant:"persistent",open:this.props.isDrawerOpen,anchor:"left",children:[Object(T.jsxs)(fe.a,{children:[Object(T.jsx)(be.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(T.jsx)(De.a,{})}),e]}),Object(T.jsx)(C.a,{}),i,Object(T.jsx)(pe.b,{to:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(We,Object(p.a)({tags:t.props.tagList,ref:t.tagDialog},e))}})]})}}]),n}(a.Component),Ue=320,_e={root:{display:"flex"},drawer:{width:Ue,flexShrink:0,"& .MuiDrawer-paper":{width:Ue}},drawerPaper:{width:Ue},appBarClose:{marginLeft:Ue,transition:function(e){return e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}},appBarOpen:{width:"calc(100% - ".concat(Ue,"px)"),marginLeft:Ue,transition:function(e){return e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})}},content:{flexGrow:1,padding:24,transition:function(e){return e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},marginLeft:0},contentShift:{transition:function(e){return e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},marginLeft:0},nested:{paddingLeft:32},title:{flexGrow:1}},ze=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[],mdfilesToLoadArr:[],mdGithubLoc:"",githubPage:"",selectTag:!1,tagList:[],githubName:"",githubRepository:"",gitTag:"",pageOptions:{allowMenu:!0,allowTagSelect:!0}},a.itemSelectedCb=a.itemSelectedCb.bind(Object(j.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(j.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(j.a)(a)),a.fetchRestOfFiles=a.fetchRestOfFiles.bind(Object(j.a)(a)),a.fetchGithubTags=a.fetchGithubTags.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("!!local option currently not working!!"),this.fetchRestOfFiles("/tomas_materials_v2")}},{key:"componentDidUpdate",value:function(e){this.props.match.params.gitTag,e.match.params.gitTag}},{key:"fetchGithubTags",value:function(e,t){var n=this,a="https://api.github.com/repos/".concat(e,"/").concat(t,"/tags");fetch(a).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e.name}));n.setState({tagList:t})}))}},{key:"fetchRestOfFiles",value:function(e,t,n){var a,i=this,s=[],r="";r=".",fetch(r+"/filesToLoad.json").then((function(e){return e.json()})).then((function(e){document.title=e.title,a=e})).then((function(){var o=a.filesToLoadArr.map((function(e){return fetch(r+e.path+"/"+e.file).then((function(e){return e.text()})).then((function(t){var n={name:e.name,mdContent:t,mdPath:e.path,mdFile:e.file};s.push(n)}))}));Promise.all(o).then((function(){var o=!0;"options"in a&&"allowMenu"in a.options||(a.options=i.state.pageOptions,console.log("Add options to yout filesToLoad file")),!1===a.options.allowMenu&&(o=!1),i.setState({githubName:e,githubRepository:t,gitTag:n,mdFilesContent:s,menuStructure:a.menuStructure,mdfilesToLoadArr:a.filesToLoadArr,mdGithubLoc:a.githubLoc,githubPage:r,pageOptions:a.options,isDrawerOpen:o})}))}))}},{key:"itemSelectedCb",value:function(e){this.setState({mdSelected:e})}},{key:"handleDrawerOpen",value:function(){this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(e){this.setState({isDrawerOpen:e})}},{key:"render",value:function(){var e,t,n,i,s,r,o=this,c={},l="";if(0===this.state.mdFilesContent.length)c.name="Loading",c.mdContent="",c.mdPath="";else if(1===this.state.mdFilesContent.length){c=this.state.mdFilesContent[0];var h=this.state.menuStructure[0];e=Object(T.jsx)(pe.b,{to:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(qe,Object(p.a)({classesToUse:_e,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},e))}}),t=Object(T.jsx)(pe.b,{path:"".concat(l,"/").concat(h.file),render:function(e){return Object(T.jsx)(_.Provider,{value:o.state.githubPage,children:Object(T.jsx)(me,Object(p.a)({mdInfo:c},e))})}})}else e=Object(T.jsx)(pe.b,{to:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(qe,Object(p.a)({classesToUse:_e,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},e))}}),c=this.state.mdFilesContent.find((function(e){return e.name===o.state.mdSelected})),(t=this.state.mdFilesContent.map((function(e,t){return Object(T.jsx)(pe.b,{path:"".concat(l,"/").concat(e.mdFile),render:function(t){return Object(T.jsx)(_.Provider,{value:o.state.githubPage,children:Object(T.jsx)(me,Object(p.a)({mdInfo:e},t))})}},t)}))).push(Object(T.jsx)(pe.b,{exact:!0,path:"".concat(this.props.match.path),render:function(e){return Object(T.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===c&&((c={}).name="",c.mdContent="",c.mdPath="");this.state.isDrawerOpen?(n=_e.appBarOpen,i=_e.contentShift):(console.log(this),"allowMenu"in this.state.pageOptions&&!0===this.state.pageOptions.allowMenu&&(s=Object(T.jsx)(be.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(T.jsx)(xe.a,{})})),n=_e.appBarClose,e=null,i=_e.content);var d=this.state.mdfilesToLoadArr.find((function(e){return o.props.location.pathname.includes(e.file)}));if(void 0!==d){var u="https://github.com/".concat(this.state.githubName,"/").concat(this.state.githubRepository,"/blob/").concat(this.state.gitTag).concat(d.path,"/").concat(d.file);c.name=d.name,r=Object(T.jsx)(y.a,{target:"_blank",href:u,startIcon:Object(T.jsx)(ge.a,{}),color:"inherit",children:"EDIT THIS PAGE"})}return Object(T.jsxs)(P.a,{sx:_e.root,children:[e,Object(T.jsx)(Oe.a,{position:"fixed",sx:n,children:Object(T.jsxs)(fe.a,{children:[s,Object(T.jsx)(x.a,{variant:"h6",color:"inherit",sx:_e.title,children:c.name}),r]})}),Object(T.jsx)(P.a,{className:i,children:Object(T.jsxs)(k.a,{maxSnack:3,children:[Object(T.jsx)(fe.a,{}),t,Object(T.jsx)(P.a,{sx:{height:80}})]})})]})}}]),n}(a.Component),He=n(415),Je=(n(349),Object(o.a)({typography:{useNextVariants:!0,fontFamily:["Roboto","Arial"].join(",")},palette:{primary:l.a,secondary:h.a,text:{primary:"#002052"}}}));var Ve=function(){var e;return e=Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)(pe.b,{exact:!0,path:"/",children:Object(T.jsx)(pe.a,{to:"/show"})}),Object(T.jsx)(pe.b,{path:"/:fileName",component:ze})]}),Object(T.jsx)(Ie.a,{basename:"/tomas_materials_v2",children:Object(T.jsxs)(c.a,{theme:Je,children:[Object(T.jsx)(He.a,{}),Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(pe.d,{children:e})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(T.jsx)(Ve,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[350,1,2]]]);
//# sourceMappingURL=main.702ffb7d.chunk.js.map