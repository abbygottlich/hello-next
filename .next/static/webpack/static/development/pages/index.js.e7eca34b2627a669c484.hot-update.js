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
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHa0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxhQUNmLHFCQUlhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuLy8gaW1wb3J0IHBhZ2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG4vLyBpbXBvcnQgY29udGVudExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcblxuLy8gTWV0aG9kICMxIC0gdXNpbmcgcHJvcHMuY2hpbGRyZW5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApXG4vLyB9O1xuXG4vLyBNZXRob2QgIzIgLSBMYXlvdXQgYXMgYSBIaWdoZXIgT3JkZXIgQ29tcG9uZW50XG4vLyBjb25zdCBQYWdlID0gKCkgPT4gPHA+SGVsbG8gTmV4dC5qczwvcD47XG4vLyBleHBvcnQgZGVmYXVsdCBwYWdlTGF5b3V0KFBhZ2UpO1xuXG4vLyBNZXRob2QgIzMgLSBQYWdlIGNvbnRlbnQgYXMgYSBwcm9wXG4vLyBjb25zdCBpbmRleFBhZ2VDb250ZW50ID0gPHA+SGVsbG8gTmV4dC5qczwvcD47XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICAgIHJldHVybiA8TGF5b3V0IGNvbnRlbnQ9e2luZGV4UGFnZUNvbnRlbnR9IC8+XG4vLyB9XG5cblxuXG5cbi8vIGJsb2cgcG9zdCBjb2RlXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgICA8bGk+XG4vLyAgICAgICAgIHsvKiB0aGlzIGlzIGJhc2ljYWxseSBzYXlpbmcsIGxpbmsgdG8gdGhlIFtpZF0gZmlsZSwgYnV0IG1ha2UgdGhlIHBhdGggdGhlIHNhbWUgYXMgdGhlIHByb3AgaWQgYmVsb3cgKi99XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCJwL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XG4vLyAgICAgICAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxuLy8gICAgICAgICA8L0xpbms+XG4vLyAgICAgPC9saT5cbi8vICk7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4vLyAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiAvPlxuLy8gICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vIH1cblxuXG5cblxuLy8gYmF0bWFuIHNob3dzIGNvZGVcbi8vIGdldHRpbmcgcHJvcHMgZnJvbSBJbmRleC5nZXRJbml0aWFsUHJvcHMgYmVsb3dcbi8vIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7LyogbWFwcGluZyBvdmVyIHRoZSByZXR1cm5lZCBzaG93cyBvYmplY3QgZnJvbSBmdW5jdGlvbiBiZWxvdyAqL31cbi8vICAgICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY3R1YWxseSByb3V0aW5nIHlvdSB0byBbaWRdLmpzIHBhZ2UsIGJ1dCBkaXNwbGF5aW5nIHRoZSBzaG93IGlkIGluIHRoZSB1cmwgKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Nob3cuaWR9YH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vICk7XG5cbi8vIC8vIHdoYXRldmVyIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB3aWxsIGJlIHRoZSBwcm9wcyBmb3IgdGhlIEluZGV4IGZ1bmN0aW9uIGFib3ZlXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICAgIC8vIHRoaXMgY29uc29sZSBsb2cgb25seSBzaG93cyB1cCBpbiB0aGUgc2VydmVyIGNvbnNvbGUgYmVjYXVzZSB3aGVuIHRoZSBzaXRlIGlzIGZpcnN0IHJlbmRlcmVkLCBpdCByZW5kZXJzIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuLy8gICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICAvLyB3aGF0IHlvdSBhcmUgbWFwcGluZyBvdmVyIGluIHRoZSBhYm92ZSBmdW5jdGlvbiAocHJvcHMuc2hvd3MpXG4vLyAgICAgICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuLy8gICAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cblxuLy8gc3R5bGluZyBjb21wb25lbnRzXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cbiAgICBdO1xuICB9XG5cbiAgY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH0iXX0= */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
};

