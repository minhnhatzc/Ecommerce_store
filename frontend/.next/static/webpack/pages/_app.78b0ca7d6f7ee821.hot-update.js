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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst data = [\n    {\n        id: 1,\n        name: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        name: \"About\",\n        url: \"/about\"\n    },\n    {\n        id: 3,\n        name: \"Categories\",\n        subMenu: true\n    },\n    {\n        id: 4,\n        name: \"Contact\",\n        url: \"/contact\"\n    }\n];\nconst subMenuData = [\n    {\n        id: 1,\n        name: \"Jordan\",\n        doc_count: 11\n    },\n    {\n        id: 2,\n        name: \"Sneakers\",\n        doc_count: 8\n    },\n    {\n        id: 3,\n        name: \"Running shoes\",\n        doc_count: 64\n    },\n    {\n        id: 4,\n        name: \"Football shoes\",\n        doc_count: 107\n    }\n];\nfunction Menu(param) {\n    let { showCatMenu , setShowCatMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"hidden md:flex items-center gap-8 font-medium text-black\",\n        children: data.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: !!(item === null || item === void 0 ? void 0 : item.subMenu) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer flex items-center gap-2 relative\",\n                    children: [\n                        item.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronDown, {\n                            size: 14\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 16\n                        }, this),\n                        showCatMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"\",\n                            children: subMenuData.map((submenu)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md\",\n                                        children: [\n                                            submenu.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"opacity-50 text-sm\",\n                                                children: \"88\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 36\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 36\n                                    }, this)\n                                }, submenu.id, false, {\n                                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 36\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor_pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: item === null || item === void 0 ? void 0 : item.url,\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 15\n                }, this)\n            }, item.id, false, {\n                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2tCO0FBRS9DLE1BQU1HLE9BQU87SUFDWDtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBUUMsS0FBSztJQUFJO0lBQ2hDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxLQUFLO0lBQVM7SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWNFLFNBQVMsSUFBSTtJQUFDO0lBQzNDO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxLQUFLO0lBQVc7Q0FDM0M7QUFFRCxNQUFNRSxjQUFjO0lBQ2xCO1FBQUVKLElBQUk7UUFBR0MsTUFBTTtRQUFVSSxXQUFXO0lBQUc7SUFDdkM7UUFBRUwsSUFBSTtRQUFHQyxNQUFNO1FBQVlJLFdBQVc7SUFBRTtJQUN4QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBaUJJLFdBQVc7SUFBRztJQUM5QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBa0JJLFdBQVc7SUFBSTtDQUNqRDtBQUVELFNBQVNDLEtBQUssS0FBNkIsRUFBRTtRQUEvQixFQUFDQyxZQUFXLEVBQUVDLGVBQWMsRUFBQyxHQUE3QjtJQUNaLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFVO2tCQUNYWCxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsT0FBUztZQUNsQixxQkFDRSw4REFBQ2hCLHVEQUFjOzBCQUNaLENBQUMsQ0FBQ2dCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVQsT0FBTyxrQkFDZCw4REFBQ1c7b0JBQUdKLFdBQVU7O3dCQUNaRSxLQUFLWCxJQUFJO3NDQUNWLDhEQUFDSCx5REFBYUE7NEJBQUNpQixNQUFNOzs7Ozs7d0JBQ3BCUiw2QkFDSSw4REFBQ0U7NEJBQUdDLFdBQVU7c0NBQ1JOLFlBQVlPLEdBQUcsQ0FBQyxDQUFDSyxVQUFZO2dDQUN6QixxQkFDSyw4REFBQ25CLGtEQUFJQTtvQ0FBa0JvQixNQUFLOzhDQUM1Qiw0RUFBQ0g7d0NBQUdKLFdBQVU7OzRDQUNiTSxRQUFRZixJQUFJOzBEQUNiLDhEQUFDaUI7Z0RBQUtSLFdBQVU7MERBQXFCOzs7Ozs7Ozs7Ozs7bUNBSDFCTSxRQUFRaEIsRUFBRTs7Ozs7NEJBUS9COzs7Ozs7Ozs7Ozt5Q0FLWCw4REFBQ2M7b0JBQUdKLFdBQVU7OEJBQ1osNEVBQUNiLGtEQUFJQTt3QkFBQ29CLE1BQU1MLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVYsR0FBRztrQ0FBR1UsS0FBS1gsSUFBSTs7Ozs7Ozs7Ozt3QkFFcEM7ZUF6QmtCVyxLQUFLWixFQUFFOzs7OztRQTRCaEM7Ozs7OztBQUdOO0tBcENTTTtBQXNDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUuanN4P2I4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJzQ2hldnJvbkRvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogXCJIb21lXCIsIHVybDogXCIvXCIgfSxcclxuICB7IGlkOiAyLCBuYW1lOiBcIkFib3V0XCIsIHVybDogXCIvYWJvdXRcIiB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6IFwiQ2F0ZWdvcmllc1wiLCBzdWJNZW51OiB0cnVlIH0sXHJcbiAgeyBpZDogNCwgbmFtZTogXCJDb250YWN0XCIsIHVybDogXCIvY29udGFjdFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBzdWJNZW51RGF0YSA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIkpvcmRhblwiLCBkb2NfY291bnQ6IDExIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogXCJTbmVha2Vyc1wiLCBkb2NfY291bnQ6IDggfSxcclxuICB7IGlkOiAzLCBuYW1lOiBcIlJ1bm5pbmcgc2hvZXNcIiwgZG9jX2NvdW50OiA2NCB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6IFwiRm9vdGJhbGwgc2hvZXNcIiwgZG9jX2NvdW50OiAxMDcgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1lbnUoe3Nob3dDYXRNZW51LCBzZXRTaG93Q2F0TWVudX0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgeyEhaXRlbT8uc3ViTWVudSA/IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgPEJzQ2hldnJvbkRvd24gc2l6ZT17MTR9Lz5cclxuICAgICAgICAgICAgICAge3Nob3dDYXRNZW51ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViTWVudURhdGEubWFwKChzdWJtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtzdWJtZW51LmlkfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoLTEyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC0zIGhvdmVyOmJnLWJsYWNrL1swLjAzXSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1lbnUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIHRleHQtc21cIj44ODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yX3BvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0/LnVybH0+e2l0ZW0ubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCc0NoZXZyb25Eb3duIiwiZGF0YSIsImlkIiwibmFtZSIsInVybCIsInN1Yk1lbnUiLCJzdWJNZW51RGF0YSIsImRvY19jb3VudCIsIk1lbnUiLCJzaG93Q2F0TWVudSIsInNldFNob3dDYXRNZW51IiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiRnJhZ21lbnQiLCJsaSIsInNpemUiLCJzdWJtZW51IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});