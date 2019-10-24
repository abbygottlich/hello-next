webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../comps/MyLayout */ "./comps/MyLayout.js");
var _jsxFileName = "/Users/abby.gottlich/Documents/hello-next/pages/p/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import fetch from 'isomorphic-unfetch';
// blog post code
// export default function Post() {
//     const router = useRouter();
//     return (
//         <Layout>
//             {/* displaying whatever the url was set to as the h1 */}
//             <h1>{router.query.id}</h1>
//             <p>This is the blog post content.</p>
//         </Layout>
//     );
// }
// batman shows code
// const Post = props => (
//     <Layout>
//         <h1>{props.show.name}</h1>
//         {/* the .replace stuff is replcaing the inline <p></p> tags with an empty string */}
//         <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//         <img src={props.show.image.medium} />
//     </Layout>
// );
// Post.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();
//     // because this whole file is technically "nested" inside of a Link tag (in index.js),
//     // this console log displays in the browser console only because we navigated to the post via the client side
//     // when you click on a <Link> component, the page transition takes place in the browser without making a request to the server
//     console.log(`Fetched show: ${show.name}`);
//     // console.log(show);
//     return { show };
// };
// export default Post;
// styling components

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3242420245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, router.query.id), __jsx("div", {
    className: "jsx-3242420245" + " " + "markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n                ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3242420245",
    __self: this
  }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL3AvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRStCLEFBR3lDLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixDQWQzQix3QkFlQSxNQVhhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FiYnkuZ290dGxpY2gvRG9jdW1lbnRzL2hlbGxvLW5leHQvcGFnZXMvcC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcHMvTXlMYXlvdXQnO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbi8vIGJsb2cgcG9zdCBjb2RlXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xuLy8gICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIHsvKiBkaXNwbGF5aW5nIHdoYXRldmVyIHRoZSB1cmwgd2FzIHNldCB0byBhcyB0aGUgaDEgKi99XG4vLyAgICAgICAgICAgICA8aDE+e3JvdXRlci5xdWVyeS5pZH08L2gxPlxuLy8gICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgYmxvZyBwb3N0IGNvbnRlbnQuPC9wPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gfVxuXG5cblxuXG4vLyBiYXRtYW4gc2hvd3MgY29kZVxuLy8gY29uc3QgUG9zdCA9IHByb3BzID0+IChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuLy8gICAgICAgICB7LyogdGhlIC5yZXBsYWNlIHN0dWZmIGlzIHJlcGxjYWluZyB0aGUgaW5saW5lIDxwPjwvcD4gdGFncyB3aXRoIGFuIGVtcHR5IHN0cmluZyAqL31cbi8vICAgICAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP1twYl0+L2csICcnKX08L3A+XG4vLyAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz5cbi8vICAgICA8L0xheW91dD5cbi8vICk7XG5cbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuLy8gICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbi8vICAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICAgIC8vIGJlY2F1c2UgdGhpcyB3aG9sZSBmaWxlIGlzIHRlY2huaWNhbGx5IFwibmVzdGVkXCIgaW5zaWRlIG9mIGEgTGluayB0YWcgKGluIGluZGV4LmpzKSxcbi8vICAgICAvLyB0aGlzIGNvbnNvbGUgbG9nIGRpc3BsYXlzIGluIHRoZSBicm93c2VyIGNvbnNvbGUgb25seSBiZWNhdXNlIHdlIG5hdmlnYXRlZCB0byB0aGUgcG9zdCB2aWEgdGhlIGNsaWVudCBzaWRlXG4vLyAgICAgLy8gd2hlbiB5b3UgY2xpY2sgb24gYSA8TGluaz4gY29tcG9uZW50LCB0aGUgcGFnZSB0cmFuc2l0aW9uIHRha2VzIHBsYWNlIGluIHRoZSBicm93c2VyIHdpdGhvdXQgbWFraW5nIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyXG4vLyAgICAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coc2hvdyk7XG5cbi8vICAgICByZXR1cm4geyBzaG93IH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5cblxuLy8gc3R5bGluZyBjb21wb25lbnRzXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT57cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICAgICAgc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgLm1hcmtkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07Il19 */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/p/[id].js */"));
});

/***/ })

})
//# sourceMappingURL=[id].js.230fb695b3e27d012d09.hot-update.js.map