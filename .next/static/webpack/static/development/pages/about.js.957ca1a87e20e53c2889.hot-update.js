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
// This method will render all of the child tags you put inside of the Layout tag within your index/about pages

var Layout = function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.children);
}; // export default Layout;
// Method #2 - Layout as a Higher Order Component
// This method takes in the variable Page that was created in your index/about
// pages that has been set equal to the content you want displayed and renders it


var pageLayout = function pageLayout(Page) {
  return function () {
    return __jsx("div", {
      style: layoutStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx(Page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  };
}; // export default pageLayout;
// Method #3 - Page content as a prop
// This method takes in props that were given to the Layout tag in your index/about
// pages and renders whichever prop you "call", in this case "content"


var contentLayout = function contentLayout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), props.content);
};

/* harmony default export */ __webpack_exports__["default"] = (contentLayout);

/***/ })

})
//# sourceMappingURL=about.js.957ca1a87e20e53c2889.hot-update.js.map