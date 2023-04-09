"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.jsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [lastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(show),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"h-[60px] flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/logo.svg\",\n                        className: \"w-[40px] md:w-[60px]\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    showCatMenu: showCatMenu,\n                    setShowCatMenu: setShowCatMenu\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 text-black\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-8 md:w-12 h-8 md:h-12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsCart, {\n                                className: \"text-[15px] md:text-[20px\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Header.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"IxhYg5PXhhZVa7k6Ei2Z2qNM9IA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBQ0g7QUFDSDtBQUVzQjtBQUNSO0FBQ1E7QUFDQztBQUVqRCxTQUFTVSxTQUFTOztJQUNoQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNLENBQUNjLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MscUJBQ0UsOERBQUNrQjtRQUNDQyxXQUFXLDhIQUFtSSxPQUFMTDtrQkFFekksNEVBQUNaLGdEQUFPQTtZQUFDaUIsV0FBVTs7OEJBQ2pCLDhEQUFDaEIsa0RBQUlBO29CQUFDaUIsTUFBSzs4QkFDVCw0RUFBQ0M7d0JBQUlDLEtBQUk7d0JBQVlILFdBQVU7Ozs7Ozs7Ozs7OzhCQUVqQyw4REFBQ2YsNkNBQUlBO29CQUFDUSxhQUFhQTtvQkFBYUMsZ0JBQWdCQTs7Ozs7OzhCQUNoRCw4REFBQ1U7b0JBQUlKLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ2Isa0RBQU1BO2dDQUFDYSxXQUFVOzs7Ozs7MENBQ2xCLDhEQUFDSTtnQ0FBSUosV0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QjtHQXZCU1Y7S0FBQUE7QUF5QlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuXHJcbmltcG9ydCB7IElvTWRIZWFydEVtcHR5IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IEJzQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBCaU1lbnVBbHRSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5pbXBvcnQgeyBWc2NDaHJvbWVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDYXRNZW51LCBzZXRTaG93Q2F0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoXCJ0cmFuc2xhdGUteS0wXCIpO1xyXG4gIGNvbnN0IFtsYXN0U2Nyb2xsWSwgc2V0TGFzdFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtWzUwcHhdIG1kOmgtWzgwcHhdIGJnLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB6LTIwIHN0aWNreSB0b3AtMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtzaG93fWB9XHJcbiAgICA+XHJcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT1cImgtWzYwcHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cInctWzQwcHhdIG1kOnctWzYwcHhdXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPE1lbnUgc2hvd0NhdE1lbnU9e3Nob3dDYXRNZW51fSBzZXRTaG93Q2F0TWVudT17c2V0U2hvd0NhdE1lbnV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDp3LTEyIGgtOCBtZDpoLTEyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctYmxhY2svWzAuMDVdIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxCc0NhcnQgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1bMjBweFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+NTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXcmFwcGVyIiwiTGluayIsIk1lbnUiLCJJb01kSGVhcnRFbXB0eSIsIkJzQ2FydCIsIkJpTWVudUFsdFJpZ2h0IiwiVnNjQ2hyb21lQ2xvc2UiLCJIZWFkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsInNob3dDYXRNZW51Iiwic2V0U2hvd0NhdE1lbnUiLCJzaG93Iiwic2V0U2hvdyIsImxhc3RTY3JvbGxZIiwic2V0TGFzdFNjcm9sbFkiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});