"use strict";(self.webpackChunk_05_movies=self.webpackChunk_05_movies||[]).push([[687],{4274:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(885),a=n(2791),u=n(501),c=n(6871),i=n(2055),s=n(184),o=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],p=(0,a.useState)([]),f=(0,r.Z)(p,2),l=f[0],h=f[1],d=(0,u.lr)(""),v=(0,r.Z)(d,2),g=v[0],m=v[1],y=g.get("query")||"",w=(0,c.TH)();(0,a.useEffect)((function(){window.localStorage.getItem("query")&&(0,i.UX)(y).then(h)}),[y]);var x=function(){window.localStorage.removeItem("query")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Movie Page"}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(n),(0,i.UX)(y).then(h),window.localStorage.setItem("query",JSON.stringify(y))},children:[(0,s.jsx)("button",{type:"submit",children:"Search"}),(0,s.jsx)("input",{value:n,onChange:function(e){o(e.target.value),n?(x(),m({query:e.target.value})):m("")},type:"text",autoComplete:"off",placeholder:"search..."})]}),(0,s.jsx)("ul",{children:l&&l.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(u.rU,{to:"".concat(e.id),state:{from:w},children:[(0,s.jsx)("h2",{children:e.title}),(0,s.jsx)("p",{children:e.vote_average})]})},e.id)}))})]})}},2055:function(e,t,n){n.d(t,{CU:function(){return d},D6:function(){return g},UX:function(){return p},et:function(){return l},ew:function(){return s}});var r=n(8214),a=n(5861),u=n(4569),c=n.n(u);c().defaults.baseURL="https://api.themoviedb.org/3";var i="60778458bdbdfa7e14ca7e73fe4a1fef";function s(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/week?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=movie-page.1aba8757.chunk.js.map