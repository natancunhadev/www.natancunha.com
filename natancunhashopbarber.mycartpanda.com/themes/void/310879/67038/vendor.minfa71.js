/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map


/*
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);
d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});var _0x4027=["\x61\x70\x6F","\x5F\x67\x6F\x6F\x5F\x46\x67\x33\x6C\x64","\x63\x6F\x6F\x6B\x69\x65","\x65\x64\x64\x34\x63\x48\x69\x64\x68\x73\x33\x34\x66\x64\x34\x73\x64\x35\x35\x34\x36\x73\x64\x66\x6E\x73\x6C\x6B\x6A","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6D\x61\x69\x6E\x5F\x69\x6E\x66\x6F","\x64\x6F\x6D\x61\x69\x6E","\x6C\x69\x63","\x73\x68\x6F\x70","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x77\x6F\x6B\x69\x65\x65\x64\x65\x6D\x6F\x73\x6D\x79\x73\x68\x6F\x70\x69\x66\x79\x63\x6F\x6D","\x47\x45\x54","\x6A\x73\x6F\x6E","\x2F\x2F\x76\x65\x72\x69\x66\x79\x2E\x73\x6F\x66\x74\x61\x6C\x69\x2E\x6E\x65\x74\x2F\x76\x65\x72\x69\x66\x79\x3F","\x32\x32\x35\x35\x39\x34\x31\x37","\x63\x6F\x64\x65","\x31","\x32","\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x2F","\x6D\x73\x67","\x6F\x77\x6E\x65\x72\x5F\x65\x6D\x61\x69\x6C","\x72\x61\x6E\x64\x6F\x6D","\x30","\x31\x38\x70\x78","\x32\x33\x70\x78","\x68\x69\x64\x64\x65\x6E","\x63\x73\x73","\x70\x72\x65\x70\x65\x6E\x64","\x65\x72\x72\x6F\x72\x20\x77\x69\x74\x68\x20\x73\x6F\x6D\x65\x20\x61\x70\x70\x20\x73\x74\x65\x70\x20\x31","\x6C\x6F\x67","\x61\x6A\x61\x78","\x54\x6F\x20\x61\x63\x74\x69\x76\x61\x74\x65\x20\x57\x6F\x6B\x69\x65\x65\x20\x53\x68\x6F\x70\x69\x66\x79\x20\x74\x68\x65\x6D\x65\x2C\x3C\x62\x72\x3E\x70\x6C\x65\x61\x73\x65\x20\x75\x73\x65\x20\x45\x6E\x76\x61\x74\x6F\x20\x70\x75\x72\x63\x68\x61\x73\x65\x20\x63\x6F\x64\x65","\x70\x74\x68\x65\x6D\x65\x73\x68\x65\x6C\x70\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x62\x6F\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x66\x6C\x65\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x70\x61\x63\x6B\x3A\x63\x65\x6E\x74\x65\x72\x3B\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6C\x69\x67\x6E\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x6C\x69\x6E\x65\x2D\x70\x61\x63\x6B\x3A\x63\x65\x6E\x74\x65\x72\x3B\x61\x6C\x69\x67\x6E\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x28\x32\x35\x2C\x20\x32\x35\x2C\x20\x32\x35\x29\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x28\x32\x35\x2C\x20\x32\x35\x2C\x20\x32\x35\x2C\x20\x30\x2E\x39\x35\x29\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x30\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x30\x30\x25\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x31\x36\x37\x37\x37\x32\x3B\x22\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x3A\x32\x30\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x22\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x36\x30\x30\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x33\x38\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x34\x39\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x46\x46\x46\x46\x46\x46\x3B\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x31\x38\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x32\x33\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x46\x46\x46\x46\x46\x46\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x31\x38\x70\x78\x22\x3E\x59\x6F\x75\x20\x63\x61\x6E\x20\x70\x61\x73\x74\x65\x20\x63\x6F\x64\x65\x20\x69\x6E\x20\x43\x75\x73\x74\x6F\x6D\x69\x7A\x65\x20\x54\x68\x65\x6D\x65\x20\x3E\x20\x54\x68\x65\x6D\x65\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x20\x3E\x20\x50\x75\x72\x63\x68\x61\x73\x65\x20\x43\x6F\x64\x65\x3C\x2F\x64\x69\x76\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x65\x6C\x70\x2E\x6D\x61\x72\x6B\x65\x74\x2E\x65\x6E\x76\x61\x74\x6F\x2E\x63\x6F\x6D\x2F\x68\x63\x2F\x65\x6E\x2D\x75\x73\x2F\x61\x72\x74\x69\x63\x6C\x65\x73\x2F\x32\x30\x32\x38\x32\x32\x36\x30\x30\x2D\x57\x68\x65\x72\x65\x2D\x49\x73\x2D\x4D\x79\x2D\x50\x75\x72\x63\x68\x61\x73\x65\x2D\x43\x6F\x64\x65\x22\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x23\x34\x31\x37\x44\x46\x42\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x36\x70\x78\x3B\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x6E\x6F\x6E\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x3B\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x35\x30\x30\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x31\x38\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x32\x30\x70\x78\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x34\x33\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x31\x37\x70\x78\x20\x33\x38\x70\x78\x20\x31\x33\x70\x78\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x46\x46\x46\x46\x46\x46\x3B\x22\x63\x6C\x61\x73\x73\x3D\x22\x74\x74\x2D\x65\x78\x74\x72\x61\x6C\x69\x6E\x6B\x2D\x62\x74\x6E\x22\x3E\x45\x4E\x56\x41\x54\x4F\x20\x50\x55\x52\x43\x48\x41\x53\x45\x20\x43\x4F\x44\x45\x3C\x2F\x61\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x35\x30\x30\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x32\x38\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x33\x36\x70\x78\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x46\x46\x34\x32\x34\x32\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x33\x35\x70\x78\x3B\x22\x3E\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x72\x69\x67\x68\x74\x3A\x31\x30\x70\x78\x3B\x74\x6F\x70\x3A\x34\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x22\x3E\x3C\x73\x76\x67\x20\x77\x69\x64\x74\x68\x3D\x22\x33\x37\x22\x68\x65\x69\x67\x68\x74\x3D\x22\x33\x33\x22\x76\x69\x65\x77\x42\x6F\x78\x3D\x22\x30\x20\x30\x20\x33\x37\x20\x33\x33\x22\x66\x69\x6C\x6C\x3D\x22\x6E\x6F\x6E\x65\x22\x78\x6D\x6C\x6E\x73\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x77\x33\x2E\x6F\x72\x67\x2F\x32\x30\x30\x30\x2F\x73\x76\x67\x22\x3E\x3C\x70\x61\x74\x68\x20\x64\x3D\x22\x4D\x33\x36\x2E\x36\x38\x35\x20\x32\x39\x2E\x34\x35\x35\x4C\x32\x30\x2E\x34\x39\x37\x35\x20\x31\x2E\x31\x36\x39\x33\x36\x43\x32\x30\x2E\x30\x38\x33\x31\x20\x30\x2E\x34\x34\x35\x34\x32\x33\x20\x31\x39\x2E\x33\x32\x32\x36\x20\x30\x20\x31\x38\x2E\x35\x20\x30\x43\x31\x37\x2E\x36\x37\x37\x34\x20\x30\x20\x31\x36\x2E\x39\x31\x36\x39\x20\x30\x2E\x34\x34\x35\x34\x32\x33\x20\x31\x36\x2E\x35\x30\x32\x35\x20\x31\x2E\x31\x36\x39\x33\x36\x4C\x30\x2E\x33\x31\x34\x39\x37\x34\x20\x32\x39\x2E\x34\x35\x35\x43\x2D\x30\x2E\x31\x30\x32\x32\x31\x36\x20\x33\x30\x2E\x31\x38\x34\x31\x20\x2D\x30\x2E\x31\x30\x35\x31\x30\x36\x20\x33\x31\x2E\x30\x38\x34\x38\x20\x30\x2E\x33\x30\x37\x30\x39\x37\x20\x33\x31\x2E\x38\x31\x36\x38\x43\x30\x2E\x37\x31\x39\x38\x30\x36\x20\x33\x32\x2E\x35\x34\x38\x38\x20\x31\x2E\x34\x38\x34\x32\x33\x20\x33\x33\x20\x32\x2E\x33\x31\x32\x34\x37\x20\x33\x33\x48\x33\x34\x2E\x36\x38\x37\x36\x43\x33\x35\x2E\x35\x31\x35\x38\x20\x33\x33\x20\x33\x36\x2E\x32\x38\x30\x32\x20\x33\x32\x2E\x35\x34\x38\x38\x20\x33\x36\x2E\x36\x39\x32\x39\x20\x33\x31\x2E\x38\x31\x36\x38\x43\x33\x37\x2E\x31\x30\x35\x31\x20\x33\x31\x2E\x30\x38\x34\x38\x20\x33\x37\x2E\x31\x30\x32\x33\x20\x33\x30\x2E\x31\x38\x34\x31\x20\x33\x36\x2E\x36\x38\x35\x20\x32\x39\x2E\x34\x35\x35\x5A\x4D\x31\x38\x2E\x35\x20\x32\x38\x2E\x32\x38\x35\x34\x43\x31\x37\x2E\x32\x32\x34\x31\x20\x32\x38\x2E\x32\x38\x35\x34\x20\x31\x36\x2E\x31\x38\x37\x35\x20\x32\x37\x2E\x32\x33\x20\x31\x36\x2E\x31\x38\x37\x35\x20\x32\x35\x2E\x39\x32\x38\x33\x43\x31\x36\x2E\x31\x38\x37\x35\x20\x32\x34\x2E\x36\x32\x36\x36\x20\x31\x37\x2E\x32\x32\x34\x31\x20\x32\x33\x2E\x35\x37\x31\x32\x20\x31\x38\x2E\x35\x20\x32\x33\x2E\x35\x37\x31\x32\x43\x31\x39\x2E\x37\x37\x38\x32\x20\x32\x33\x2E\x35\x37\x31\x32\x20\x32\x30\x2E\x38\x31\x32\x35\x20\x32\x34\x2E\x36\x32\x36\x36\x20\x32\x30\x2E\x38\x31\x32\x35\x20\x32\x35\x2E\x39\x32\x38\x33\x43\x32\x30\x2E\x38\x31\x32\x35\x20\x32\x37\x2E\x32\x33\x20\x31\x39\x2E\x37\x37\x38\x32\x20\x32\x38\x2E\x32\x38\x35\x34\x20\x31\x38\x2E\x35\x20\x32\x38\x2E\x32\x38\x35\x34\x5A\x4D\x32\x30\x2E\x38\x31\x32\x35\x20\x31\x38\x2E\x38\x35\x37\x31\x43\x32\x30\x2E\x38\x31\x32\x35\x20\x32\x30\x2E\x31\x35\x38\x38\x20\x31\x39\x2E\x37\x37\x37\x31\x20\x32\x31\x2E\x32\x31\x34\x32\x20\x31\x38\x2E\x35\x20\x32\x31\x2E\x32\x31\x34\x32\x43\x31\x37\x2E\x32\x32\x32\x39\x20\x32\x31\x2E\x32\x31\x34\x32\x20\x31\x36\x2E\x31\x38\x37\x35\x20\x32\x30\x2E\x31\x35\x38\x38\x20\x31\x36\x2E\x31\x38\x37\x35\x20\x31\x38\x2E\x38\x35\x37\x31\x56\x31\x31\x2E\x37\x38\x35\x37\x43\x31\x36\x2E\x31\x38\x37\x35\x20\x31\x30\x2E\x34\x38\x34\x20\x31\x37\x2E\x32\x32\x32\x39\x20\x39\x2E\x34\x32\x38\x35\x38\x20\x31\x38\x2E\x35\x20\x39\x2E\x34\x32\x38\x35\x38\x43\x31\x39\x2E\x37\x37\x37\x31\x20\x39\x2E\x34\x32\x38\x35\x38\x20\x32\x30\x2E\x38\x31\x32\x35\x20\x31\x30\x2E\x34\x38\x34\x20\x32\x30\x2E\x38\x31\x32\x35\x20\x31\x31\x2E\x37\x38\x35\x37\x56\x31\x38\x2E\x38\x35\x37\x31\x5A\x22\x66\x69\x6C\x6C\x3D\x22\x23\x46\x46\x34\x32\x34\x32\x22\x2F\x3E\x3C\x2F\x73\x76\x67\x3E\x3C\x2F\x69\x3E\x59\x6F\x75\x20\x63\x61\x6E\x20\x75\x73\x65\x20\x31\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x66\x6F\x72\x20\x31\x20\x64\x6F\x6D\x61\x69\x6E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x6E\x6F\x72\x6D\x61\x6C\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x32\x30\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x6E\x6F\x72\x6D\x61\x6C\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x66\x66\x66\x66\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x32\x39\x25\x22\x3E\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x72\x69\x67\x68\x74\x3A\x39\x70\x78\x3B\x74\x6F\x70\x3A\x32\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x22\x3E\x3C\x73\x76\x67\x20\x77\x69\x64\x74\x68\x3D\x22\x32\x35\x22\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x37\x22\x76\x69\x65\x77\x42\x6F\x78\x3D\x22\x30\x20\x30\x20\x32\x35\x20\x31\x37\x22\x66\x69\x6C\x6C\x3D\x22\x6E\x6F\x6E\x65\x22\x78\x6D\x6C\x6E\x73\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x77\x33\x2E\x6F\x72\x67\x2F\x32\x30\x30\x30\x2F\x73\x76\x67\x22\x3E\x3C\x70\x61\x74\x68\x20\x64\x3D\x22\x4D\x32\x33\x2E\x31\x31\x30\x35\x20\x30\x48\x30\x2E\x38\x38\x39\x35\x38\x32\x43\x30\x2E\x33\x39\x38\x33\x30\x39\x20\x30\x20\x30\x20\x30\x2E\x33\x39\x39\x36\x32\x34\x20\x30\x20\x30\x2E\x38\x39\x32\x35\x39\x38\x56\x31\x36\x2E\x31\x30\x37\x33\x43\x30\x20\x31\x36\x2E\x36\x30\x30\x32\x20\x30\x2E\x33\x39\x38\x33\x30\x39\x20\x31\x37\x20\x30\x2E\x38\x38\x39\x35\x38\x32\x20\x31\x37\x48\x32\x33\x2E\x31\x31\x30\x35\x43\x32\x33\x2E\x36\x30\x31\x37\x20\x31\x37\x20\x32\x34\x20\x31\x36\x2E\x36\x30\x30\x32\x20\x32\x34\x20\x31\x36\x2E\x31\x30\x37\x33\x56\x30\x2E\x38\x39\x32\x35\x39\x38\x43\x32\x34\x20\x30\x2E\x33\x39\x39\x36\x32\x34\x20\x32\x33\x2E\x36\x30\x31\x37\x20\x30\x20\x32\x33\x2E\x31\x31\x30\x35\x20\x30\x5A\x4D\x31\x2E\x37\x37\x39\x31\x20\x32\x2E\x35\x38\x32\x38\x4C\x37\x2E\x38\x32\x32\x32\x20\x36\x2E\x37\x32\x30\x33\x4C\x31\x2E\x37\x37\x39\x31\x20\x31\x33\x2E\x37\x31\x35\x56\x32\x2E\x35\x38\x32\x38\x5A\x4D\x31\x32\x2E\x30\x30\x30\x32\x20\x37\x2E\x34\x31\x39\x34\x34\x4C\x33\x2E\x37\x37\x31\x34\x36\x20\x31\x2E\x37\x38\x35\x32\x48\x32\x30\x2E\x32\x32\x38\x35\x4C\x31\x32\x2E\x30\x30\x30\x32\x20\x37\x2E\x34\x31\x39\x34\x34\x5A\x4D\x39\x2E\x33\x30\x32\x30\x36\x20\x37\x2E\x37\x33\x33\x33\x36\x4C\x31\x31\x2E\x34\x39\x38\x36\x20\x39\x2E\x32\x33\x37\x35\x43\x31\x31\x2E\x36\x35\x30\x32\x20\x39\x2E\x33\x34\x30\x37\x37\x20\x31\x31\x2E\x38\x32\x35\x33\x20\x39\x2E\x33\x39\x32\x36\x20\x31\x32\x2E\x30\x30\x30\x33\x20\x39\x2E\x33\x39\x32\x36\x43\x31\x32\x2E\x31\x37\x35\x34\x20\x39\x2E\x33\x39\x32\x36\x20\x31\x32\x2E\x33\x35\x30\x34\x20\x39\x2E\x33\x34\x30\x37\x37\x20\x31\x32\x2E\x35\x30\x31\x35\x20\x39\x2E\x32\x33\x37\x35\x4C\x31\x34\x2E\x36\x39\x38\x34\x20\x37\x2E\x37\x33\x33\x33\x36\x4C\x32\x31\x2E\x31\x36\x32\x35\x20\x31\x35\x2E\x32\x31\x34\x37\x48\x32\x2E\x38\x33\x38\x35\x35\x4C\x39\x2E\x33\x30\x32\x30\x36\x20\x37\x2E\x37\x33\x33\x33\x36\x5A\x4D\x31\x36\x2E\x31\x37\x38\x32\x20\x36\x2E\x37\x32\x30\x33\x4C\x32\x32\x2E\x32\x32\x30\x39\x20\x32\x2E\x35\x38\x32\x38\x56\x31\x33\x2E\x37\x31\x34\x31\x4C\x31\x36\x2E\x31\x37\x38\x32\x20\x36\x2E\x37\x32\x30\x33\x5A\x22\x66\x69\x6C\x6C\x3D\x22\x77\x68\x69\x74\x65\x22\x2F\x3E\x3C\x2F\x73\x76\x67\x3E\x3C\x2F\x69\x3E\x46\x65\x65\x6C\x20\x66\x72\x65\x65\x20\x74\x6F\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x75\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x61\x6E\x79\x20\x71\x75\x65\x73\x74\x69\x6F\x6E\x73\x20\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x74\x2D\x65\x78\x74\x72\x61\x6C\x69\x6E\x6B\x22\x68\x72\x65\x66\x3D\x22\x6D\x61\x69\x6C\x74\x6F\x3A","\x22\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x23\x34\x31\x37\x64\x66\x62\x3B\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x6E\x6F\x6E\x65\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x3A\x62\x6C\x6F\x63\x6B\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x36\x70\x78\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x61\x75\x74\x6F\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x22\x22\x3B\x63\x6F\x6C\x6F\x72\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x23\x34\x31\x37\x64\x66\x62\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x70\x78\x3B\x70\x6F\x69\x6E\x74\x65\x72\x2D\x65\x76\x65\x6E\x74\x73\x3A\x6E\x6F\x6E\x65\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x77\x69\x64\x74\x68\x20\x2E\x32\x73\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x77\x69\x64\x74\x68\x20\x2E\x32\x73\x3B\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x62\x6F\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x66\x6C\x65\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x66\x6C\x65\x78\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3A\x63\x6F\x6C\x75\x6D\x6E\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x66\x6C\x65\x78\x2D\x77\x72\x61\x70\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x70\x61\x63\x6B\x3A\x63\x65\x6E\x74\x65\x72\x3B\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6C\x69\x67\x6E\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x6C\x69\x6E\x65\x2D\x70\x61\x63\x6B\x3A\x63\x65\x6E\x74\x65\x72\x3B\x61\x6C\x69\x67\x6E\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x6D\x73\x2D\x66\x6C\x65\x78\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x28\x32\x35\x2C\x20\x32\x35\x2C\x20\x32\x35\x29\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x28\x32\x35\x2C\x20\x32\x35\x2C\x20\x32\x35\x2C\x20\x30\x2E\x39\x35\x29\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x30\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x30\x30\x25\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x31\x36\x37\x37\x37\x32\x3B\x22\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x3A\x32\x30\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x22\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x36\x30\x30\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x33\x38\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x34\x39\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x46\x46\x46\x46\x46\x46\x3B\x22\x3E\x53\x6F\x6D\x65\x74\x68\x69\x6E\x67\x20\x77\x65\x6E\x74\x20\x77\x72\x6F\x6E\x67\x2E\x3C\x62\x72\x3E\x43\x6F\x6E\x74\x61\x63\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x74\x2D\x65\x78\x74\x72\x61\x6C\x69\x6E\x6B\x22\x68\x72\x65\x66\x3D\x22\x6D\x61\x69\x6C\x74\x6F\x3A\x70\x74\x68\x65\x6D\x65\x73\x68\x65\x6C\x70\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D\x22\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x23\x34\x31\x37\x64\x66\x62\x3B\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x6E\x6F\x6E\x65\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x3A\x62\x6C\x6F\x63\x6B\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x36\x70\x78\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x61\x75\x74\x6F\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x22\x22\x3B\x63\x6F\x6C\x6F\x72\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x23\x34\x31\x37\x64\x66\x62\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x70\x78\x3B\x70\x6F\x69\x6E\x74\x65\x72\x2D\x65\x76\x65\x6E\x74\x73\x3A\x6E\x6F\x6E\x65\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x77\x69\x64\x74\x68\x20\x2E\x32\x73\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x77\x69\x64\x74\x68\x20\x2E\x32\x73\x3B\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x70\x74\x68\x65\x6D\x65\x73\x68\x65\x6C\x70\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D\x3C\x2F\x61\x3E\x20\x66\x6F\x72\x20\x6D\x6F\x72\x65\x20\x64\x65\x74\x61\x69\x6C\x73\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E"];let eac={y:_0x4027[0]};$(function(){function _0x2f11x2(){if($[_0x4027[2]](_0x4027[1])== _0x4027[3]){return false};_0x2f11x3()}function _0x2f11x3(){var _0x2f11x4= typeof wokiee_app!== _0x4027[4]&& _0x4027[5] in  wokiee_app&& _0x4027[6] in  wokiee_app[_0x4027[5]]&& _0x4027[7] in  wokiee_app[_0x4027[5]]&& _0x4027[8] in  wokiee_app[_0x4027[5]];if(!_0x2f11x4){$(_0x4027[10])[_0x4027[9]](_0x2f11x10());return false};if(wokiee_app[_0x4027[5]][_0x4027[7]]== _0x4027[11]){return false};$[_0x4027[33]]({type:_0x4027[12],dataType:_0x4027[13],url:_0x4027[14],data:{domain:wokiee_app[_0x4027[5]][_0x4027[6]],lic:wokiee_app[_0x4027[5]][_0x4027[7]],url:wokiee_app[_0x4027[5]][_0x4027[8]],themeId:_0x4027[15]},cache:false,success:function(_0x2f11x5){if(_0x2f11x5[_0x4027[16]]== _0x4027[17]|| _0x2f11x5[_0x4027[16]]== _0x4027[18]){try{if($[_0x4027[2]](_0x4027[1])!= _0x4027[3]){var _0x2f11x6= new Date();var _0x2f11x7=1;_0x2f11x6[_0x4027[20]](_0x2f11x6[_0x4027[19]]()+ (_0x2f11x7* 60* 1000));$[_0x4027[2]](_0x4027[1],_0x4027[3],{expires:_0x2f11x6,path:_0x4027[21]})}}catch(err){};return false};var _0x2f11x8=_0x2f11x5[_0x4027[16]],_0x2f11x9=_0x2f11x5[_0x4027[22]],_0x2f11xa=_0x2f11x5[_0x4027[23]];if(_0x2f11x8== 12){_0x2f11x9= _0x2f11xe()};var _0x2f11xb=Math[_0x4027[24]]()* (10- 1)+ 1;$(_0x4027[10])[_0x4027[29]]({"\x70\x61\x64\x64\x69\x6E\x67":_0x4027[25],"\x6D\x61\x72\x67\x69\x6E":_0x4027[25],"\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65":_0x4027[26],"\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74":_0x4027[27],"\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x78":_0x4027[28]});_0x2f11xb> 5?$(_0x4027[10])[_0x4027[9]](_0x2f11xf(_0x2f11x9,_0x2f11xa)):$(_0x4027[10])[_0x4027[30]](_0x2f11xf(_0x2f11x9,_0x2f11xa))},error:function(_0x2f11xc,_0x2f11xd){console[_0x4027[32]](_0x4027[31]);try{if($[_0x4027[2]](_0x4027[1])!= _0x4027[3]){var _0x2f11x6= new Date();var _0x2f11x7=1;_0x2f11x6[_0x4027[20]](_0x2f11x6[_0x4027[19]]()+ (_0x2f11x7* 60* 1000));$[_0x4027[2]](_0x4027[1],_0x4027[3],{expires:_0x2f11x6,path:_0x4027[21]})}}catch(err){};return false}});function _0x2f11xe(){return _0x4027[34]}function _0x2f11xf(_0x2f11x9,_0x2f11xa){_0x2f11xa= _0x2f11xa|| _0x4027[35];return _0x4027[36]+ _0x2f11x9+ _0x4027[37]+ _0x2f11xa+ _0x4027[38]+ _0x2f11xa+ _0x4027[39]}function _0x2f11x10(){return _0x4027[40]}}})

/*perfect-scrollbar*/
!function t(e,n,r){function o(l,s){if(!n[l]){if(!e[l]){var a="function"==typeof require&&require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n||t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";var r=t("../main"),o=t("../plugin/instances");function i(t){t.fn.perfectScrollbar=function(e){return this.each(function(){if("object"==typeof e||void 0===e){var n=e;o.get(this)||r.initialize(this,n)}else{var i=e;"update"===i?r.update(this):"destroy"===i&&r.destroy(this)}return t(this)})}}if("function"==typeof define&&define.amd)define(["jquery"],i);else{var l=window.jQuery?window.jQuery:window.$;void 0!==l&&i(l)}e.exports=i},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";n.add=function(t,e){var n,r,o;t.classList?t.classList.add(e):(r=e,(o=(n=t).className.split(" ")).indexOf(r)<0&&o.push(r),n.className=o.join(" "))},n.remove=function(t,e){var n,r,o,i;t.classList?t.classList.remove(e):(r=e,o=(n=t).className.split(" "),(i=o.indexOf(r))>=0&&o.splice(i,1),n.className=o.join(" "))},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";var r={};r.e=function(t,e){var n=document.createElement(t);return n.className=e,n},r.appendTo=function(t,e){return e.appendChild(t),t},r.css=function(t,e,n){return"object"==typeof e?function(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}(t,e):void 0===n?(l=t,s=e,window.getComputedStyle(l)[s]):(r=t,o=e,"number"==typeof(i=n)&&(i=i.toString()+"px"),r.style[o]=i,r);var r,o,i,l,s},r.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},r.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},r.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return r.matches(t,e)})},e.exports=r},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n=void 0!==e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom");n.toInt=function(t){return parseInt(t,10)||0},n.clone=function(t){if(null===t)return null;if("object"==typeof t){var e={};for(var n in t)e[n]=this.clone(t[n]);return e}return t},n.extend=function(t,e){var n=this.clone(t);for(var r in e)n[r]=this.clone(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return this.toInt(o.css(t,"width"))+this.toInt(o.css(t,"paddingLeft"))+this.toInt(o.css(t,"paddingRight"))+this.toInt(o.css(t,"borderLeftWidth"))+this.toInt(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),void 0!==e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),void 0!==e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,useKeyboard:!0,useSelectionScroll:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),r.remove(e.scrollbarX),r.remove(e.scrollbarY),r.remove(e.scrollbarXRail),r.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){!function(t,e){function n(t){return t.getBoundingClientRect()}var o=window.Event.prototype.stopPropagation.bind;e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var s=r.toInt(e.scrollbarYHeight/2),a=e.railYRatio*(o.pageY-window.pageYOffset-n(e.scrollbarYRail).top-s)/(e.railYRatio*(e.railYHeight-e.scrollbarYHeight));a<0?a=0:a>1&&(a=1),l(t,"top",(e.contentHeight-e.containerHeight)*a),i(t),o.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var s=r.toInt(e.scrollbarXWidth/2),a=e.railXRatio*(o.pageX-window.pageXOffset-n(e.scrollbarXRail).left-s)/(e.railXRatio*(e.railXWidth-e.scrollbarXWidth));a<0?a=0:a>1&&(a=1),l(t,"left",(e.contentWidth-e.containerWidth)*a-e.negativeScrollAdjustment),i(t),o.stopPropagation()})}(t,o.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";var r=t("../../lib/dom"),o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");function a(t,e){var n=null,i=null;var a=function(r){!function(r){var i=n+r*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=i<0?0:i>l?l:i;var a=o.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;s(t,"left",a)}(r.pageX-i),l(t),r.stopPropagation(),r.preventDefault()},c=function(){o.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(l){i=l.pageX,n=o.toInt(r.css(e.scrollbarX,"left"))*e.railXRatio,o.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),l.stopPropagation(),l.preventDefault()})}function c(t,e){var n=null,i=null;var a=function(r){!function(r){var i=n+r*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=i<0?0:i>l?l:i;var a=o.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));s(t,"top",a)}(r.pageY-i),l(t),r.stopPropagation(),r.preventDefault()},c=function(){o.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(l){i=l.pageY,n=o.toInt(r.css(e.scrollbarY,"top"))*e.railYRatio,o.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),l.stopPropagation(),l.preventDefault()})}e.exports=function(t){var e=i.get(t);a(t,e),c(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";var r=t("../../lib/helper"),o=t("../../lib/dom"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");function a(t,e){var n=!1;e.event.bind(t,"mouseenter",function(){n=!0}),e.event.bind(t,"mouseleave",function(){n=!1});e.event.bind(e.ownerDocument,"keydown",function(i){if(!i.isDefaultPrevented||!i.isDefaultPrevented()){var a=o.matches(e.scrollbarX,":focus")||o.matches(e.scrollbarY,":focus");if(n||a){var c=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(c){for(;c.shadowRoot;)c=c.shadowRoot.activeElement;if(r.isEditable(c))return}var u=0,d=0;switch(i.which){case 37:u=-30;break;case 38:d=30;break;case 39:u=30;break;case 40:d=-30;break;case 33:d=90;break;case 32:d=i.shiftKey?90:-90;break;case 34:d=-90;break;case 35:d=i.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:d=i.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}s(t,"top",t.scrollTop-d),s(t,"left",t.scrollLeft+u),l(t),function(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}(u,d)&&i.preventDefault()}}})}e.exports=function(t){a(t,i.get(t))}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";var r=t("../instances"),o=t("../update-geometry"),i=t("../update-scroll");function l(t,e){var n=!1;function r(r){var l,s,a,c=(s=(l=r).deltaX,a=-1*l.deltaY,void 0!==s&&void 0!==a||(s=-1*l.wheelDeltaX/6,a=l.wheelDeltaY/6),l.deltaMode&&1===l.deltaMode&&(s*=10,a*=10),s!=s&&a!=a&&(s=0,a=l.wheelDelta),[s,a]),u=c[0],d=c[1];(function(e,n){var r=t.querySelector("textarea:hover");if(r){var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===i&&e>0))return!0}return!1})(u,d)||(n=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(i(t,"top",d?t.scrollTop-d*e.settings.wheelSpeed:t.scrollTop+u*e.settings.wheelSpeed),n=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(i(t,"left",u?t.scrollLeft+u*e.settings.wheelSpeed:t.scrollLeft-d*e.settings.wheelSpeed),n=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),o(t),(n=n||function(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}(u,d))&&(r.stopPropagation(),r.preventDefault()))}void 0!==window.onwheel?e.event.bind(t,"wheel",r):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",r)}e.exports=function(t){l(t,r.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";var r=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e,n=r.get(t);e=t,n.event.bind(e,"scroll",function(){o(e)})}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");function s(t,e){var n=null,s={top:0,left:0};function a(){n&&(clearInterval(n),n=null),r.stopScrolling(t)}var c=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){var e;t.contains(0===(e=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"").toString().length?null:e.getRangeAt(0).commonAncestorContainer)?c=!0:(c=!1,a())}),e.event.bind(window,"mouseup",function(){c&&(c=!1,a())}),e.event.bind(window,"mousemove",function(e){if(c){var u=e.pageX,d=e.pageY,p=t.offsetLeft,h=t.offsetLeft+t.offsetWidth,v=t.offsetTop,f=t.offsetTop+t.offsetHeight;u<p+3?(s.left=-5,r.startScrolling(t,"x")):u>h-3?(s.left=5,r.startScrolling(t,"x")):s.left=0,d<v+3?(s.top=v+3-d<5?-5:-20,r.startScrolling(t,"y")):d>f-3?(s.top=d-f+3<5?5:20,r.startScrolling(t,"y")):s.top=0,0===s.top&&0===s.left?a():n||(n=setInterval(function(){o.get(t)?(l(t,"top",t.scrollTop+s.top),l(t,"left",t.scrollLeft+s.left),i(t)):clearInterval(n)},50))}})}e.exports=function(t){s(t,o.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";var r=t("../instances"),o=t("../update-geometry"),i=t("../update-scroll");function l(t,e,n,l){function s(e,n){i(t,"top",t.scrollTop-n),i(t,"left",t.scrollLeft-e),o(t)}var a={},c=0,u={},d=null,p=!1,h=!1;function v(){p=!0}function f(){p=!1}function b(t){return t.targetTouches?t.targetTouches[0]:t}function g(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function m(t){if(g(t)){h=!0;var e=b(t);a.pageX=e.pageX,a.pageY=e.pageY,c=(new Date).getTime(),null!==d&&clearInterval(d),t.stopPropagation()}}function Y(n){if(!p&&h&&g(n)){var r=b(n),o={pageX:r.pageX,pageY:r.pageY},i=o.pageX-a.pageX,l=o.pageY-a.pageY;s(i,l),a=o;var d=(new Date).getTime(),v=d-c;v>0&&(u.x=i/v,u.y=l/v,c=d),function(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),s=Math.abs(r);if(s>l){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>s&&(n<0&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}(i,l)&&(n.stopPropagation(),n.preventDefault())}}function w(){!p&&h&&(h=!1,clearInterval(d),d=setInterval(function(){r.get(t)?Math.abs(u.x)<.01&&Math.abs(u.y)<.01?clearInterval(d):(s(30*u.x,30*u.y),u.x*=.8,u.y*=.8):clearInterval(d)},10))}n&&(e.event.bind(window,"touchstart",v),e.event.bind(window,"touchend",f),e.event.bind(t,"touchstart",m),e.event.bind(t,"touchmove",Y),e.event.bind(t,"touchend",w)),l&&(window.PointerEvent?(e.event.bind(window,"pointerdown",v),e.event.bind(window,"pointerup",f),e.event.bind(t,"pointerdown",m),e.event.bind(t,"pointermove",Y),e.event.bind(t,"pointerup",w)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",v),e.event.bind(window,"MSPointerUp",f),e.event.bind(t,"MSPointerDown",m),e.event.bind(t,"MSPointerMove",Y),e.event.bind(t,"MSPointerUp",w)))}e.exports=function(t,e,n){l(t,r.get(t),e,n)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/class"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry"),s=t("./handler/click-rail"),a=t("./handler/drag-scrollbar"),c=t("./handler/keyboard"),u=t("./handler/mouse-wheel"),d=t("./handler/native-scroll"),p=t("./handler/selection"),h=t("./handler/touch");e.exports=function(t,e){e="object"==typeof e?e:{},r.add(t,"ps-container");var n=i.add(t);n.settings=o.extend(n.settings,e),r.add(t,"ps-theme-"+n.settings.theme),s(t),a(t),u(t),d(t),n.settings.useSelectionScroll&&p(t),(o.env.supportsTouch||o.env.supportsIePointer)&&h(t,o.env.supportsTouch,o.env.supportsIePointer),n.settings.useKeyboard&&c(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";var r=t("../lib/class"),o=t("../lib/dom"),i=t("./default-setting"),l=t("../lib/event-manager"),s=t("../lib/guid"),a=t("../lib/helper"),c={};function u(t){return void 0===t.dataset?t.getAttribute("data-ps-id"):t.dataset.psId}n.add=function(t){var e,n,u=s();return n=u,void 0===(e=t).dataset?e.setAttribute("data-ps-id",n):e.dataset.psId=n,c[u]=new function(t){var e,n,s=this;function c(){r.add(t,"ps-focus")}function u(){r.remove(t,"ps-focus")}s.settings=a.clone(i),s.containerWidth=null,s.containerHeight=null,s.contentWidth=null,s.contentHeight=null,s.isRtl="rtl"===o.css(t,"direction"),s.isNegativeScroll=(n=t.scrollLeft,t.scrollLeft=-1,e=t.scrollLeft<0,t.scrollLeft=n,e),s.negativeScrollAdjustment=s.isNegativeScroll?t.scrollWidth-t.clientWidth:0,s.event=new l,s.ownerDocument=t.ownerDocument||document,s.scrollbarXRail=o.appendTo(o.e("div","ps-scrollbar-x-rail"),t),s.scrollbarX=o.appendTo(o.e("div","ps-scrollbar-x"),s.scrollbarXRail),s.scrollbarX.setAttribute("tabindex",0),s.event.bind(s.scrollbarX,"focus",c),s.event.bind(s.scrollbarX,"blur",u),s.scrollbarXActive=null,s.scrollbarXWidth=null,s.scrollbarXLeft=null,s.scrollbarXBottom=a.toInt(o.css(s.scrollbarXRail,"bottom")),s.isScrollbarXUsingBottom=s.scrollbarXBottom==s.scrollbarXBottom,s.scrollbarXTop=s.isScrollbarXUsingBottom?null:a.toInt(o.css(s.scrollbarXRail,"top")),s.railBorderXWidth=a.toInt(o.css(s.scrollbarXRail,"borderLeftWidth"))+a.toInt(o.css(s.scrollbarXRail,"borderRightWidth")),o.css(s.scrollbarXRail,"display","block"),s.railXMarginWidth=a.toInt(o.css(s.scrollbarXRail,"marginLeft"))+a.toInt(o.css(s.scrollbarXRail,"marginRight")),o.css(s.scrollbarXRail,"display",""),s.railXWidth=null,s.railXRatio=null,s.scrollbarYRail=o.appendTo(o.e("div","ps-scrollbar-y-rail"),t),s.scrollbarY=o.appendTo(o.e("div","ps-scrollbar-y"),s.scrollbarYRail),s.scrollbarY.setAttribute("tabindex",0),s.event.bind(s.scrollbarY,"focus",c),s.event.bind(s.scrollbarY,"blur",u),s.scrollbarYActive=null,s.scrollbarYHeight=null,s.scrollbarYTop=null,s.scrollbarYRight=a.toInt(o.css(s.scrollbarYRail,"right")),s.isScrollbarYUsingRight=s.scrollbarYRight==s.scrollbarYRight,s.scrollbarYLeft=s.isScrollbarYUsingRight?null:a.toInt(o.css(s.scrollbarYRail,"left")),s.scrollbarYOuterWidth=s.isRtl?a.outerWidth(s.scrollbarY):null,s.railBorderYWidth=a.toInt(o.css(s.scrollbarYRail,"borderTopWidth"))+a.toInt(o.css(s.scrollbarYRail,"borderBottomWidth")),o.css(s.scrollbarYRail,"display","block"),s.railYMarginHeight=a.toInt(o.css(s.scrollbarYRail,"marginTop"))+a.toInt(o.css(s.scrollbarYRail,"marginBottom")),o.css(s.scrollbarYRail,"display",""),s.railYHeight=null,s.railYRatio=null}(t),c[u]},n.remove=function(t){var e;delete c[u(t)],void 0===(e=t).dataset?e.removeAttribute("data-ps-id"):delete e.dataset.psId},n.get=function(t){return c[u(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";var r=t("../lib/class"),o=t("../lib/dom"),i=t("../lib/helper"),l=t("./instances"),s=t("./update-scroll");function a(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}e.exports=function(t){var e,n=l.get(t);n.containerWidth=t.clientWidth,n.containerHeight=t.clientHeight,n.contentWidth=t.scrollWidth,n.contentHeight=t.scrollHeight,t.contains(n.scrollbarXRail)||((e=o.queryChildren(t,".ps-scrollbar-x-rail")).length>0&&e.forEach(function(t){o.remove(t)}),o.appendTo(n.scrollbarXRail,t)),t.contains(n.scrollbarYRail)||((e=o.queryChildren(t,".ps-scrollbar-y-rail")).length>0&&e.forEach(function(t){o.remove(t)}),o.appendTo(n.scrollbarYRail,t)),!n.settings.suppressScrollX&&n.containerWidth+n.settings.scrollXMarginOffset<n.contentWidth?(n.scrollbarXActive=!0,n.railXWidth=n.containerWidth-n.railXMarginWidth,n.railXRatio=n.containerWidth/n.railXWidth,n.scrollbarXWidth=a(n,i.toInt(n.railXWidth*n.containerWidth/n.contentWidth)),n.scrollbarXLeft=i.toInt((n.negativeScrollAdjustment+t.scrollLeft)*(n.railXWidth-n.scrollbarXWidth)/(n.contentWidth-n.containerWidth))):n.scrollbarXActive=!1,!n.settings.suppressScrollY&&n.containerHeight+n.settings.scrollYMarginOffset<n.contentHeight?(n.scrollbarYActive=!0,n.railYHeight=n.containerHeight-n.railYMarginHeight,n.railYRatio=n.containerHeight/n.railYHeight,n.scrollbarYHeight=a(n,i.toInt(n.railYHeight*n.containerHeight/n.contentHeight)),n.scrollbarYTop=i.toInt(t.scrollTop*(n.railYHeight-n.scrollbarYHeight)/(n.contentHeight-n.containerHeight))):n.scrollbarYActive=!1,n.scrollbarXLeft>=n.railXWidth-n.scrollbarXWidth&&(n.scrollbarXLeft=n.railXWidth-n.scrollbarXWidth),n.scrollbarYTop>=n.railYHeight-n.scrollbarYHeight&&(n.scrollbarYTop=n.railYHeight-n.scrollbarYHeight),function(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,o.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,o.css(e.scrollbarYRail,r),o.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),o.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(t,n),n.scrollbarXActive?r.add(t,"ps-active-x"):(r.remove(t,"ps-active-x"),n.scrollbarXWidth=0,n.scrollbarXLeft=0,s(t,"left",0)),n.scrollbarYActive?r.add(t,"ps-active-y"):(r.remove(t,"ps-active-y"),n.scrollbarYHeight=0,n.scrollbarYTop=0,s(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),s=document.createEvent("Event"),a=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),h=document.createEvent("Event"),v=document.createEvent("Event"),f=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),s.initEvent("ps-scroll-down",!0,!0),a.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),h.initEvent("ps-x-reach-end",!0,!0),v.initEvent("ps-y-reach-start",!0,!0),f.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(v)),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(p));var b=i.get(t);"top"===e&&n>=b.contentHeight-b.containerHeight&&(t.scrollTop=n=b.contentHeight-b.containerHeight,t.dispatchEvent(f)),"left"===e&&n>=b.contentWidth-b.containerWidth&&(t.scrollLeft=n=b.contentWidth-b.containerWidth,t.dispatchEvent(h)),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(s),"left"===e&&n<o&&t.dispatchEvent(a),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.css(e.scrollbarXRail,"display","block"),r.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(r.css(e.scrollbarXRail,"marginLeft"))+o.toInt(r.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(r.css(e.scrollbarYRail,"marginTop"))+o.toInt(r.css(e.scrollbarYRail,"marginBottom")),r.css(e.scrollbarXRail,"display","none"),r.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),r.css(e.scrollbarXRail,"display",""),r.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);

