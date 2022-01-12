"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/constants/seo-constant.js
const getURL = ()=>{
    var ref;
    const url = process.env && process.env.URL && process.env.URL !== '' ? process.env.URL : (process === null || process === void 0 ? void 0 : (ref = process.env) === null || ref === void 0 ? void 0 : ref.VERCEL_URL) && process.env.VERCEL_URL !== '' ? process.env.VERCEL_URL : 'http://localhost:3000';
    return url.includes('http') ? url : `https://${url}`;
};
const DEFAULT_TITLE = 'Hello from Afif 👋🏼';
const DEFAULT_TITLE_TEMPLATE = 'Hello from Afif 👋🏼 | %s';
const DEFAULT_DESCRIPTION = 'My Personal Website, hit the button if you like to visit me.';
const DEFAULT_CANONICAL = getURL();
const SITE_NAME = 'Afif Abdillah Jusuf';
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/profile.jpg`;
const TWITTER_HANDLE = '@bungambohlah';
const TWITTER_CARD_TYPE = 'summary_large_image';
const FAVICON_LINK = '/favicon.ico';
const SEO = {
    DEFAULT_TITLE,
    DEFAULT_TITLE_TEMPLATE,
    DEFAULT_DESCRIPTION,
    DEFAULT_CANONICAL,
    SITE_NAME,
    DEFAULT_OG_IMAGE,
    TWITTER_HANDLE,
    TWITTER_CARD_TYPE,
    FAVICON_LINK
};

;// CONCATENATED MODULE: ./src/styles/theme.js

const theme = (0,react_.extendTheme)({
    colors: {
        github: {
            50: '#f5f5f5',
            100: '#ebebeb',
            200: '#cccccc',
            300: '#adadad',
            400: '#707070',
            500: '#333333',
            600: '#2e2e2e',
            700: '#262626',
            800: '#1f1f1f',
            900: '#191919'
        }
    }
});
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.js








const progress = new (bar_of_progress_default())({
    size: 2,
    color: '#22D3EE',
    className: 'bar-of-progress',
    delay: 100
});
router_default().events.on('routeChangeStart', progress.start);
router_default().events.on('routeChangeComplete', ()=>{
    progress.finish();
    window.scrollTo(0, 0);
});
router_default().events.on('routeChangeError', progress.finish);
const { DEFAULT_TITLE_TEMPLATE: _app_DEFAULT_TITLE_TEMPLATE , DEFAULT_DESCRIPTION: _app_DEFAULT_DESCRIPTION , DEFAULT_CANONICAL: _app_DEFAULT_CANONICAL , SITE_NAME: _app_SITE_NAME , DEFAULT_TITLE: _app_DEFAULT_TITLE , DEFAULT_OG_IMAGE: _app_DEFAULT_OG_IMAGE , TWITTER_HANDLE: _app_TWITTER_HANDLE , FAVICON_LINK: _app_FAVICON_LINK  } = SEO;
function App({ Component , pageProps , router  }) {
    var ref;
    const canonicalPath = router.pathname === '/' ? '' : router.pathname;
    const url = `${_app_DEFAULT_CANONICAL}${canonicalPath}`;
    const Layout = ((ref = Component.layoutProps) === null || ref === void 0 ? void 0 : ref.Layout) || external_react_.Fragment;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                title: _app_DEFAULT_TITLE,
                titleTemplate: _app_DEFAULT_TITLE_TEMPLATE,
                description: _app_DEFAULT_DESCRIPTION,
                canonical: url,
                openGraph: {
                    type: 'website',
                    locale: 'en_US',
                    url,
                    site_name: _app_SITE_NAME,
                    title: _app_SITE_NAME,
                    description: _app_DEFAULT_DESCRIPTION,
                    images: [
                        {
                            url: _app_DEFAULT_OG_IMAGE,
                            alt: _app_SITE_NAME
                        }
                    ]
                },
                twitter: {
                    handle: _app_TWITTER_HANDLE,
                    site: _app_TWITTER_HANDLE,
                    cardType: 'summary_large_image'
                },
                additionalLinkTags: [
                    {
                        rel: 'shortcut icon',
                        href: _app_FAVICON_LINK
                    }
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
                theme: styles_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.CSSReset, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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
var __webpack_exports__ = (__webpack_exec__(5953));
module.exports = __webpack_exports__;

})();