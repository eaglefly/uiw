(window.webpackJsonpuiw=window.webpackJsonpuiw||[]).push([[60],{1108:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n(126),o=n(113),c=n(178);function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,n,r,o,c,u){try{var a=t[c](u),i=a.value}catch(f){return void n(f)}a.done?e(i):Promise.resolve(i).then(r,o)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var u=arguments.length,a=new Array(u),i=0;i<u;i++)a[i]=arguments[i];return(n=f(this,(t=s(e)).call.apply(t,[this].concat(a)))).path="packages/core/src/alert/README.md",n.dependencies={Alert:r.a,Button:o.a,ButtonGroup:c.a},n}var u,p,b;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),u=e,(p=[{key:"renderPage",value:function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(379).then(n.bind(null,1059));case 2:return e=t.sent,t.abrupt("return",e.default||e);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){a(c,r,o,u,i,"next",t)}function i(t){a(c,r,o,u,i,"throw",t)}u(void 0)}))});return function(){return e.apply(this,arguments)}}()}])&&i(u.prototype,p),b&&i(u,b),e}(n(103).a)},135:function(t,e,n){},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(15),o=n(18),c=n(23),u=n(11),a=n(19),i=n(12),f=n(13),s=n(14),l=n(2),p=n.n(l),b=n(10),y=n.n(b),v=(n(135),function(t){function e(){return Object(u.a)(this,e),Object(i.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this.props,e=t.prefixCls,n=t.vertical,u=t.children,a=t.className,i=Object(c.a)(t,["prefixCls","vertical","children","className"]),f=y()(e,a,Object(o.a)({},"".concat(e,"-vertical"),n));return p.a.createElement("div",Object(r.a)({className:f},i),u)}}]),e}(p.a.Component));v.defaultProps={prefixCls:"w-btn-group",vertical:!1}}}]);