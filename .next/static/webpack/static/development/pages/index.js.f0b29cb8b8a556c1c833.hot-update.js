webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/Puppy.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/MyLayout */ \"./comps/MyLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/abby.gottlich/Documents/hello-next/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import Puppy from \"../comps/Puppy\";\n\nvar DynamicPuppy = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../comps/DynamicPuppy */ \"./comps/DynamicPuppy.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../comps/DynamicPuppy */ \"./comps/DynamicPuppy.js\")];\n    },\n    modules: [\"../comps/DynamicPuppy\"]\n  }\n});\n_c2 = DynamicPuppy;\n\nfunction getPosts() {\n  return [{\n    id: \"hello-nextjs\",\n    title: \"Hello Next.js\"\n  }, {\n    id: \"learn-nextjs\",\n    title: \"Learn Next.js is awesome\"\n  }, {\n    id: \"deploy-nextjs\",\n    title: \"Deploy apps with ZEIT\"\n  }];\n}\n\nvar PostLink = function PostLink(_ref) {\n  var post = _ref.post;\n  return __jsx(\"li\", {\n    className: \"jsx-3950785544\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/p/[id]\",\n    as: \"/p/\".concat(post.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-3950785544\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"3950785544\",\n    __self: _this\n  }, \"li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\\\"Arial\\\";}a.jsx-3950785544:hover{opacity:0.6;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCZ0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxhQUNmLHFCQUlhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbi8vIGltcG9ydCBQdXBweSBmcm9tIFwiLi4vY29tcHMvUHVwcHlcIjtcblxuY29uc3QgRHluYW1pY1B1cHB5ID0gZHluYW1pYyhpbXBvcnQoXCIuLi9jb21wcy9EeW5hbWljUHVwcHlcIikpO1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiBcImhlbGxvLW5leHRqc1wiLCB0aXRsZTogXCJIZWxsbyBOZXh0LmpzXCIgfSxcbiAgICB7IGlkOiBcImxlYXJuLW5leHRqc1wiLCB0aXRsZTogXCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiB9LFxuICAgIHsgaWQ6IFwiZGVwbG95LW5leHRqc1wiLCB0aXRsZTogXCJEZXBsb3kgYXBwcyB3aXRoIFpFSVRcIiB9LFxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQdXBweTogZmFsc2UsXG4gICAgICBzaG93RHluYW1pY1B1cHB5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UHVwcHk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEeW5hbWljQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RHluYW1pY1B1cHB5OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wL3N0YXRpY1JvdXRlXCI+XG4gICAgICAgICAgICA8YT5UaGlzIGlzIGEgc3RhdGljIHJvdXRlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5TdGF0aWMgSW1wb3J0IENsaWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEeW5hbWljQ2xpY2soKX0+XG4gICAgICAgICAgRHluYW1pYyBJbXBvcnQgQ2xpY2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5zaG93UHVwcHkgPyA8UHVwcHkgLz4gOiBudWxsfSAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0R5bmFtaWNQdXBweSA/IDxEeW5hbWljUHVwcHkgLz4gOiBudWxsfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */\"));\n};\n\n_c3 = PostLink;\n\nvar Blog = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Blog, _React$Component);\n\n  var _super = _createSuper(Blog);\n\n  function Blog(props) {\n    var _this2;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Blog);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      showPuppy: false,\n      showDynamicPuppy: false\n    };\n    return _this2;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Blog, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState({\n        showPuppy: true\n      });\n    }\n  }, {\n    key: \"handleDynamicClick\",\n    value: function handleDynamicClick() {\n      this.setState({\n        showDynamicPuppy: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 7\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 9\n        }\n      }, \"My Blog\"), __jsx(\"ul\", {\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }\n      }, getPosts().map(function (post) {\n        return __jsx(PostLink, {\n          key: post.id,\n          post: post,\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }\n        });\n      })), __jsx(\"div\", {\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/p/staticRoute\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }\n      }, \"This is a static route\"))), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.handleClick();\n        },\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 9\n        }\n      }, \"Static Import Click\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.handleDynamicClick();\n        },\n        className: \"jsx-3046306228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }\n      }, \"Dynamic Import Click\"), this.state.showDynamicPuppy ? __jsx(DynamicPuppy, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 40\n        }\n      }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        id: \"3046306228\",\n        __self: this\n      }, \"h1.jsx-3046306228,a.jsx-3046306228{font-family:\\\"Arial\\\";}ul.jsx-3046306228{padding:0;}button.jsx-3046306228{margin-top:20px;margin-right:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5LmdvdHRsaWNoL0RvY3VtZW50cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFJaUMsQUFJVixBQUlNLFVBSGxCLE1BSW9CLElBUnBCLGNBU0EiLCJmaWxlIjoiL1VzZXJzL2FiYnkuZ290dGxpY2gvRG9jdW1lbnRzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9NeUxheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuLy8gaW1wb3J0IFB1cHB5IGZyb20gXCIuLi9jb21wcy9QdXBweVwiO1xuXG5jb25zdCBEeW5hbWljUHVwcHkgPSBkeW5hbWljKGltcG9ydChcIi4uL2NvbXBzL0R5bmFtaWNQdXBweVwiKSk7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IFwiaGVsbG8tbmV4dGpzXCIsIHRpdGxlOiBcIkhlbGxvIE5leHQuanNcIiB9LFxuICAgIHsgaWQ6IFwibGVhcm4tbmV4dGpzXCIsIHRpdGxlOiBcIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIH0sXG4gICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH0sXG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1B1cHB5OiBmYWxzZSxcbiAgICAgIHNob3dEeW5hbWljUHVwcHk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQdXBweTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUR5bmFtaWNDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEeW5hbWljUHVwcHk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Avc3RhdGljUm91dGVcIj5cbiAgICAgICAgICAgIDxhPlRoaXMgaXMgYSBzdGF0aWMgcm91dGU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlN0YXRpYyBJbXBvcnQgQ2xpY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUR5bmFtaWNDbGljaygpfT5cbiAgICAgICAgICBEeW5hbWljIEltcG9ydCBDbGlja1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLnNob3dQdXBweSA/IDxQdXBweSAvPiA6IG51bGx9ICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RHluYW1pY1B1cHB5ID8gPER5bmFtaWNQdXBweSAvPiA6IG51bGx9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\\n/*@ sourceURL=/Users/abby.gottlich/Documents/hello-next/pages/index.js */\"));\n    }\n  }]);\n\n  return Blog;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DynamicPuppy$dynamic\");\n$RefreshReg$(_c2, \"DynamicPuppy\");\n$RefreshReg$(_c3, \"PostLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkR5bmFtaWNQdXBweSIsImR5bmFtaWMiLCJnZXRQb3N0cyIsImlkIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJCbG9nIiwicHJvcHMiLCJzdGF0ZSIsInNob3dQdXBweSIsInNob3dEeW5hbWljUHVwcHkiLCJzZXRTdGF0ZSIsIm1hcCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRHluYW1pY0NsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxtREFBTztBQUFBLFNBQUMscUlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxzREFBUjtBQUFBO0FBQUEsY0FBUSx1QkFBUjtBQUFBO0FBQUEsRUFBNUI7TUFBTUQsWTs7QUFFTixTQUFTRSxRQUFULEdBQW9CO0FBQ2xCLFNBQU8sQ0FDTDtBQUFFQyxNQUFFLEVBQUUsY0FBTjtBQUFzQkMsU0FBSyxFQUFFO0FBQTdCLEdBREssRUFFTDtBQUFFRCxNQUFFLEVBQUUsY0FBTjtBQUFzQkMsU0FBSyxFQUFFO0FBQTdCLEdBRkssRUFHTDtBQUFFRCxNQUFFLEVBQUUsZUFBTjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSEssQ0FBUDtBQUtEOztBQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBcUIsTUFBRSxlQUFRQSxJQUFJLENBQUNILEVBQWIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRyxJQUFJLENBQUNGLEtBQVQsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLDhrSEFEZTtBQUFBLENBQWpCOztNQUFNQyxROztJQXdCZUUsSTs7Ozs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxFQUFFLEtBREE7QUFFWEMsc0JBQWdCLEVBQUU7QUFGUCxLQUFiO0FBRmlCO0FBTWxCOzs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGlCQUFTLEVBQUU7QUFEQyxPQUFkO0FBR0Q7Ozt5Q0FFb0I7QUFDbkIsV0FBS0UsUUFBTCxDQUFjO0FBQ1pELHdCQUFnQixFQUFFO0FBRE4sT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVCxRQUFRLEdBQUdXLEdBQVgsQ0FBZSxVQUFDUCxJQUFEO0FBQUEsZUFDZCxNQUFDLFFBQUQ7QUFBVSxhQUFHLEVBQUVBLElBQUksQ0FBQ0gsRUFBcEI7QUFBd0IsY0FBSSxFQUFFRyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRGM7QUFBQSxPQUFmLENBREgsQ0FGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQURGLENBUEYsRUFZRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ1EsV0FBTCxFQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVpGLEVBYUU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLGtCQUFMLEVBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBYkYsRUFpQkcsS0FBS04sS0FBTCxDQUFXRSxnQkFBWCxHQUE4QixNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixHQUFpRCxJQWpCcEQ7QUFBQTtBQUFBO0FBQUEseWhIQURGO0FBcUNEOzs7O0VBM0QrQkssNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbi8vIGltcG9ydCBQdXBweSBmcm9tIFwiLi4vY29tcHMvUHVwcHlcIjtcblxuY29uc3QgRHluYW1pY1B1cHB5ID0gZHluYW1pYyhpbXBvcnQoXCIuLi9jb21wcy9EeW5hbWljUHVwcHlcIikpO1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiBcImhlbGxvLW5leHRqc1wiLCB0aXRsZTogXCJIZWxsbyBOZXh0LmpzXCIgfSxcbiAgICB7IGlkOiBcImxlYXJuLW5leHRqc1wiLCB0aXRsZTogXCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiB9LFxuICAgIHsgaWQ6IFwiZGVwbG95LW5leHRqc1wiLCB0aXRsZTogXCJEZXBsb3kgYXBwcyB3aXRoIFpFSVRcIiB9LFxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQdXBweTogZmFsc2UsXG4gICAgICBzaG93RHluYW1pY1B1cHB5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UHVwcHk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEeW5hbWljQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RHluYW1pY1B1cHB5OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wL3N0YXRpY1JvdXRlXCI+XG4gICAgICAgICAgICA8YT5UaGlzIGlzIGEgc3RhdGljIHJvdXRlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5TdGF0aWMgSW1wb3J0IENsaWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEeW5hbWljQ2xpY2soKX0+XG4gICAgICAgICAgRHluYW1pYyBJbXBvcnQgQ2xpY2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5zaG93UHVwcHkgPyA8UHVwcHkgLz4gOiBudWxsfSAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0R5bmFtaWNQdXBweSA/IDxEeW5hbWljUHVwcHkgLz4gOiBudWxsfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})