(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),f=n(6273),l=n(2725),c=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,o){if(e&&f.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,b=e.children,g=e.prefetch,C=e.passHref,_=e.replace,m=e.shallow,L=e.scroll,M=e.locale,x=e.onClick,E=e.onMouseEnter,R=e.onTouchStart,j=e.legacyBehavior,O=void 0===j?!0!==Boolean(!1):j,w=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!O||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var k=!1!==g,P=a.default.useContext(c.RouterContext),T=a.default.useContext(i.AppRouterContext);T&&(P=T);var I,S=a.default.useMemo((function(){var e=o(f.resolveHref(P,r,!0),2),t=e[0],n=e[1];return{href:t,as:h?f.resolveHref(P,h):n||t}}),[P,r,h]),U=S.href,Z=S.as,B=a.default.useRef(U),N=a.default.useRef(Z);O&&(I=a.default.Children.only(n));var A=O?I&&"object"===typeof I&&I.ref:t,D=o(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],G=D[2],q=a.default.useCallback((function(e){N.current===Z&&B.current===U||(G(),N.current=Z,B.current=U),H(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[Z,A,U,G,H]);a.default.useEffect((function(){var e=K&&k&&f.isLocalURL(U),t="undefined"!==typeof M?M:P&&P.locale,n=v[U+"%"+Z+(t?"%"+t:"")];e&&!n&&y(P,U,Z,{locale:t})}),[Z,U,K,M,k,P]);var z={ref:q,onClick:function(e){O||"function"!==typeof x||x(e),O&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,l,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&f.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:c,scroll:l}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?a.default.startTransition(d):d()}}(e,P,U,Z,_,m,L,M,Boolean(T),k)},onMouseEnter:function(e){O||"function"!==typeof E||E(e),O&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!k&&T||f.isLocalURL(U)&&y(P,U,Z,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof R||R(e),O&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!k&&T||f.isLocalURL(U)&&y(P,U,Z,{priority:!0})}};if(!O||C||"a"===I.type&&!("href"in I.props)){var F="undefined"!==typeof M?M:P&&P.locale,J=P&&P.isLocaleDomain&&d.getDomainLocale(Z,F,P.locales,P.domainLocales);z.href=J||p.addBasePath(l.addLocale(Z,F,P&&P.defaultLocale))}return O?a.default.cloneElement(I,z):a.default.createElement("a",Object.assign({},w,z),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=o(r.useState(!1),2),s=i[0],d=i[1],p=o(r.useState(null),2),v=p[0],y=p[1];r.useEffect((function(){if(a){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=f.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},l.push(n),f.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),f.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(o)}}}),[v,c,n,t,s]);var h=r.useCallback((function(){d(!1)}),[]);return[y,s,h]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver,f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;var f=o.default.createContext(null);t.TemplateContext=f},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},5815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o,r=n(7294);var u=function(){if(void 0!==o)return o;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),o=e,e},a=r.useLayoutEffect,f="touchstart",l=["mousedown",f],c=function(e){if(e===f)return u()?{passive:!0}:void 0};var i=function(e,t){var n=function(e){var t=r.useRef(e);return a((function(){t.current=e})),t}(t);(0,r.useEffect)((function(){if(t){var o=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return l.forEach((function(e){document.addEventListener(e,o,c(e))})),function(){l.forEach((function(e){document.removeEventListener(e,o,c(e))}))}}}),[!t])}}}]);