(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},304:function(t,e,n){var o=n(24),s="["+n(303)+"]",i=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),r=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},305:function(t,e,n){var o=n(5),s=n(94);t.exports=function(t,e,n){var i,a;return s&&"function"==typeof(i=e.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&s(t,a),t}},306:function(t,e,n){"use strict";var o=n(6),s=n(4),i=n(93),a=n(11),r=n(7),c=n(18),l=n(305),u=n(44),f=n(2),p=n(29),d=n(66).f,h=n(25).f,v=n(9).f,m=n(304).trim,b=s.Number,C=b.prototype,N="Number"==c(p(C)),g=function(t){var e,n,o,s,i,a,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=m(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+l}for(a=(i=l.slice(2)).length,r=0;r<a;r++)if((c=i.charCodeAt(r))<48||c>s)return NaN;return parseInt(i,o)}return+l};if(i("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(N?f((function(){C.valueOf.call(n)})):"Number"!=c(n))?l(new b(g(e)),n,y):g(e)},_=o?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;_.length>E;E++)r(b,I=_[E])&&!r(y,I)&&v(y,I,h(b,I));y.prototype=C,C.constructor=y,a(s,"Number",y)}},308:function(t,e,n){var o=n(1),s=n(4),i=n(97),a=[].slice,r=function(t){return function(e,n){var o=arguments.length>2,s=o?a.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,s)}:e,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:r(s.setTimeout),setInterval:r(s.setInterval)})},349:function(t,e,n){},402:function(t,e,n){"use strict";var o=n(349);n.n(o).a},404:function(t,e,n){"use strict";n.r(e);n(166),n(306),n(308);var o=n(62);n(180);var s,i={name:"GTOAST",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},computed:{toastClasses:function(){return t={},e="position-".concat(this.position),n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},mounted:function(){this.updateStyle(),this.doAutoClose()},methods:{updateStyle:function(){var t=this;this.$nextTick((function(){t.$refs.line.style.height="".concat(t.$refs.toast.getBoundingClientRect().height,"px")}))},doAutoClose:function(){var t=this;this.autoClose&&setTimeout((function(){t.close()}),1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onCloseClick:function(){this.close(),console.log(Object(o.a)(this.closeButton.callback)),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},a=(n(402),n(43)),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-toast",class:t.toastClasses},[n("div",{ref:"toast",staticClass:"toast"},[n("div",{staticClass:"message"},[t.enableHtml?n("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),n("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?n("span",{staticClass:"close",on:{click:t.onCloseClick}},[t._v(t._s(t.closeButton.text))]):t._e()])])}),[],!1,null,"282dd36d",null).exports;e.default={install:function(t,e){t.prototype.$toast=function(e,n){s&&s.close(),s=function(t){var e=t.Vue,n=t.message,o=t.propsData,s=t.onClose,i=new(e.extend(r))({propsData:o});return i.$slots.default=[n],i.$mount(),i.$on("close",s),document.body.appendChild(i.$el),i}({Vue:t,message:e,propsData:n,onClose:function(){s=null}})}}}}}]);