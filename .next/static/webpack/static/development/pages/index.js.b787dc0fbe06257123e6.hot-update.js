webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/MyLayout */ "./comps/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/abby.gottlich/Documents/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import fetch from 'isomorphic-unfetch';
// import pageLayout from "../comps/MyLayout";
// import contentLayout from "../comps/MyLayout";
// Method #1 - using props.children
// export default function Index() {
//     return (
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     )
// };
// Method #2 - Layout as a Higher Order Component
// const Page = () => <p>Hello Next.js</p>;
// export default pageLayout(Page);
// Method #3 - Page content as a prop
// const indexPageContent = <p>Hello Next.js</p>;
// export default function Index() {
//     return <Layout content={indexPageContent} />
// }
// blog post code
// const PostLink = props => (
//     <li>
//         {/* this is basically saying, link to the [id] file, but make the path the same as the prop id below */}
//         <Link href="p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     );
// }
// batman shows code
// getting props from Index.getInitialProps below
// const Index = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {/* mapping over the returned shows object from function below */}
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     {/* actually routing you to [id].js page, but displaying the show id in the url */}
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );
// // whatever this function returns will be the props for the Index function above
// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     // this console log only shows up in the server console because when the site is first rendered, it renders on the server side
//     console.log(`Show data fetched. Count: ${data.length}`);
//     // console.log(data);
//     return {
//         // what you are mapping over in the above function (props.shows)
//         shows: data.map(entry => entry.show)
//     };
// };
// export default Index;
// styling components

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learning Next.js is Awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy Apps with ZEIT'
  }];
}

function Blog() {
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-361259950",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-361259950",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-361259950",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-361259950",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, post.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "361259950",
    __self: this
  }, "h1.jsx-361259950,a.jsx-361259950{font-family:'Arial;                }                ul {                    padding: 0;                }                li {                    list-style: none;                    margin: 5px 0;                }                a {                    text-decoration: none;                    color: blue;                }                a:hover {                    opacity: 0.6;                };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Id0IsQUF3QmEsOFlBQUMiLCJmaWxlIjoiL1VzZXJzL2FiYnkuZ290dGxpY2gvRG9jdW1lbnRzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG4vLyBpbXBvcnQgcGFnZUxheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbi8vIGltcG9ydCBjb250ZW50TGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuXG4vLyBNZXRob2QgIzEgLSB1c2luZyBwcm9wcy5jaGlsZHJlblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgIClcbi8vIH07XG5cbi8vIE1ldGhvZCAjMiAtIExheW91dCBhcyBhIEhpZ2hlciBPcmRlciBDb21wb25lbnRcbi8vIGNvbnN0IFBhZ2UgPSAoKSA9PiA8cD5IZWxsbyBOZXh0LmpzPC9wPjtcbi8vIGV4cG9ydCBkZWZhdWx0IHBhZ2VMYXlvdXQoUGFnZSk7XG5cbi8vIE1ldGhvZCAjMyAtIFBhZ2UgY29udGVudCBhcyBhIHByb3Bcbi8vIGNvbnN0IGluZGV4UGFnZUNvbnRlbnQgPSA8cD5IZWxsbyBOZXh0LmpzPC9wPjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyAgICAgcmV0dXJuIDxMYXlvdXQgY29udGVudD17aW5kZXhQYWdlQ29udGVudH0gLz5cbi8vIH1cblxuXG5cblxuLy8gYmxvZyBwb3N0IGNvZGVcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgey8qIHRoaXMgaXMgYmFzaWNhbGx5IHNheWluZywgbGluayB0byB0aGUgW2lkXSBmaWxlLCBidXQgbWFrZSB0aGUgcGF0aCB0aGUgc2FtZSBhcyB0aGUgcHJvcCBpZCBiZWxvdyAqL31cbi8vICAgICAgICAgPExpbmsgaHJlZj1cInAvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntwcm9wcy5pZH08L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gfVxuXG5cblxuXG4vLyBiYXRtYW4gc2hvd3MgY29kZVxuLy8gZ2V0dGluZyBwcm9wcyBmcm9tIEluZGV4LmdldEluaXRpYWxQcm9wcyBiZWxvd1xuLy8gY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHsvKiBtYXBwaW5nIG92ZXIgdGhlIHJldHVybmVkIHNob3dzIG9iamVjdCBmcm9tIGZ1bmN0aW9uIGJlbG93ICovfVxuLy8gICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbi8vICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjdHVhbGx5IHJvdXRpbmcgeW91IHRvIFtpZF0uanMgcGFnZSwgYnV0IGRpc3BsYXlpbmcgdGhlIHNob3cgaWQgaW4gdGhlIHVybCAqL31cbi8vICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gLy8gd2hhdGV2ZXIgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHdpbGwgYmUgdGhlIHByb3BzIGZvciB0aGUgSW5kZXggZnVuY3Rpb24gYWJvdmVcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyAgICAgLy8gdGhpcyBjb25zb2xlIGxvZyBvbmx5IHNob3dzIHVwIGluIHRoZSBzZXJ2ZXIgY29uc29sZSBiZWNhdXNlIHdoZW4gdGhlIHNpdGUgaXMgZmlyc3QgcmVuZGVyZWQsIGl0IHJlbmRlcnMgb24gdGhlIHNlcnZlciBzaWRlXG4vLyAgICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIC8vIHdoYXQgeW91IGFyZSBtYXBwaW5nIG92ZXIgaW4gdGhlIGFib3ZlIGZ1bmN0aW9uIChwcm9wcy5zaG93cylcbi8vICAgICAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuXG4vLyBzdHlsaW5nIGNvbXBvbmVudHNcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuaW5nIE5leHQuanMgaXMgQXdlc29tZScgfSxcbiAgICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBBcHBzIHdpdGggWkVJVCcgfVxuICAgIF07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b787dc0fbe06257123e6.hot-update.js.map