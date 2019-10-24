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
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1341333550",
    __self: this
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHa0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxhQUNmLHFCQUlhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuLy8gaW1wb3J0IHBhZ2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG4vLyBpbXBvcnQgY29udGVudExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcblxuLy8gTWV0aG9kICMxIC0gdXNpbmcgcHJvcHMuY2hpbGRyZW5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApXG4vLyB9O1xuXG4vLyBNZXRob2QgIzIgLSBMYXlvdXQgYXMgYSBIaWdoZXIgT3JkZXIgQ29tcG9uZW50XG4vLyBjb25zdCBQYWdlID0gKCkgPT4gPHA+SGVsbG8gTmV4dC5qczwvcD47XG4vLyBleHBvcnQgZGVmYXVsdCBwYWdlTGF5b3V0KFBhZ2UpO1xuXG4vLyBNZXRob2QgIzMgLSBQYWdlIGNvbnRlbnQgYXMgYSBwcm9wXG4vLyBjb25zdCBpbmRleFBhZ2VDb250ZW50ID0gPHA+SGVsbG8gTmV4dC5qczwvcD47XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICAgIHJldHVybiA8TGF5b3V0IGNvbnRlbnQ9e2luZGV4UGFnZUNvbnRlbnR9IC8+XG4vLyB9XG5cblxuXG5cbi8vIGJsb2cgcG9zdCBjb2RlXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgICA8bGk+XG4vLyAgICAgICAgIHsvKiB0aGlzIGlzIGJhc2ljYWxseSBzYXlpbmcsIGxpbmsgdG8gdGhlIFtpZF0gZmlsZSwgYnV0IG1ha2UgdGhlIHBhdGggdGhlIHNhbWUgYXMgdGhlIHByb3AgaWQgYmVsb3cgKi99XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCJwL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XG4vLyAgICAgICAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxuLy8gICAgICAgICA8L0xpbms+XG4vLyAgICAgPC9saT5cbi8vICk7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4vLyAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vIH1cblxuXG5cblxuLy8gYmF0bWFuIHNob3dzIGNvZGVcbi8vIGdldHRpbmcgcHJvcHMgZnJvbSBJbmRleC5nZXRJbml0aWFsUHJvcHMgYmVsb3dcbi8vIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7LyogbWFwcGluZyBvdmVyIHRoZSByZXR1cm5lZCBzaG93cyBvYmplY3QgZnJvbSBmdW5jdGlvbiBiZWxvdyAqL31cbi8vICAgICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY3R1YWxseSByb3V0aW5nIHlvdSB0byBbaWRdLmpzIHBhZ2UsIGJ1dCBkaXNwbGF5aW5nIHRoZSBzaG93IGlkIGluIHRoZSB1cmwgKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Nob3cuaWR9YH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vICk7XG5cbi8vIC8vIHdoYXRldmVyIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB3aWxsIGJlIHRoZSBwcm9wcyBmb3IgdGhlIEluZGV4IGZ1bmN0aW9uIGFib3ZlXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICAgIC8vIHRoaXMgY29uc29sZSBsb2cgb25seSBzaG93cyB1cCBpbiB0aGUgc2VydmVyIGNvbnNvbGUgYmVjYXVzZSB3aGVuIHRoZSBzaXRlIGlzIGZpcnN0IHJlbmRlcmVkLCBpdCByZW5kZXJzIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuLy8gICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICAvLyB3aGF0IHlvdSBhcmUgbWFwcGluZyBvdmVyIGluIHRoZSBhYm92ZSBmdW5jdGlvbiAocHJvcHMuc2hvd3MpXG4vLyAgICAgICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuLy8gICAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cblxuLy8gc3R5bGluZyBjb21wb25lbnRzXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cbiAgICBdO1xuICB9XG5cbiAgY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9Il19 */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
};

