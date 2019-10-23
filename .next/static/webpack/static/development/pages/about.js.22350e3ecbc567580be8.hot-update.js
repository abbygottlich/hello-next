webpackHotUpdate("static/development/pages/about.js",{

/***/ "./comps/MyLayout.js":
/*!***************************!*\
  !*** ./comps/MyLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./comps/Header.js");
var _jsxFileName = "/Users/abby.gottlich/Documents/hello-next/comps/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}; // Method #1
// const Layout = props => (
//     <div style={layoutStyle}>
//         <Header />
//         {props.children}
//     </div>
// );
// export default Layout;
// Method #2

var withLayout = function withLayout(Page) {
  return function () {
    return __jsx("div", {
      style: layoutStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(Page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), ">");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ })

})
//# sourceMappingURL=about.js.22350e3ecbc567580be8.hot-update.js.map