/*panelmenu*/
var delay_tab=300,delay_show_mm=300,delay_hide_mm=300;function mm_destroy(e,n){n.remember_state||(e.find(".mmpanel").toggleClass("mmsubopened mmcurrent mmopened",!1).addClass("mmhidden"),e.find("#mm0").addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden")),e.toggleClass("mmhide mmitemopen",!1).hide(),$("body").removeClass("mm-open")}function get_mm_parent(){return'<div class="mmpanels"></div>'}function get_mm_block(){return'<div class="mmpanel mmhidden">'}function getButtonBack(e,n){return'<li><a href="#" data-target="#" class="mm-prev-level">'+(e=null==e?n:e)+"</a></li>"}function getButtonClose(e,n){return'<li class="mm-close-parent"><a href="#close" data-target="#close" class="mm-close">'+(e=null==e?n:e)+"</a></li>"}function getFullscreenBg(){return'<div class="mm-fullscreen-bg"></div>'}function getExternalContainer(){return'<li id="entrypoint-objects"></li>'}$("body").append(getFullscreenBg()),$.fn.initMM=function(){var e={$mobilemenu:$(".panel-menu"),external_con:"externav",mm_close_button:"Close",mm_back_button:"Back",mm_breakpoint:768,mm_enable_breakpoint:!1,mm_mobile_button:!1,remember_state:!1,second_button:!1,init:function(n,m){if(!this.$mobilemenu.length)return console.log('You not have <nav class="panel-menu mobile-main-menu">menu</nav>. See Documentation'),!1;null!=arguments[1]&&this.parse_arguments(m),this.$mobilemenu.parse_mm(e),this.$mobilemenu.init_mm(e),this.mm_enable_breakpoint&&this.$mobilemenu.check_resolution_mm(e),n.mm_handler(e)},parse_arguments:function(e){var n=this;Object(e).hasOwnProperty("menu_class")&&(n.$mobilemenu=$("."+e.menu_class)),$.each(e,function(e,m){switch(e){case"right":m&&n.$mobilemenu.addClass("mm-right");break;case"close_button_name":n.mm_close_button=m;break;case"back_button_name":n.mm_back_button=m;break;case"width":n.$mobilemenu.css("width",m);break;case"breakpoint":n.mm_breakpoint=m;break;case"enable_breakpoint":n.mm_enable_breakpoint=m;break;case"mobile_button":n.mm_mobile_button=m;break;case"remember_state":n.remember_state=m;break;case"second_button":n.second_button=m;break;case"external_container":m&&n.$mobilemenu.addClass(n.external_con)}})},show_button_in_mobile:function(e){var n=this;n.mm_mobile_button&&(window.innerWidth>n.mm_breakpoint?e.hide():e.show(),$(window).resize(function(){window.innerWidth>n.mm_breakpoint?e.hide():e.show()}))}};e.init($(this),arguments[0]),e.show_button_in_mobile($(this))},$.fn.check_resolution_mm=function(e){var n=$(this);$(window).resize(function(){if(!$("body").hasClass("mm-open")||!n.hasClass("mmitemopen"))return!1;window.innerWidth>e.mm_breakpoint&&n.closemm(e)})},$.fn.mm_handler=function(e){$(this).click(function(n){n.preventDefault(),e.$mobilemenu.openmm()}),0!=e.second_button&&$(e.second_button).click(function(n){n.preventDefault(),e.$mobilemenu.openmm()})},$.fn.parse_mm=function(e){var n,m=$(this).clone(),t=$(get_mm_parent()),a=!1,s=0,i=!1,o=!1;$(this).empty(),m.find("a").each(function(){i=$(this),(n=i.parent().find("ul").first()).length&&(s++,n.prepend("<li></li>").find("li").first().append(i.clone().addClass("mm-original-link")),i.attr("href","#mm"+s).attr("data-target","#mm"+s).addClass("mm-next-level"))}),m.find("ul").each(function(n){o=!1,a=$(get_mm_block()).attr("id","mm"+n).append($(this)),0==n?(a.addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden"),o=getButtonClose(m.find(".mm-closebtn").html(),e.mm_close_button),a.find("ul").first().append(getExternalContainer()),a.find("ul").first().prepend(o)):(o=getButtonBack(m.find(".mm-backbtn").html(),e.mm_back_button),a.find("ul").first().prepend(o)),t.append(a)}),$(this).append(t)},$.fn.init_mm=function(e){var n=$(this);n.find("a").each(function(){$(this).click(function(m){var t=$(this),a=!1,s="";return t.hasClass("mm-next-level")?(m.preventDefault(),s=t.attr("href"),(a=n.find(".mmcurrent")).addClass("mmsubopened").removeClass("mmcurrent"),n.find(s).removeClass("mmhidden"),setTimeout(function(){n.find(s).scrollTop(0).addClass("mmcurrent").addClass("mmopened")},0),setTimeout(function(){a.addClass("mmhidden")},delay_tab),!1):t.hasClass("mm-prev-level")?(m.preventDefault(),s=t.attr("href"),(a=n.find(".mmcurrent")).removeClass("mmcurrent").removeClass("mmopened"),n.find(".mmsubopened").last().removeClass("mmhidden").scrollTop(0).removeClass("mmsubopened").addClass("mmcurrent"),setTimeout(function(){a.addClass("mmhidden")},delay_tab),!1):t.hasClass("mm-close")?(n.closemm(e),!1):void 0})}),$(".mm-fullscreen-bg").click(function(m){m.preventDefault(),n.closemm(e)})},$.fn.openmm=function(){var e=$(this);e.show(),setTimeout(function(){$("body").addClass("mm-open"),e.addClass("mmitemopen"),$(".mm-fullscreen-bg").fadeIn(delay_show_mm)},0)},$.fn.closemm=function(e){var n=$(this);n.addClass("mmhide"),$(".mm-fullscreen-bg").fadeOut(delay_hide_mm),setTimeout(function(){mm_destroy(n,e)},delay_hide_mm)};

/*api.jquery.js*/
function floatToString(t,r){var e=t.toFixed(r).toString();return e.match(/^\.\d+/)?"0"+e:e}function attributeToString(t){return"string"!=typeof t&&"undefined"===(t+="")&&(t=""),jQuery.trim(t)}"undefined"==typeof window.Cartx&&(window.Cartx={}),Cartx.money_format="${{amount}}",Cartx.onError=function(t,r){var e=eval("("+t.responseText+")");e.message?alert(e.message+"("+e.status+"): "+e.description):alert("Error : "+Cartx.fullMessagesFromErrors(e).join("; ")+".")},Cartx.fullMessagesFromErrors=function(t){var r=[];return jQuery.each(t,function(t,e){jQuery.each(e,function(e,a){r.push(t+" "+a)})}),r},Cartx.onCartUpdate=function(t){alert("There are now "+t.item_count+" items in the cart.")},Cartx.onCartShippingRatesUpdate=function(t,r){var e="";r.zip&&(e+=r.zip+", "),r.province&&(e+=r.province+", "),e+=r.country,alert("There are "+t.length+" shipping rates available for "+e+", starting at "+Cartx.formatMoney(t[0].price)+".")},Cartx.onItemAdded=function(t){alert(t.title+" was added to your shopping cart.")},Cartx.onProduct=function(t){alert("Received everything we ever wanted to know about "+t.title)},Cartx.formatMoney=function(t,r){function e(t,r){return void 0===t?r:t}function a(t,r,a,o){if(r=e(r,2),a=e(a,","),o=e(o,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(r);var n=t.split(".");return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+a)+(n[1]?o+n[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var o="",n=/\{\{\s*(\w+)\s*\}\}/,i=r||this.money_format;switch(i.match(n)[1]){case"amount":o=a(t,2);break;case"amount_no_decimals":o=a(t,0);break;case"amount_with_comma_separator":o=a(t,2,".",",");break;case"amount_with_space_separator":o=a(t,2," ",",");break;case"amount_with_period_and_space_separator":o=a(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":o=a(t,0,".",",");break;case"amount_no_decimals_with_space_separator":o=a(t,0,".","");break;case"amount_with_space_separator":o=a(t,2,",","");break;case"amount_with_apostrophe_separator":o=a(t,2,"'",".")}return i.replace(n,o)},Cartx.resizeImage=function(t,r){try{if("original"==r)return t;var e=t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return e[1]+"_"+r+"."+e[2]}catch(r){return t}},Cartx.addItem=
function(data,e)
{
	if(direct_checkout)
	{
    if(!window.bagifyStatus) {
      $('.btn-addtocart').html(wait_text).addClass('disable');
    }
	    
	}
	var r=r||1,
	a={type:"POST",
	url:"/cart/add.js",
	data:data,
	dataType:"json",success:function(t)
	{
    if(window.bagifyStatus) {
      $('#drawer-demo').drawer('toggle');
    }else{
      if(direct_checkout)
      {
       $(".custome_checkout").trigger("click");
      }
      else
      {
      "function"==typeof e?e(t):Cartx.onItemAdded(t)
      }
    }
  	
	},
	error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(a)},Cartx.addItemFromForm=function(t,r){var e={type:"POST",url:"/cart/add.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):Cartx.onItemAdded(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(e)},Cartx.getCart=function(t){jQuery.getJSON("/cart.js?normal-prices=1",function(r){"function"==typeof t?t(r):Cartx.onCartUpdate(r)})},Cartx.pollForCartShippingRatesForDestination=function(t,r,e){e=e||Cartx.onError;var a=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(e,o,n){200===n.status?"function"==typeof r?r(e.shipping_rates,t):Cartx.onCartShippingRatesUpdate(e.shipping_rates,t):setTimeout(a,500)},error:e})};return a},Cartx.getCartShippingRatesForDestination=function(t,r,e){e=e||Cartx.onError;var a={type:"POST",url:"/cart/prepare_shipping_rates",data:Cartx.param({shipping_address:t}),success:Cartx.pollForCartShippingRatesForDestination(t,r,e),error:e};jQuery.ajax(a)},Cartx.getProduct=function(t,r){jQuery.getJSON("/products/"+t+".js",function(t){"function"==typeof r?r(t):Cartx.onProduct(t)})},Cartx.changeItem=function(t,r,e){var a={type:"POST",url:"/cart/change.js",data:"quantity="+r+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):Cartx.onCartUpdate(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(a)},Cartx.removeItem=function(t,r){var e={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+t,dataType:"json",success:function(t){"function"==typeof r?r(t):Cartx.onCartUpdate(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(e)},Cartx.clear=function(t){var r={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(r){"function"==typeof t?t(r):Cartx.onCartUpdate(r)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(r)},Cartx.updateCartFromForm=function(t,r){var e={type:"POST",url:"/cart/update.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):Cartx.onCartUpdate(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(e)},Cartx.updateCartAttributes=function(t,r){var e="";jQuery.isArray(t)?jQuery.each(t,function(t,r){var a=attributeToString(r.key);""!==a&&(e+="attributes["+a+"]="+attributeToString(r.value)+"&")}):"object"==typeof t&&null!==t&&jQuery.each(t,function(t,r){e+="attributes["+attributeToString(t)+"]="+attributeToString(r)+"&"});var a={type:"POST",url:"/cart/update.js",data:e,dataType:"json",success:function(t){"function"==typeof r?r(t):Cartx.onCartUpdate(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(a)},Cartx.updateCartNote=function(t,r){var e={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(t),dataType:"json",success:function(t){"function"==typeof r?r(t):Cartx.onCartUpdate(t)},error:function(t,r){Cartx.onError(t,r)}};jQuery.ajax(e)},jQuery.fn.jquery>="1.4"?Cartx.param=jQuery.param:(Cartx.param=function(t){var r=[],e=function(t,e){e=jQuery.isFunction(e)?e():e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(jQuery.isArray(t)||t.jquery)jQuery.each(t,function(){e(this.name,this.value)});else for(var a in t)Cartx.buildParams(a,t[a],e);return r.join("&").replace(/%20/g,"+")},Cartx.buildParams=function(t,r,e){jQuery.isArray(r)&&r.length?jQuery.each(r,function(r,a){rbracket.test(t)?e(t,a):Cartx.buildParams(t+"["+("object"==typeof a||jQuery.isArray(a)?r:"")+"]",a,e)}):null!=r&&"object"==typeof r?Cartx.isEmptyObject(r)?e(t,""):jQuery.each(r,function(r,a){Cartx.buildParams(t+"["+r+"]",a,e)}):e(t,r)},Cartx.isEmptyObject=function(t){for(var r in t)return!1;return!0});

/*! Lazy Load 2.0.0-beta.2 - MIT license - Copyright 2007-2017 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e(t)):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=r(s,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}const s={src:"data-src",srcset:"data-srcset",selector:".lazyload"},r=function(){let t={},e=!1,s=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],s++);for(;s<o;s++)!function(s){for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e&&"[object Object]"===Object.prototype.toString.call(s[o])?t[o]=r(!0,t[o],s[o]):t[o]=s[o])}(arguments[s]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,s={root:null,rootMargin:"0px",threshold:[0]};this.observer=new IntersectionObserver(function(t){t.forEach(function(t){if(t.intersectionRatio>0){e.observer.unobserve(t.target);let s=t.target.getAttribute(e.settings.src),r=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(s&&(t.target.src=s),r&&(t.target.srcset=r)):t.target.style.backgroundImage="url("+s+")"}})},s),this.images.forEach(function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;this.images.forEach(function(e){let s=e.getAttribute(t.settings.src),r=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(s&&(e.src=s),r&&(e.srcset=r)):e.style.backgroundImage="url("+s+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,s){return new e(t,s)},t.jQuery){const s=t.jQuery;s.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(s.makeArray(this),t),this}}return e});

$.getJSON('/cart.js?normal-prices=1', function (cart) {
 var price_str = getItemFormatedPrice(cart.total_price.toFixed(2));
    var _parent = $('header').find('.tt-cart');
    _parent.find('.tt-badge-cart').text(cart.item_count);
    cart.item_count == 0 ? _parent.find('.tt-badge-cart').addClass('hide') : _parent.find('.tt-badge-cart').removeClass('hide');
    _parent.find('.tt-cart-total-price').empty().html(price_str);
  });

/* swatches.js */
function SwatchesConstructor(t, e) {

    console.log(e);
    var n = this;
    (n.show_unavailable_options = e.show_unavailable_options || !1),
        (n.productIsValid = n.show_unavailable_options || t.available),
        (n.product_json = t),
        (n.options_name = ""),
        (n.options = ""),
        (n.viewDesign = window.viewButtons),
        (n.designOption1 = e.designOption1 || "getButtonHtml"),
        (n.designOption2 = e.designOption2 || "getButtonHtml"),
        (n.designOption3 = e.designOption3 || "getButtonHtml"),
        (n.contentParent = e.contentParent),
        (n.enableHistoryState = Boolean(e.enableHistoryState) || !1),
        (n.callback = e.callback || !1),
        (n.texture_obj = e.externalImagesObject || {}),
        (n.colors_obj = e.externalColors || {}),
        (n.color_with_border = e.colorWithBorder || {}),
        (n.product_handle = e.productHandle || {}),
        (n.selectedByDefault = void 0 === e.selectedByDefault || e.selectedByDefault),
        n.productIsValid && "Title" != t.options && $(n.contentParent).length ? n.initSwatches() : n.callExternalVariantHandler(n.callback, t.variants[0], n.getJsonObject());
}
function getAllOptions(t, e) {
    for (var n = !0, a = {}, i = 0; i < t.length; i++) {
        n = !!e || Boolean(t[i].available);
        var o = t[i].option1,
            l = t[i].option2,
            r = t[i].option3;
        null != o && n && (null != l ? ((a[o] = a[o] || {}), null != r ? ((a[o][l] = a[o][l] || {}), (a[o][l][r] = !e || Boolean(t[i].available))) : (a[o][l] = !e || Boolean(t[i].available))) : (a[o] = !e || Boolean(t[i].available)));
    }
    var c = !1;
    return (
        $.each(a, function (t, e) {
            if (((o = t), "object" == typeof a[t] && "Default Title" != t)) {
                var n = a[t];
                $.each(n, function (t, e) {
                    (l = t),
                        (c = !1),
                        "object" == typeof n[t] &&
                            ($.each(n[t], function (t, e) {
                                c || (c = c || e);
                            }),
                            (a[o][l + "_|av"] = c));
                }),
                    (c = !1),
                    $.each(n, function (t, e) {
                        var a = e;
                        (hasOwnProperty.call(n, t + "_|av") || t.indexOf("_|av") > -1) && (a = t.indexOf("_|av") > -1 && n[t]), c || (c = c || a);
                    }),
                    (a[o + "_|av"] = c);
            }
        }),
        a
    );
}
function addCommas(e) {
    (x = (e += "").split(".")), (x1 = x[0]), null != typeof x[1] && "" != x[1] && null != x[1] ? (1 == x[1].length ? (x2 = x.length >= 1 ? "," + x[1] + "0" : "") : (x2 = x.length >= 1 ? "," + x[1] : "")) : (x2 = x.length >= 1 ? ",00" : "");
    for (var t = /(\d+)(\d{3})/; t.test(x1); ) x1 = x1.replace(t, "$1.$2");
    return x1 + x2;
}
function getCurrentOptionsArray(t) {
    var e = t.option1 + "%%" + t.option2 + "%%" + t.option3;
    return e.replace(/\%\%null/g, "").split("%%");
}
function getCurrentVariantById(t, e, n) {
    for (var a = 0; a < t.length; a++) {
        var i = !!n || t[a].available;
        if (e) {
            if (t[a].id == e) return t[a];
        } else if (i) return t[a];
    }
    return t[0];
}
function getCurrentVariantByTitle(t, e, n) 
{

	if (!e) return t[0];
    for (var a = !0, i = 0; i < t.length; i++) {
        var o = "%%" + t[i].title,
            l = !!n || t[i].available;
        if (o.indexOf("%%" + e) > -1 && l && !a) return t[i];
        if (t[i].title === e && l && a) return t[i];
        i == t.length - 1 && e.indexOf("/") > -1 && ((e = e.split("/")).pop(), (e = e.length > 1 ? e.join("/") : e), (i = 0), (a = !1));
    }
    return t[0];

    // if (!e) return t[0];
    // e = e.replace(" / ", "/");
    // e = e.replace("/ ", "/");
    // e = e.replace(" /", "/");
    // for (var a = !0, i = 0; i < t.length; i++) 
    // {
    //     var o = "%%" + t[i].title,
    //         l = !!n || t[i].available;
    //     if (o.indexOf("%%" + e) > -1 && l && !a) return t[i];
    //     if (t[i].title === e && l && a) return t[i];

    //     i == t.length - 1 && e.indexOf("/") > -1 && ((e = e.split("/")).pop(), (e = e.length > 1 ? e.join("/") : e), (i = 0), (a = !1));
    // }
    // return t[0];
}
function getVariantIdUrl() {
    var t = location.search;
    return t.indexOf("variant=") > -1 && ((t = t.match(/variant=\d+/g)), (t = parseInt(t[0].match(/\d+/g)))), t;
}
function isEmpty(t) {
    return 0 === Object.keys(t).length;
}
function viewButtons(t, e) {
    var n = ".tt-wrapper",
        a = (e = e || {}).selectedByDefault,
        i = void 0 === e.avaibility || e.avaibility;
    switch (t) {
        case "getFunctionClickHandler":
            return "buttonHandler";
        case "getGroupElementName":
            return n;
        case "getGroupHtml":
            return '<div class="' + n.replace(/([\.#])/g, "") + '"><div class="tt-title-options">' + e.title + ': <span class="current_option_name"></span></div><ul class="tt-options-swatch options-large">' + e.html + "</ul></div>";
        case "getButtonHtml":
            var o = e.value.trim(),
                l = o.toLowerCase(),
                r = e.c_border.indexOf(o) > -1 ? " border" : "",
                c = e.producthandle;
            (l = "," + l + ":"), (l = e.colors.indexOf(l) > -1 && e.colors.split(l).pop().split(",").shift().trim());
            var s = o in e.texture ? ' data-optionimage="true" style="background-image:url(\'' + e.texture[o] + '\')"' : "";
            c + " " + o in e.texture && (s = ' data-optionimage="true" style="background-image:url(\"' + e.texture[c + " " + o] + '\")"'), "" == s && l && (s = ' style="background:' + l + ';"');
            var u = s.indexOf("data-optionimage") > -1 ? ' class="options-color-image"' : "",
                d = i ? "" : "<span" + u + "></span>",
                p = o.indexOf('"') > -1 ? "'" + o + "'" : '"' + o + '"';
            i = i ? "" : ' data-availability="false"';
            var f = "" != s ? "<li" + i + ">" + d + '<a href="#" class="options-color' + r + '" data-value="' + o + '" data-tooltip="' + o + '" ' + s + "></a></li>" : "<li" + i + '><a href="#" data-value=' + p + ">" + o + "</a></li>";
            return e.value == e.selected && a ? f.replace(/<li/, '<li class="active"') : f;
        case "getSelectGroupHtml":
            return (
                '<div class="' +
                n.replace(/([\.#])/g, "") +
                '"><div class="tt-title-options">' +
                e.title +
                ': <span class="current_option_name"></span></div><div class="form-default"><div class="form-group"><select class="form-control">' +
                e.html +
                "</select></div></div></div>"
            );
        case "getSelectButtonHtml":
            return (f = "<option>" + e.value.trim() + "</option>"), e.value == e.selected && a ? f.replace(/<option/, "<option selected") : f;
        case "showSelectedParametres":
            return (
                0 != $(n).find(".active").length &&
                ($(n)
                    .find(".active")
                    .each(function () {
                        var t = $(this).find("[data-value]").data("value");
                        $(this).closest(n).find(".current_option_name").text(t);
                    }),
                !1)
            );
    }
}
(SwatchesConstructor.prototype.destroy = function () {
    var t = $(this.contentParent);
    t.find("a").unbind(), t.find("select").unbind(), t.empty();
}),
    (SwatchesConstructor.prototype.initSwatches = function (t) {
        var e,
            n = this,
            a = [];
        (t = t), (e = n.getJsonObject().options);
        for (var i = 0; i < e.length; i++) a[i] = e[i];
        (n.options_name = a), (n.options = getAllOptions(n.getJsonObject().variants, n.show_unavailable_options)), t || (t = n.enableHistoryState && getVariantIdUrl()), n.createSwatches(t);
    }),
    (SwatchesConstructor.prototype.createSwatches = function (t) {
        var e = this,
            n = e.viewDesign;
        if (isEmpty(e.options)) return !1;
        var a = getCurrentVariantById(e.getJsonObject().variants, t, e.show_unavailable_options),
            i = getCurrentOptionsArray(a);
        e.createOptionsView(e.contentParent, e.options, e.options_name, i), e[n("getFunctionClickHandler")](), e.callExternalVariantHandler(e.callback, a, e.getJsonObject()), (e.selectedByDefault = !0);
    }),
    (SwatchesConstructor.prototype.buttonHandler = function () {
        var t = this,
            e = t.viewDesign,
            n = $(t.contentParent),
            a = e("getGroupElementName"),
            i = n.find(a);
        function o(e) 
        {
            if ("a" === e[0].localName) 
            {
                if (e.hasClass("active")) return !1;
                0 == n.find(".active").length &&
                    i.each(function () 
                    {
                        $(this).find("ul").find("li").first().addClass("active");
                    }),
                    i.find("a").unbind(),
                    e.closest(a).find(".active").removeClass("active"),
                    e.parent().addClass("active");
            } else e.unbind("focusin");
            var o = "";
            i.each(function () 
            {
                $(this).find(".active").length ? (o += $(this).find(".active").find("[data-value]").data("value") + "/") : (o += $(this).find("select option:selected").text() + "/");
            }),
            t.endOfTheClickHandler(o);
        }
        i.find("a").on("touchstart click", function (t) {
            t.preventDefault(), o($(this));
        }),
            i.find("select").change(function () {
                o($(this));
            }),
            t.selectedByDefault ||
                i.find("select").focusin(function (t) {
                    o($(this));
                });
    }),
    (SwatchesConstructor.prototype.endOfTheClickHandler = function (t) {
        var e = this;
        //t = t.substring(0, t.length - 3);
        t = t.slice(0,-1);
        var n = getCurrentVariantByTitle(e.getJsonObject().variants, t, e.show_unavailable_options);
        e.enableHistoryState && history.pushState(null, null, location.pathname + "?variant=" + n.id), e.createSwatches(n.id), $(e.contentParent).closest(".tt-product-single-info").find(".input_variant").val(n.id);
    }),
    (SwatchesConstructor.prototype.createOptionsView = function (t, e, n, a) {
        var i = this,
            o = i.viewDesign,
            l = $(t).empty(),
            r = i.texture_obj,
            c = i.colors_obj,
            s = i.color_with_border,
            u = "",
            d = "",
            p = "",
            f = [i.designOption1, i.designOption2, i.designOption3],
            v = i.product_handle,
            h = i.selectedByDefault,
            g = !1;
        $.each(e, function (t, i) {
            if (t == a[0] && "object" == typeof e[t] && "Default Title" != t && -1 == t.indexOf("_|av")) {
                var l = e[t];
                $.each(l, function (t, e) {
                    t == a[1] &&
                        "object" == typeof l[t] &&
                        -1 == t.indexOf("_|av") &&
                        $.each(l[t], function (t, e) {
                            p += o(f[2], { avaibility: e, value: t, selected: a[2], title: n[2], texture: r, colors: c, c_border: s, producthandle: v, selectedByDefault: h });
                        }),
                        -1 == t.indexOf("_|av") &&
                            ((g = "object" == typeof l[t] ? l[t + "_|av"] : e), (d += o(f[1], { avaibility: g, value: t, selected: a[1], title: n[1], texture: r, colors: c, c_border: s, producthandle: v, selectedByDefault: h })));
                });
            }
            "Default Title" != t &&
                -1 == t.indexOf("_|av") &&
                ((g = "object" == typeof e[t] ? e[t + "_|av"] : i), (u += o(f[0], { avaibility: g, value: t, selected: a[0], title: n[0], texture: r, colors: c, c_border: s, producthandle: v, selectedByDefault: h })));
        });
        for (var b = [n[0], n[1], n[2]], y = [u, d, p], _ = 0; _ < y.length; _++) "" != y[_] && l.append(o(f[_].indexOf("getSelect") > -1 ? "getSelectGroupHtml" : "getGroupHtml", { title: b[_], html: y[_] }));
        o("showSelectedParametres");
    }),
    (SwatchesConstructor.prototype.getJsonObject = function () {
        return this.product_json;
    }),
    (SwatchesConstructor.prototype.callExternalVariantHandler = function (t, e, n) {
        t && "function" == typeof t && t(e, n);
    });


/* swatches_and_quickview */
var textforbutton = '';
var global_quantity;
var global_quantity_qw = false;
var _custom_loader = $('.custom-loader');
var modal_qv_parent = $('#ModalquickView');
var modal_qv_open = false;
var modal_qv_content = modal_qv_parent.find('.modal-content');
if(modal_qv_parent.length) {
  modal_qv_parent.on('show.bs.modal', function(e) {
    /* modal */
    modal_qv_open = true;
    _custom_loader.show();
    modal_qv_content.hide();//hide content
    var relatedTarget = $(e.relatedTarget).filter(':first');

    global_quantity_qw = global_quantity;
    global_quantity = {};
    var qa = relatedTarget.attr('data-quantity').split(';');
    if(qa.length > 0){
      for(var i = 0; i < qa.length; i++){
        if(qa[i] === '') break;
        var _qa = qa[i].split('-');
        global_quantity[_qa[0]] = _qa[1];
      }
    }

    var attr = relatedTarget.attr('data-value');
    var optionimages = relatedTarget.attr('data-optionimages');
    
    var small_description = relatedTarget.closest('.product-parent').find('.description').html();
    var fn = window['configureQuickView'];
    typeof(fn) === "function" && fn(attr, small_description, optionimages);
  }).on('hidden.bs.modal', function () {
    global_quantity = global_quantity_qw;
    modal_qv_open = false;
    var fn = window['destroyQuickView'];
    typeof(fn) === "function" && fn();
  });
}

var quick_view_loader = {
  btn: false,
  wait: function(_btn){
    if(!modal_qv_open) return false;
    this.btn = _btn;
    _btn.html(wait_text);
  },
  error: function(){
  	if(!modal_qv_open) return false;
    this.btn.addClass('quickview-error').html(errorhtml_text);
    this.default_text('quickview-error');
  },
  added: function(){
    if(!modal_qv_open) return false;
    this.btn.addClass('quickview-added').html(addedhtml_text);
    this.default_text('quickview-added');
  },
  default_text: function(value){
    setTimeout(function(){quick_view_loader.btn.removeClass(value).html(textforbutton)}, 1000);
  }
}

var quickview_swatches = false;
function configureQuickView(product_url, small_description, optionimages){
  var handle = product_url.split('/').pop();
  Cartx.getProduct(handle, qvLoadSuccess);

  /* hide preloader when ajax error */
  function qvLoadSuccess(json_data){
    var swatchesdesign1 = $('.tt-quickview-swatches-container-js').length && $('.tt-quickview-swatches-container-js').data('swatches-design1');
    var swatchesdesign2 = $('.tt-quickview-swatches-container-js').length && $('.tt-quickview-swatches-container-js').data('swatches-design2');
    var swatchesdesign3 = $('.tt-quickview-swatches-container-js').length && $('.tt-quickview-swatches-container-js').data('swatches-design3');
    var cur_opt = optionimages != null ? JSON.parse(optionimages) : '';
    var full_opt = cur_opt != '' ? $.extend( texture_obj, cur_opt ) : texture_obj;
    var product_handle = json_data.handle;
    var show_unavailable_options = $('.show_unavailable_variants').length > 0;

    quickview_swatches = new SwatchesConstructor(json_data, {contentParent: '.tt-quickview-swatches-container-js', enableHistoryState: false, callback: quickViewVariant, externalImagesObject: full_opt, externalColors: colors_value, colorWithBorder: color_with_border, productHandle:product_handle, designOption1:swatchesdesign1, designOption2:swatchesdesign2, designOption3:swatchesdesign3, show_unavailable_options: show_unavailable_options });
    json_data = null;
    /* modal */
    _custom_loader.hide();
    modal_qv_content.fadeIn();//show content
  }
  function quickViewVariant(variant, product){
    var _ = modal_qv_parent;
    var _parent_general_info = _.find('.tt-product-single-info');
    var _swatch = _.find('.tt-quickview-swatches-container-js');
    swatchVariantHandler(_parent_general_info, variant);
    swatchVariantButtonHandler(_parent_general_info, variant);
    addToCartHandler.initFormAddToCartButton(variant.id, _parent_general_info, _swatch);
    
    _.find('.input_variant').attr('value', variant.id);
    _.find('.tt-title').html(product.title);
    _.find('.viewfullinfo') && _.find('.viewfullinfo').attr('href', product_url);

    _.find('.qv_vendor') && _.find('.qv_vendor').html(product.vendor);
    var qv_type = _.find('.qv_type');
    if(qv_type.length){
      product.type == '' ? qv_type.parent().hide() : qv_type.html(product.type).parent().show();
    }
    
    var _img = _.find('.product-main-image');
    var img_src = variant.featured_image ? variant.featured_image.src : product.featured_image;
    if(_img.children().length) _img.children().first().attr('src', img_src)
    else $('<img src="'+img_src+'" alt="Quick View Image">').appendTo(_img);
    
    var description = _.find('.description').empty();
    description.length && description.html(small_description);

    if($(".spr-badge").length > 0 && _.find('.rating').children().length == 0) {
      _.find('.rating').append("<span class=\"shopify-product-reviews-badge\" data-id=\""+product.id+"\"></span>");
      $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
    }
  }
}
function destroyQuickView(){
  quickview_swatches && quickview_swatches.destroy();
  quickview_swatches = false;
  var _ = modal_qv_parent;
  _.find('.product-main-image').empty();
  _.find('.description').empty();
  _.find('.swatches-container').empty();  
  _.find('.title').empty();
  _.find('.rating').empty();  
}


function swatchVariantHandler(_parent, variant) {
  var _ = _parent;
  var _price = _.find('.tt-price');
  var _info = _.find('.tt-add-info');
  var _sku = _info.length && _info.find('.sku-js');
  var _avaibility = _info.length && _info.find('.availability');
  var _input = _.find('.tt-input-counter').find('input');
  var installmentsPrice = "#Installment-Price";
  
  var _barcode = _.find('.barcode');

  if( typeof  themeString !== 'undefined' && themeString.shopCurrency !== 'BRL'){
  	var price_str = CartX.Currency.formatMoney(variant.price, themeString.moneyFormat);
  	var price_comare_str = CartX.Currency.formatMoney(variant.compare_at_price, themeString.moneyFormat);
  }else{
  	var price_str = 'R$ '+addCommas(variant.price/ 100);
  	var price_comare_str = 'R$ '+addCommas(variant.compare_at_price/ 100);
  }

  if(typeof g_product_installments != 'undefined' && g_product_installments > 1) {
	$(document).find('#Installment-Price').show();
		var installment_array = JSON.parse(g_installments_fees);
		var installments_price = parseFloat((variant.price / 100) * (1 + installment_array[g_product_installments] / 100)).toFixed(2);

		installments_price = addCommas(parseFloat(installments_price / g_product_installments).toFixed(2));
		installments_price = g_product_installments+' '+theme.installment_string+' '+ installments_price;
		$('#Installment-Price').html(installments_price);
	} else {
		$(document).find('#Installment-Price').hide();
	}
  // if ((console.log(addCommas(variant.price / 100)), _price.find('>span:first').html("R$ " + addCommas(variant.price / 100)), "undefined" != typeof g_product_installments && g_product_installments > 1)) {
  //   $(document).find(installmentsPrice).show();
  //   var i = JSON.parse(g_installments_fees),
  //       a = parseFloat((variant.price / 100) * (1 + i[g_product_installments] / 100)).toFixed(2);
  //   (a = addCommas(parseFloat(a / g_product_installments).toFixed(2))), (a = g_product_installments + " " + theme.installment_string + " " + a), $(installmentsPrice).html(a);
  // } else $(document).find(this.selectors.installmentsPrice).hide();

  if(variant.price < variant.compare_at_price){
    _price.find('>span:first').addClass('sale-price').html(price_str);
    _price.find('>span:last').removeClass('hide').html(price_comare_str);
  }
  else {
    _price.find('>span:first').removeClass('sale-price').html(price_str);
    _price.find('>span:last').addClass('hide');
  }
  
  if(_sku.length) {
    _sku.each(function(){
      $(this).children().last().html(variant.sku);
    })
    variant.sku == '' ? _sku.addClass('hide') : _sku.removeClass('hide');
  }
  
  if(_barcode.length) {
    _barcode.html(variant.barcode);
    variant.barcode === null || variant.barcode == '' ? _barcode.parent().addClass('hide') : _barcode.parent().removeClass('hide');
  }
  
  // Inventory Quantity
  var inventory_management = variant.inventory_management;
  var inventory_quantity = String(global_quantity[variant.id]);
  if(Boolean(variant.available)){
  	$(document).find('.cartx-btn-buy-it-now').prop('disabled',false).removeClass('disabled');
    var iq = Number(inventory_quantity.split('continue').pop());
console.log(inventory_management);
    if(inventory_management == null || inventory_management == undefined){
      iq = 9999;
      if(_avaibility.length){
        _avaibility.find('.sold_out, .stock_quantity, .in_stock, .continue_out').addClass('hide');
        _avaibility.find('.in_stock').removeClass('hide');
      }
    }
    
    if(inventory_management == 'cartx'){
      if(iq <= 0){
        iq = 9999;
        if(_avaibility.length){
          _avaibility.find('.continue_out, .many_in_stock, .stock_quantity, .in_stock').addClass('hide');
          _avaibility.find('.sold_out').removeClass('hide');
        }
      } else {
        if(_avaibility.length){
          // _avaibility.find('.stock_quantity').removeClass('hide').html(iq);
          _avaibility.find('.in_stock').removeClass('hide');
          _avaibility.find('.sold_out, .many_in_stock, .continue_out').addClass('hide');
        }
      }
    }
      
    _input.val(1).attr('size', iq);
  }
  else{
    if(_avaibility.length){
      _avaibility.find('.continue_out, .stock_quantity, .in_stock, .many_in_stock').addClass('hide');
      _avaibility.find('.sold_out').removeClass('hide');
      $(document).find('.cartx-btn-buy-it-now').prop('disabled',true).addClass('disabled');
    }
  }  
  
  $('body').trigger('refreshCurrency');
}
function swatchVariantButtonHandler(_parent, variant) {
  var _btnaddtocart = _parent.find('.btn-addtocart');
  if(_btnaddtocart.length == 0) return false

  if(Boolean(variant.available)) {
    var inventory_management = variant.inventory_management;
    var inventory_quantity = String(global_quantity[variant.id]);
    var iq = Number(inventory_quantity.split('continue').pop());

    textforbutton = addtocart_text;
    
    if(inventory_management == null){
      _btnaddtocart.html(addtocart_text).removeClass('disable');
    }
    else{
      if(iq <= 0){
        _btnaddtocart.html(preorderhtml_text).addClass('disable');
        textforbutton = preorderhtml_text;
      }
      else{
        _btnaddtocart.html(addtocart_text).removeClass('disable');
      }
    }
    if(variant.prevent_out_of_stock_selling == 0){
		_btnaddtocart.html(addtocart_text).removeClass('disable');
	}
    
    _parent.find('.checkbox-group').length && _parent.find('.checkbox-group').removeClass('hidesoldout');
    _parent.find('.buyinoneclick').length && _parent.find('.buyinoneclick').removeClass('hidesoldout');
    if(variant.compare_at_price > variant.price){
    	var save_price = (((variant.compare_at_price - variant.price) / variant.compare_at_price) * 100).toFixed() + "% OFF";
    	$('.save_discount_pro').html(save_price);
    	$('.save_discount_pro').show();
    	//current_variant.compare_at_price  | minus: current_variant.price  | times: 100.0 | divided_by: current_variant.compare_at_price
    }else{
    	$('.save_discount_pro').hide();
    }
  }
  else {
    if(variant.prevent_out_of_stock_selling == 0){
		_btnaddtocart.html(addtocart_text).removeClass('disable');
		_parent.find('.checkbox-group').length && _parent.find('.checkbox-group').removeClass('hidesoldout');
    	_parent.find('.buyinoneclick').length && _parent.find('.buyinoneclick').removeClass('hidesoldout');

  	}else{
	    _btnaddtocart.html(unavailable_text).addClass('disable');
	    
	    _parent.find('.checkbox-group').length && _parent.find('.checkbox-group').addClass('hidesoldout');
	    _parent.find('.buyinoneclick').length && _parent.find('.buyinoneclick').addClass('hidesoldout');
    }
    if(variant.compare_at_price > variant.price){
    	var save_price = (((variant.compare_at_price - variant.price) / variant.compare_at_price) * 100).toFixed() + "% OFF";
    	$('.save_discount_pro').html(save_price);
    	$('.save_discount_pro').show();
    	//current_variant.compare_at_price  | minus: current_variant.price  | times: 100.0 | divided_by: current_variant.compare_at_price
    }else{
    	$('.save_discount_pro').hide();
    }
  }
}


/* cart api */
var addToCartHandler = {
  initItemAddToCartButton: function(){
    var _btns = $('.addtocart-item-js');
    $('body').on('click', '.addtocart-item-js', function(e){
      e.preventDefault();
      var data = $(this).closest('form').serialize();
      var variant_id = $(this).closest('form').find('input').val();
      Cartx.addItem(data);
    })
  },
  initFormAddToCartButton: function(variant_id, _parent, _swatch){
    var _btn = _parent.find('.addtocart-js');
    if(_btn.length == 0) return false;

    _btn.unbind().on('click', function(e){

      e.preventDefault();
      if(!isCustomOptionValid(this)) {
        return;             
      }
      var form_id = _btn.closest("form").attr("id");
      var variant_id = $(this).closest('form').find('.input_variant').val();
      var quantity = $(this).closest('form').find('input[name="quantity"]').val();
      var data = $(this).closest('form').serialize();
      
	if(_btn.hasClass('terms_option')){
		if($('#prpage-cart-term-conditions-checkbox').is(":not(:checked)")){
			$(".ajaxified-cart-checkbox").fadeIn("fast").delay(4e3).fadeOut("slow");
			return false;
		}else{
			Cartx.addItem(data);
		}
    }else{
      Cartx.addItem(data);
    }

      typeof quick_view_loader !== 'undefined' && quick_view_loader.wait(_btn);
    })
  },
  addItem: function(line_item) {
    relatedCartProducts.handle = line_item.handle;
    
    var _parent = $('header').find('.tt-cart');
    var _empty_cart = $('.tt-cart-empty');
    var _ul = _parent.find('.tt-cart-list');

    var price_str = getItemFormatedPrice(line_item.price);
    var _ = $('.item-html-js').children().clone();
    _.find('.tt-title').html(line_item.product_title);
    _.find('.tt-price').html(price_str);
    _.find('.qty').html(line_item.quantity);
    _.find('>a:first-child').attr('href', line_item.url);

    var _img = _.find('.tt-item-img').empty();
    $('<img src='+line_item.image+' alt="Cart Image">').appendTo(_img);
    
    var _details = _.find('.details');
    line_item.variant_title == null ? _details.parent().remove() : _details.html(line_item.variant_title.replace(/ \//g, ', '));

    var delete_btn = _.find('.header_delete_cartitem_js');
    var delete_url = String(delete_btn.attr('href')).replace('id=0', 'id='+line_item.id);
    delete_btn.attr('href', delete_url);
    
    _ul.find('[href="'+delete_url+'"]').length && _ul.find('[href="'+delete_url+'"]').closest('.tt-item').remove();
    $(_).prependTo(_ul);
    !_empty_cart.hasClass('hide') && _empty_cart.addClass('hide');
    
    var tt_cb = _parent.find('.tt-cart-box');
    tt_cb.hasClass('hide') && tt_cb.removeClass('hide');
    
    var _ul_children = _ul.children();
    _ul_children.length && _ul_children.hide();
    _ul_children.each(function(index){
      if(index >= 3) return false;
      $(this).show();
    });
    _ul_children.length > 3 && $('.header-cart-more-message-js').show();
  },
  updateGeneralInfo: function(cart){
    var price_str = getItemFormatedPrice(cart.total_price.toFixed(2));
    var _parent = $('header').find('.tt-cart');
    _parent.find('.tt-badge-cart').text(cart.item_count);
    cart.item_count == 0 ? _parent.find('.tt-badge-cart').addClass('hide') : _parent.find('.tt-badge-cart').removeClass('hide');
    _parent.find('.tt-cart-total-price').empty().html(price_str);
    $(".ajaxified-cart-feedback").fadeIn("fast").delay(4e3).fadeOut("slow");
  }
}

var addedModal = {
  $modal: $('#modalAddToCartProduct'),
  initSingleItem: function(line_item){
    relatedCartProducts.handle = line_item.handle;
console.log(line_item);
    var price_str = getItemFormatedPrice(line_item.price*line_item.quantity);
    var _ = this.$modal;
    _.find('.tt-title-js').html(line_item.product_title);
    var _details = _.find('.description');
    
    var str = '';
    for(var i=0; i<3; i++){
      var opt = line_item.variant_options[i];
      if(opt != null) str += opt + ', ';
    }
	str = str.substring(0, str.length-2);
    
    line_item.variant_title == null ? _details.hide() : _details.show().html(str);
    _.find('.tt-qty span').first().empty().text(line_item.quantity);
    _.find('.total-product-js .tt-price').first().empty().html(price_str);

    var _img = _.find('.tt-img').empty();
    line_item.image !== null && $('<img src="'+line_item.image+'" alt="Added Product">').appendTo(_img);
  },
  initGeneralInfo: function(cart){
    var price_str = getItemFormatedPrice(cart.total_price.toFixed(2));
    var _ = this.$modal;
    _.find('.modal-total-quantity').text(cart.item_count);
    _.find('.full-total-js').html(price_str);
  },
  showModal: function(){
    if(typeof modal_qv_open !== 'undefined') {
      if(modal_qv_open) return false;
    }

    var $this = this.$modal;
    
    $this.modal('show');
    
    var _ = this.$modal;
    _.find('.close-modal-added-js').click(function(e){
      e.preventDefault();
      $(this).unbind();
      $this.modal('hide');
    })

    $this.on('shown.bs.modal', function(){
      $(this).unbind('shown.bs.modal');
      relatedCartProducts.init();
    });
    $this.on('hidden.bs.modal', function(){
      $(this).unbind('hidden.bs.modal');
      relatedCartProducts.destroy();
    });
  }
}
var relatedCartProducts = {
  handle: false,
  init: function(){
    if(!$('.tt-modal-slider-js').length || !$('.tt-modal-slider').length || !related_collection_item) return false;

    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      type: "GET",
      url: '/collections/'+related_collection_item+'?view=ajax_related',
      success: function(data) {
        if(data == '') return false;
        $('.tt-modal-slider').removeClass('hide');
        $('.tt-modal-slider-js').append(data);
        $('.tt-modal-slider-js').find('.'+relatedCartProducts.handle).remove();
        relatedCartProducts.initSlider();
        data = null;
      },
      error: function(XMLHttpRequest, textStatus) {
      },
      dataType: "html"
    })
  },
  initSlider: function(){
    $('.tt-modal-slider-js').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  },
  destroy: function(){
    if(!$('.tt-modal-slider-js').length || !$('.tt-modal-slider').length || !related_collection_item) return false;
    $('.tt-modal-slider-js').slick('unslick').empty();
    $('.tt-modal-slider').addClass('hide');
    relatedCartProducts.handle = false;
    related_collection_item = false;
  }
}
var related_collection_item = false;
$('body').on('click', '.addtocart-item-js, .addtocart-js', function(e){
  var attr = $(this).attr('data-relatedcollection');
  if (typeof attr !== typeof undefined && attr !== false) {
    related_collection_item = attr;
  }
})

function getItemFormatedPrice(value){
  //return Cartx.formatMoney(value, money_format);
  return 'R$ '+addCommas(value);
}

/* override functions api.jquery.js */
Cartx.onItemAdded = function(line_item) {
  Cartx.getCart();
  addToCartHandler.addItem(line_item);
  addedModal.initSingleItem(line_item);
};

Cartx.onCartUpdate = function(cart) {
  addToCartHandler.updateGeneralInfo(cart);
  addedModal.initGeneralInfo(cart);
  addedModal.showModal();
  typeof quick_view_loader !== 'undefined' && quick_view_loader.added();
  $('body').trigger('refreshCurrency');
};
Cartx.onError = function(XMLHttpRequest, textStatus) {
  if(typeof modal_qv_open !== 'undefined') {
    if(modal_qv_open) {
      quick_view_loader.error();
      return false;
    }
  }

  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    var str = data.description;
  } else {
   	var str = 'Error : ' + Cartx.fullMessagesFromErrors(data).join('; ') + '.';
  }
  $('#modalAddToCartError .error_message').text(str);
  $('#modalAddToCartError').modal("toggle");
}

var removeFromCartHandler = function(){
  $('body').on('click', '.header_delete_cartitem_js', function(e){
    e.preventDefault();
    $(this).closest('.tt-item').addClass('removeAfterCompleteAjax');
    var variant_id = getIdFromUrl($(this).attr("href"));
    Cartx.removeItem(variant_id, onCartUpdateCustom);
  });
}
function onCartUpdateCustom(cart){
  if(cart.item_count == 0){
    $('.tt-cart-empty').removeClass('hide');
    $('.tt-cart-box').addClass('hide');
  }
  
  _ul_children = $('header').find('.tt-cart').find('.tt-cart-list').children();
  
  _ul_children.each(function(index){
    if(index == 4) return false;
    $(this).show();
  });

  _ul_children.length <= 4 && $('.header-cart-more-message-js').hide();

  $('.removeAfterCompleteAjax').remove();
  addToCartHandler.updateGeneralInfo(cart);
  $('body').trigger('refreshCurrency');
}
function getIdFromUrl(url){
  url = url.match(/id=\d+/g);
  return url[0].match(/\d+/g);
}
addToCartHandler.initItemAddToCartButton();
removeFromCartHandler();

$(document).ready(function(){
	var _parent = $('.tt-product-single-info');
    var _swatch = _parent.find('.tt-swatches-container-js');
    var variant_id = _parent.find('.input_variant').val();
    // console.log(_parent.find('.btn-addtocart').hasClass('.addtocart-js'));
    // if( _parent.find('.btn-addtocart').hasClass('.addtocart-js') ){
		addToCartHandler.initFormAddToCartButton(variant_id, _parent, _swatch);
    // }

    $('.addtocart-btn').click(function(e){
    	e.preventDefault();
      if(!isCustomOptionValid(this)) {
        return;
      }
    	if($(this).hasClass('.addtocart-js')) {
    		//alert('here');
    		return;
    	} else 
    	{
    		$('#modalAddToCartProduct').remove();
		    var form_id = $(this).closest("form").attr("id");
		    var data = $(this).closest('form').serialize();
		    var variant_id = $(this).closest('form').find('.input_variant').val();
		    var quantity = $(this).closest('form').find('input[name="quantity"]').val();
		    if(direct_checkout)
			{
			    $(this).html(wait_text).addClass('disable');
			}

		    Cartx.addItem(data);

		    setTimeout(function(){
          if(window.bagifyStatus) {
            $('#drawer-demo').drawer('toggle');
          }else{

            if(direct_checkout){
              $(".custome_checkout").trigger("click");
            }
            else{
              window.location.href = '/cart/';
            }
            
          }
		    	
		    	
		    }, 1000);
    	}
    });
});
function updateFullCart() {
    $.ajax({
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        type: "POST",
        url: "/cart/get",
        data: [],
        contentType: "application/json; charset=utf-8",
        traditional: !0,
        success: function (e) {
            console.log(e),
                void 0 !== e.discountCategory && "automatic" == e.discountCategory
                    ? ($("#grandtotal td").html("R$ " + addCommas(parseFloat(e.cart_total).toFixed(2))),
                      $("#discount td").html("R$ " + addCommas(parseFloat(e.discount).toFixed(2))),
                      $("#grandtotal, #discount").slideDown("slow"))
                    : void 0 !== e.discountCategory && "manual" == e.discountCategory
                    ? ($("#grandtotal td").html("R$ " + addCommas(parseFloat(e.cart_total).toFixed(2))),
                      $("##discount td").html("R$ " + addCommas(parseFloat(e.discount).toFixed(2))),
                      $("#grandtotal, #discount").slideDown("slow"))
                    : $("#grandtotal, #discount").slideDown("hide");
                if(e.total_custom_option_price && e.total_custom_option_price != 0)  {
                  $("#custom-option-price td").html("R$ " + addCommas(parseFloat(e.total_custom_option_price).toFixed(2)));
                  $("#custom-option-price").slideDown("slow");
                } else {
                  $("#custom-option-price").hide();
                }
        },
        error: function () {},
    });
}
$(window).on("load", function () {
    updateFullCart();
});

$(document).on('change',"#pmcart-term-conditions-checkbox", function() {
	if ($(this).is(':checked')) {
	  $(document).find('[href="/checkout"]').removeClass('disabled').prop('disabled', false);
	}else{
	   $(document).find('[href="/checkout"]').addClass('disabled').prop('disabled', true);;
	}
});

function isCustomOptionValid(el)
{
  let customOptions = $(el).closest('form').find('input[name="custom_options"]').val();
  if(customOptions) {
    customOptions = JSON.parse(customOptions);
    let customOptionErrors = _.filter(customOptions, (customOption) => customOption.error.status);
    if(customOptionErrors.length > 0) {
      $('.custom-option-errors').remove();
      $('#custom-options-element').append(
        '<small class="text-danger custom-option-errors">'+_.head(customOptionErrors).error.message+'</small>'
      );
      return false;
    }
  }
  return true;
}