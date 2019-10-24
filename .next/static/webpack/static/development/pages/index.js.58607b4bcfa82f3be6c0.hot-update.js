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
    className: "jsx-739057071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-739057071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-739057071",
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
      className: "jsx-739057071",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, post.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "739057071",
    __self: this
  }, "h1.jsx-739057071,a.jsx-739057071{font-family:'Arial';}ul.jsx-739057071{padding:0;}li.jsx-739057071{list-style:none;margin:5px 0;}a.jsx-739057071{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-739057071:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Id0IsQUFJeUMsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJoQixFQWNBLElBVmlCLElBUmpCLFNBU0EscUJBSWUsV0FDZiIsImZpbGUiOiIvVXNlcnMvYWJieS5nb3R0bGljaC9Eb2N1bWVudHMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbi8vIGltcG9ydCBwYWdlTGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuLy8gaW1wb3J0IGNvbnRlbnRMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XG5cbi8vIE1ldGhvZCAjMSAtIHVzaW5nIHByb3BzLmNoaWxkcmVuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKVxuLy8gfTtcblxuLy8gTWV0aG9kICMyIC0gTGF5b3V0IGFzIGEgSGlnaGVyIE9yZGVyIENvbXBvbmVudFxuLy8gY29uc3QgUGFnZSA9ICgpID0+IDxwPkhlbGxvIE5leHQuanM8L3A+O1xuLy8gZXhwb3J0IGRlZmF1bHQgcGFnZUxheW91dChQYWdlKTtcblxuLy8gTWV0aG9kICMzIC0gUGFnZSBjb250ZW50IGFzIGEgcHJvcFxuLy8gY29uc3QgaW5kZXhQYWdlQ29udGVudCA9IDxwPkhlbGxvIE5leHQuanM8L3A+O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vICAgICByZXR1cm4gPExheW91dCBjb250ZW50PXtpbmRleFBhZ2VDb250ZW50fSAvPlxuLy8gfVxuXG5cblxuXG4vLyBibG9nIHBvc3QgY29kZVxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgICAgPGxpPlxuLy8gICAgICAgICB7LyogdGhpcyBpcyBiYXNpY2FsbHkgc2F5aW5nLCBsaW5rIHRvIHRoZSBbaWRdIGZpbGUsIGJ1dCBtYWtlIHRoZSBwYXRoIHRoZSBzYW1lIGFzIHRoZSBwcm9wIGlkIGJlbG93ICovfVxuLy8gICAgICAgICA8TGluayBocmVmPVwicC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyApO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyB9XG5cblxuXG5cbi8vIGJhdG1hbiBzaG93cyBjb2RlXG4vLyBnZXR0aW5nIHByb3BzIGZyb20gSW5kZXguZ2V0SW5pdGlhbFByb3BzIGJlbG93XG4vLyBjb25zdCBJbmRleCA9IHByb3BzID0+IChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgey8qIG1hcHBpbmcgb3ZlciB0aGUgcmV0dXJuZWQgc2hvd3Mgb2JqZWN0IGZyb20gZnVuY3Rpb24gYmVsb3cgKi99XG4vLyAgICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogYWN0dWFsbHkgcm91dGluZyB5b3UgdG8gW2lkXS5qcyBwYWdlLCBidXQgZGlzcGxheWluZyB0aGUgc2hvdyBpZCBpbiB0aGUgdXJsICovfVxuLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgPC9MYXlvdXQ+XG4vLyApO1xuXG4vLyAvLyB3aGF0ZXZlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMgd2lsbCBiZSB0aGUgcHJvcHMgZm9yIHRoZSBJbmRleCBmdW5jdGlvbiBhYm92ZVxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgICAvLyB0aGlzIGNvbnNvbGUgbG9nIG9ubHkgc2hvd3MgdXAgaW4gdGhlIHNlcnZlciBjb25zb2xlIGJlY2F1c2Ugd2hlbiB0aGUgc2l0ZSBpcyBmaXJzdCByZW5kZXJlZCwgaXQgcmVuZGVycyBvbiB0aGUgc2VydmVyIHNpZGVcbi8vICAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgLy8gd2hhdCB5b3UgYXJlIG1hcHBpbmcgb3ZlciBpbiB0aGUgYWJvdmUgZnVuY3Rpb24gKHByb3BzLnNob3dzKVxuLy8gICAgICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG5cbi8vIHN0eWxpbmcgY29tcG9uZW50c1xuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICAgICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm5pbmcgTmV4dC5qcyBpcyBBd2Vzb21lJyB9LFxuICAgICAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IEFwcHMgd2l0aCBaRUlUJyB9XG4gICAgXTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.58607b4bcfa82f3be6c0.hot-update.js.map