function Blog() {
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2655321838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-2655321838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2655321838",
    __self: this
  }, "h1.jsx-2655321838,a.jsx-2655321838{font-family:'Arial';}ul.jsx-2655321838{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IsQUFJaUMsQUFJVixVQUNaLFVBSkEiLCJmaWxlIjoiL1VzZXJzL2FiYnkuZ290dGxpY2gvRG9jdW1lbnRzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG4vLyBpbXBvcnQgcGFnZUxheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbi8vIGltcG9ydCBjb250ZW50TGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuXG4vLyBNZXRob2QgIzEgLSB1c2luZyBwcm9wcy5jaGlsZHJlblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgIClcbi8vIH07XG5cbi8vIE1ldGhvZCAjMiAtIExheW91dCBhcyBhIEhpZ2hlciBPcmRlciBDb21wb25lbnRcbi8vIGNvbnN0IFBhZ2UgPSAoKSA9PiA8cD5IZWxsbyBOZXh0LmpzPC9wPjtcbi8vIGV4cG9ydCBkZWZhdWx0IHBhZ2VMYXlvdXQoUGFnZSk7XG5cbi8vIE1ldGhvZCAjMyAtIFBhZ2UgY29udGVudCBhcyBhIHByb3Bcbi8vIGNvbnN0IGluZGV4UGFnZUNvbnRlbnQgPSA8cD5IZWxsbyBOZXh0LmpzPC9wPjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyAgICAgcmV0dXJuIDxMYXlvdXQgY29udGVudD17aW5kZXhQYWdlQ29udGVudH0gLz5cbi8vIH1cblxuXG5cblxuLy8gYmxvZyBwb3N0IGNvZGVcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgey8qIHRoaXMgaXMgYmFzaWNhbGx5IHNheWluZywgbGluayB0byB0aGUgW2lkXSBmaWxlLCBidXQgbWFrZSB0aGUgcGF0aCB0aGUgc2FtZSBhcyB0aGUgcHJvcCBpZCBiZWxvdyAqL31cbi8vICAgICAgICAgPExpbmsgaHJlZj1cInAvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntwcm9wcy5pZH08L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gfVxuXG5cblxuXG4vLyBiYXRtYW4gc2hvd3MgY29kZVxuLy8gZ2V0dGluZyBwcm9wcyBmcm9tIEluZGV4LmdldEluaXRpYWxQcm9wcyBiZWxvd1xuLy8gY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHsvKiBtYXBwaW5nIG92ZXIgdGhlIHJldHVybmVkIHNob3dzIG9iamVjdCBmcm9tIGZ1bmN0aW9uIGJlbG93ICovfVxuLy8gICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbi8vICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjdHVhbGx5IHJvdXRpbmcgeW91IHRvIFtpZF0uanMgcGFnZSwgYnV0IGRpc3BsYXlpbmcgdGhlIHNob3cgaWQgaW4gdGhlIHVybCAqL31cbi8vICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gLy8gd2hhdGV2ZXIgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHdpbGwgYmUgdGhlIHByb3BzIGZvciB0aGUgSW5kZXggZnVuY3Rpb24gYWJvdmVcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyAgICAgLy8gdGhpcyBjb25zb2xlIGxvZyBvbmx5IHNob3dzIHVwIGluIHRoZSBzZXJ2ZXIgY29uc29sZSBiZWNhdXNlIHdoZW4gdGhlIHNpdGUgaXMgZmlyc3QgcmVuZGVyZWQsIGl0IHJlbmRlcnMgb24gdGhlIHNlcnZlciBzaWRlXG4vLyAgICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIC8vIHdoYXQgeW91IGFyZSBtYXBwaW5nIG92ZXIgaW4gdGhlIGFib3ZlIGZ1bmN0aW9uIChwcm9wcy5zaG93cylcbi8vICAgICAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuXG4vLyBzdHlsaW5nIGNvbXBvbmVudHNcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxuICAgICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuICAgIF07XG4gIH1cblxuICBjb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH0iXX0= */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.00e51d2010e40708011c.hot-update.js.map