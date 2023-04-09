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

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst data = [\n    {\n        id: 1,\n        name: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        name: \"About\",\n        url: \"/about\"\n    },\n    {\n        id: 3,\n        name: \"Categories\",\n        subMenu: true\n    },\n    {\n        id: 4,\n        name: \"Contact\",\n        url: \"/contact\"\n    }\n];\nconst subMenuData = [\n    {\n        id: 1,\n        name: \"Jordan\",\n        doc_count: 11\n    },\n    {\n        id: 2,\n        name: \"Sneakers\",\n        doc_count: 8\n    },\n    {\n        id: 3,\n        name: \"Running shoes\",\n        doc_count: 64\n    },\n    {\n        id: 4,\n        name: \"Football shoes\",\n        doc_count: 107\n    }\n];\nfunction Menu(param) {\n    let { showCatMenu , setShowCatMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"hidden md:flex items-center gap-8 font-medium text-black\",\n        children: data.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: !!(item === null || item === void 0 ? void 0 : item.subMenu) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer flex items-center gap-2 relative\",\n                    children: [\n                        item.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronDown, {\n                            size: 14\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 16\n                        }, this),\n                        showCatMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: subMenuData.map((submenu)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 36\n                                    }, this)\n                                }, submenu.id, false, {\n                                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 36\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor_pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: item === null || item === void 0 ? void 0 : item.url,\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 15\n                }, this)\n            }, item.id, false, {\n                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2tCO0FBRS9DLE1BQU1HLE9BQU87SUFDWDtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBUUMsS0FBSztJQUFJO0lBQ2hDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxLQUFLO0lBQVM7SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWNFLFNBQVMsSUFBSTtJQUFDO0lBQzNDO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxLQUFLO0lBQVc7Q0FDM0M7QUFFRCxNQUFNRSxjQUFjO0lBQ2xCO1FBQUVKLElBQUk7UUFBR0MsTUFBTTtRQUFVSSxXQUFXO0lBQUc7SUFDdkM7UUFBRUwsSUFBSTtRQUFHQyxNQUFNO1FBQVlJLFdBQVc7SUFBRTtJQUN4QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBaUJJLFdBQVc7SUFBRztJQUM5QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBa0JJLFdBQVc7SUFBSTtDQUNqRDtBQUVELFNBQVNDLEtBQUssS0FBNkIsRUFBRTtRQUEvQixFQUFDQyxZQUFXLEVBQUVDLGVBQWMsRUFBQyxHQUE3QjtJQUNaLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFVO2tCQUNYWCxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsT0FBUztZQUNsQixxQkFDRSw4REFBQ2hCLHVEQUFjOzBCQUNaLENBQUMsQ0FBQ2dCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVQsT0FBTyxrQkFDZCw4REFBQ1c7b0JBQUdKLFdBQVU7O3dCQUNaRSxLQUFLWCxJQUFJO3NDQUNWLDhEQUFDSCx5REFBYUE7NEJBQUNpQixNQUFNOzs7Ozs7d0JBQ3BCUiw2QkFDSSw4REFBQ0U7c0NBQ0tMLFlBQVlPLEdBQUcsQ0FBQyxDQUFDSyxVQUFZO2dDQUN6QixxQkFDSyw4REFBQ25CLGtEQUFJQTtvQ0FBa0JvQixNQUFLOzhDQUM1Qiw0RUFBQ0g7d0NBQUdKLFdBQVU7Ozs7OzttQ0FESE0sUUFBUWhCLEVBQUU7Ozs7OzRCQUsvQjs7Ozs7Ozs7Ozs7eUNBS1gsOERBQUNjO29CQUFHSixXQUFVOzhCQUNaLDRFQUFDYixrREFBSUE7d0JBQUNvQixNQUFNTCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1WLEdBQUc7a0NBQUdVLEtBQUtYLElBQUk7Ozs7Ozs7Ozs7d0JBRXBDO2VBdEJrQlcsS0FBS1osRUFBRTs7Ozs7UUF5QmhDOzs7Ozs7QUFHTjtLQWpDU007QUFtQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9iODY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCc0NoZXZyb25Eb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCB1cmw6IFwiL1wiIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogXCJBYm91dFwiLCB1cmw6IFwiL2Fib3V0XCIgfSxcclxuICB7IGlkOiAzLCBuYW1lOiBcIkNhdGVnb3JpZXNcIiwgc3ViTWVudTogdHJ1ZSB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6IFwiQ29udGFjdFwiLCB1cmw6IFwiL2NvbnRhY3RcIiB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc3ViTWVudURhdGEgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogXCJKb3JkYW5cIiwgZG9jX2NvdW50OiAxMSB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6IFwiU25lYWtlcnNcIiwgZG9jX2NvdW50OiA4IH0sXHJcbiAgeyBpZDogMywgbmFtZTogXCJSdW5uaW5nIHNob2VzXCIsIGRvY19jb3VudDogNjQgfSxcclxuICB7IGlkOiA0LCBuYW1lOiBcIkZvb3RiYWxsIHNob2VzXCIsIGRvY19jb3VudDogMTA3IH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNZW51KHtzaG93Q2F0TWVudSwgc2V0U2hvd0NhdE1lbnV9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTggZm9udC1tZWRpdW0gdGV4dC1ibGFja1wiPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIHshIWl0ZW0/LnN1Yk1lbnUgPyAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgIDxCc0NoZXZyb25Eb3duIHNpemU9ezE0fS8+XHJcbiAgICAgICAgICAgICAgIHtzaG93Q2F0TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge3N1Yk1lbnVEYXRhLm1hcCgoc3VibWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17c3VibWVudS5pZH0gaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvcl9wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtPy51cmx9PntpdGVtLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnNDaGV2cm9uRG93biIsImRhdGEiLCJpZCIsIm5hbWUiLCJ1cmwiLCJzdWJNZW51Iiwic3ViTWVudURhdGEiLCJkb2NfY291bnQiLCJNZW51Iiwic2hvd0NhdE1lbnUiLCJzZXRTaG93Q2F0TWVudSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsIkZyYWdtZW50IiwibGkiLCJzaXplIiwic3VibWVudSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});