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
}; // Method #1 - using props.children

var Layout = function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), props.children);
}; // export default Layout;
// Method #2 - Layout as a Higher Order Component


var pageLayout = function pageLayout(Page) {
  return function () {
    return __jsx("div", {
      style: layoutStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx(Page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (pageLayout); // Method #3 - Page content as a prop
// const contentLayout = props => (
//     <div style={layoutStyle}>
//         <Header />
//         {props.content}
//     </div>
// );
// export default contentLayout;

/***/ })

})
//# sourceMappingURL=about.js.a15fec250ffe791c566d.hot-update.js.map