function Blog() {
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-357181001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-357181001",
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
    id: "357181001",
    __self: this
  }, "h1.jsx-357181001,a.jsx-357181001{font-family:'Arial';}ul.jsx-357181001{padding:0;}li.jsx-357181001{list-style:none;margin:5px 0;}a.jsx-357181001{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-357181001:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IsQUFJaUMsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvYWJieS5nb3R0bGljaC9Eb2N1bWVudHMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbi8vIGltcG9ydCBwYWdlTGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuLy8gaW1wb3J0IGNvbnRlbnRMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG5cbi8vIE1ldGhvZCAjMSAtIHVzaW5nIHByb3BzLmNoaWxkcmVuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKVxuLy8gfTtcblxuLy8gTWV0aG9kICMyIC0gTGF5b3V0IGFzIGEgSGlnaGVyIE9yZGVyIENvbXBvbmVudFxuLy8gY29uc3QgUGFnZSA9ICgpID0+IDxwPkhlbGxvIE5leHQuanM8L3A+O1xuLy8gZXhwb3J0IGRlZmF1bHQgcGFnZUxheW91dChQYWdlKTtcblxuLy8gTWV0aG9kICMzIC0gUGFnZSBjb250ZW50IGFzIGEgcHJvcFxuLy8gY29uc3QgaW5kZXhQYWdlQ29udGVudCA9IDxwPkhlbGxvIE5leHQuanM8L3A+O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vICAgICByZXR1cm4gPExheW91dCBjb250ZW50PXtpbmRleFBhZ2VDb250ZW50fSAvPlxuLy8gfVxuXG5cblxuXG4vLyBibG9nIHBvc3QgY29kZVxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgICAgPGxpPlxuLy8gICAgICAgICB7LyogdGhpcyBpcyBiYXNpY2FsbHkgc2F5aW5nLCBsaW5rIHRvIHRoZSBbaWRdIGZpbGUsIGJ1dCBtYWtlIHRoZSBwYXRoIHRoZSBzYW1lIGFzIHRoZSBwcm9wIGlkIGJlbG93ICovfVxuLy8gICAgICAgICA8TGluayBocmVmPVwicC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyApO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyB9XG5cblxuXG5cbi8vIGJhdG1hbiBzaG93cyBjb2RlXG4vLyBnZXR0aW5nIHByb3BzIGZyb20gSW5kZXguZ2V0SW5pdGlhbFByb3BzIGJlbG93XG4vLyBjb25zdCBJbmRleCA9IHByb3BzID0+IChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgey8qIG1hcHBpbmcgb3ZlciB0aGUgcmV0dXJuZWQgc2hvd3Mgb2JqZWN0IGZyb20gZnVuY3Rpb24gYmVsb3cgKi99XG4vLyAgICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogYWN0dWFsbHkgcm91dGluZyB5b3UgdG8gW2lkXS5qcyBwYWdlLCBidXQgZGlzcGxheWluZyB0aGUgc2hvdyBpZCBpbiB0aGUgdXJsICovfVxuLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgPC9MYXlvdXQ+XG4vLyApO1xuXG4vLyAvLyB3aGF0ZXZlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMgd2lsbCBiZSB0aGUgcHJvcHMgZm9yIHRoZSBJbmRleCBmdW5jdGlvbiBhYm92ZVxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgICAvLyB0aGlzIGNvbnNvbGUgbG9nIG9ubHkgc2hvd3MgdXAgaW4gdGhlIHNlcnZlciBjb25zb2xlIGJlY2F1c2Ugd2hlbiB0aGUgc2l0ZSBpcyBmaXJzdCByZW5kZXJlZCwgaXQgcmVuZGVycyBvbiB0aGUgc2VydmVyIHNpZGVcbi8vICAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgLy8gd2hhdCB5b3UgYXJlIG1hcHBpbmcgb3ZlciBpbiB0aGUgYWJvdmUgZnVuY3Rpb24gKHByb3BzLnNob3dzKVxuLy8gICAgICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG5cbi8vIHN0eWxpbmcgY29tcG9uZW50c1xuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9Il19 */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.e7eca34b2627a669c484.hot-update.js.map