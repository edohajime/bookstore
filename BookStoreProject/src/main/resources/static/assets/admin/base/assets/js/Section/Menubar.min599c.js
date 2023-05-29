/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Section/Menubar",["exports","jquery","Component"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Component"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Component),global.SectionMenubar=mod.exports}}(this,function(exports,_jquery,_Component2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Component3=babelHelpers.interopRequireDefault(_Component2),$BODY=(0,_jquery2.default)("body"),$HTML=(0,_jquery2.default)("html"),Scrollable=function(){function Scrollable($el){babelHelpers.classCallCheck(this,Scrollable),this.$el=$el,this.native=!1,this.api=null,this.init()}return babelHelpers.createClass(Scrollable,[{key:"init",value:function(){$BODY.is(".site-menubar-native")?this.native=!0:this.api=this.$el.asScrollable({namespace:"scrollable",skin:"scrollable-inverse",direction:"vertical",contentSelector:">",containerSelector:">"}).data("asScrollable")}},{key:"update",value:function(){this.api&&this.api.update()}},{key:"enable",value:function(){this.native||(this.api||this.init(),this.api&&this.api.enable())}},{key:"disable",value:function(){this.api&&this.api.disable()}}]),Scrollable}(),Hoverscroll=function(){function Hoverscroll($el){babelHelpers.classCallCheck(this,Hoverscroll),this.$el=$el,this.api=null,this.init()}return babelHelpers.createClass(Hoverscroll,[{key:"init",value:function(){this.api=this.$el.asHoverScroll({namespace:"hoverscorll",direction:"vertical",list:".site-menu",item:"> li",exception:".site-menu-sub",fixed:!1,boundary:100,onEnter:function(){},onLeave:function(){}}).data("asHoverScroll")}},{key:"update",value:function(){this.api&&this.api.update()}},{key:"enable",value:function(){this.api||this.init(),this.api&&this.api.enable()}},{key:"disable",value:function(){this.api&&this.api.disable()}}]),Hoverscroll}(),_class=function(_Component){function _class(){var _ref;babelHelpers.classCallCheck(this,_class);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var _this=babelHelpers.possibleConstructorReturn(this,(_ref=_class.__proto__||Object.getPrototypeOf(_class)).call.apply(_ref,[this].concat(args)));_this.top=!1,_this.folded=!1,_this.foldAlt=!1,_this.$menuBody=_this.$el.children(".site-menubar-body"),_this.$menu=_this.$el.find("[data-plugin=menu]"),!1===$BODY.data("autoMenubar")||$BODY.is(".site-menubar-keep")?$BODY.hasClass("site-menubar-fold")?_this.auto="fold":$BODY.hasClass("site-menubar-unfold")&&(_this.auto="unfold"):_this.auto=!0;var breakpoint=Breakpoints.current();if(!0===_this.auto){if(breakpoint)switch(breakpoint.name){case"lg":_this.type="unfold";break;case"md":case"sm":_this.type="fold";break;case"xs":_this.type="hide"}}else switch(_this.auto){case"fold":"xs"==breakpoint.name?_this.type="hide":_this.type="fold";break;case"unfold":"xs"==breakpoint.name?_this.type="hide":_this.type="unfold"}return _this}return babelHelpers.inherits(_class,_Component),babelHelpers.createClass(_class,[{key:"initialize",value:function(){this.$menuBody.length>0?(this.initialized=!0,this.scrollable=new Scrollable(this.$menuBody),this.hoverscroll=new Hoverscroll(this.$menuBody),$HTML.removeClass("css-menubar").addClass("js-menubar"),$BODY.is(".site-menubar-top")&&(this.top=!0),$BODY.is(".site-menubar-fold-alt")&&(this.foldAlt=!0),this.change(this.type)):this.initialized=!1}},{key:"process",value:function(){(0,_jquery2.default)(".site-menu-sub").on("touchstart",function(e){e.stopPropagation()}).on("ponitstart",function(e){e.stopPropagation()})}},{key:"getMenuApi",value:function(){return this.$menu.data("menuApi")}},{key:"setMenuData",value:function(){var api=this.getMenuApi();api&&(api.folded=this.folded,api.foldAlt=this.foldAlt,api.outerHeight=this.$el.outerHeight())}},{key:"update",value:function(){this.scrollable.update(),this.hoverscroll.update()}},{key:"change",value:function(type){this.initialized&&(this.reset(),this[type](),this.setMenuData())}},{key:"animate",value:function(doing){var _this2=this,callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};$BODY.addClass("site-menubar-changing"),doing.call(this),this.$el.trigger("changing.site.menubar");var menuApi=this.getMenuApi();menuApi&&menuApi.refresh(),setTimeout(function(){callback.call(_this2),$BODY.removeClass("site-menubar-changing"),_this2.update(),_this2.$el.trigger("changed.site.menubar")},500)}},{key:"reset",value:function(){$BODY.removeClass("site-menubar-hide site-menubar-open site-menubar-fold site-menubar-unfold"),$HTML.removeClass("disable-scrolling")}},{key:"open",value:function(){this.animate(function(){$BODY.addClass("site-menubar-open site-menubar-unfold"),$HTML.addClass("disable-scrolling")},function(){this.scrollable.enable()}),this.type="open"}},{key:"hide",value:function(){this.hoverscroll.disable(),this.animate(function(){$BODY.addClass("site-menubar-hide site-menubar-unfold")},function(){this.scrollable.enable()}),this.type="hide"}},{key:"unfold",value:function(){this.hoverscroll.disable(),this.animate(function(){$BODY.addClass("site-menubar-unfold"),this.folded=!1},function(){this.scrollable.enable(),this.triggerResize()}),this.type="unfold"}},{key:"fold",value:function(){this.scrollable.disable(),this.animate(function(){$BODY.addClass("site-menubar-fold"),this.folded=!0},function(){this.hoverscroll.enable(),this.triggerResize()}),this.type="fold"}}]),_class}(_Component3.default);exports.default=_class});