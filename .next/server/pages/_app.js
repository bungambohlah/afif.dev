"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: ./components/ToggleMode.js




function ToggleMode() {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    if (!mounted) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "transition duration-500 ease-in-out rounded-full p-2",
        children: theme === 'dark' ? /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiSun, {
            onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark')
            ,
            className: "text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiMoon, {
            onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark')
            ,
            className: "text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        })
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js




const App = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
        attribute: "class",
        defaultTheme: "light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ToggleMode, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(380));
module.exports = __webpack_exports__;

})();