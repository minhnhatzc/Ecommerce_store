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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst data = [\n    {\n        id: 1,\n        name: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        name: \"About\",\n        url: \"/about\"\n    },\n    {\n        id: 3,\n        name: \"Categories\",\n        subMenu: true\n    },\n    {\n        id: 4,\n        name: \"Contact\",\n        url: \"/contact\"\n    }\n];\nconst subMenuData = [\n    {\n        id: 1,\n        name: \"Jordan\",\n        doc_count: 11\n    },\n    {\n        id: 2,\n        name: \"Sneakers\",\n        doc_count: 8\n    },\n    {\n        id: 3,\n        name: \"Running shoes\",\n        doc_count: 64\n    },\n    {\n        id: 4,\n        name: \"Football shoes\",\n        doc_count: 107\n    }\n];\nfunction Menu(param) {\n    let { showCatMenu , setShowCatMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"hidden md:flex items-center gap-8 font-medium text-black\",\n        children: data.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: !!(item === null || item === void 0 ? void 0 : item.subMenu) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer flex items-center gap-2 relative\",\n                    children: [\n                        item.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronDown, {\n                            size: 14\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 16\n                        }, this),\n                        showCatMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: subMenuData.map\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor_pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: item === null || item === void 0 ? void 0 : item.url,\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 15\n                }, this)\n            }, item.id, false, {\n                fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs\\\\ecommerce_store\\\\frontend\\\\components\\\\Menu.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2tCO0FBRS9DLE1BQU1HLE9BQU87SUFDWDtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBUUMsS0FBSztJQUFJO0lBQ2hDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxLQUFLO0lBQVM7SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWNFLFNBQVMsSUFBSTtJQUFDO0lBQzNDO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxLQUFLO0lBQVc7Q0FDM0M7QUFFRCxNQUFNRSxjQUFjO0lBQ2xCO1FBQUVKLElBQUk7UUFBR0MsTUFBTTtRQUFVSSxXQUFXO0lBQUc7SUFDdkM7UUFBRUwsSUFBSTtRQUFHQyxNQUFNO1FBQVlJLFdBQVc7SUFBRTtJQUN4QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBaUJJLFdBQVc7SUFBRztJQUM5QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBa0JJLFdBQVc7SUFBSTtDQUNqRDtBQUVELFNBQVNDLEtBQUssS0FBNkIsRUFBRTtRQUEvQixFQUFDQyxZQUFXLEVBQUVDLGVBQWMsRUFBQyxHQUE3QjtJQUNaLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFVO2tCQUNYWCxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsT0FBUztZQUNsQixxQkFDRSw4REFBQ2hCLHVEQUFjOzBCQUNaLENBQUMsQ0FBQ2dCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVQsT0FBTyxrQkFDZCw4REFBQ1c7b0JBQUdKLFdBQVU7O3dCQUNaRSxLQUFLWCxJQUFJO3NDQUNWLDhEQUFDSCx5REFBYUE7NEJBQUNpQixNQUFNOzs7Ozs7d0JBQ3BCUiw2QkFDSSw4REFBQ0U7c0NBQ0tMLFlBQVlPLEdBQUc7Ozs7Ozs7Ozs7O3lDQUszQiw4REFBQ0c7b0JBQUdKLFdBQVU7OEJBQ1osNEVBQUNiLGtEQUFJQTt3QkFBQ21CLE1BQU1KLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVYsR0FBRztrQ0FBR1UsS0FBS1gsSUFBSTs7Ozs7Ozs7Ozt3QkFFcEM7ZUFma0JXLEtBQUtaLEVBQUU7Ozs7O1FBa0JoQzs7Ozs7O0FBR047S0ExQlNNO0FBNEJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVudS5qc3g/Yjg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnNDaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIkhvbWVcIiwgdXJsOiBcIi9cIiB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6IFwiQWJvdXRcIiwgdXJsOiBcIi9hYm91dFwiIH0sXHJcbiAgeyBpZDogMywgbmFtZTogXCJDYXRlZ29yaWVzXCIsIHN1Yk1lbnU6IHRydWUgfSxcclxuICB7IGlkOiA0LCBuYW1lOiBcIkNvbnRhY3RcIiwgdXJsOiBcIi9jb250YWN0XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IHN1Yk1lbnVEYXRhID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiSm9yZGFuXCIsIGRvY19jb3VudDogMTEgfSxcclxuICB7IGlkOiAyLCBuYW1lOiBcIlNuZWFrZXJzXCIsIGRvY19jb3VudDogOCB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6IFwiUnVubmluZyBzaG9lc1wiLCBkb2NfY291bnQ6IDY0IH0sXHJcbiAgeyBpZDogNCwgbmFtZTogXCJGb290YmFsbCBzaG9lc1wiLCBkb2NfY291bnQ6IDEwNyB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTWVudSh7c2hvd0NhdE1lbnUsIHNldFNob3dDYXRNZW51fSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC04IGZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIj5cclxuICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICB7ISFpdGVtPy5zdWJNZW51ID8gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICA8QnNDaGV2cm9uRG93biBzaXplPXsxNH0vPlxyXG4gICAgICAgICAgICAgICB7c2hvd0NhdE1lbnUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJNZW51RGF0YS5tYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3JfcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbT8udXJsfT57aXRlbS5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJzQ2hldnJvbkRvd24iLCJkYXRhIiwiaWQiLCJuYW1lIiwidXJsIiwic3ViTWVudSIsInN1Yk1lbnVEYXRhIiwiZG9jX2NvdW50IiwiTWVudSIsInNob3dDYXRNZW51Iiwic2V0U2hvd0NhdE1lbnUiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJGcmFnbWVudCIsImxpIiwic2l6ZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});