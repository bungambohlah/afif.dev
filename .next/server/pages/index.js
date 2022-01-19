'use strict';
(() => {
  var exports = {};
  exports.id = 405;
  exports.ids = [405];
  exports.modules = {
    /***/ 6969: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ Home,
        getStaticProps: () => /* binding */ getStaticProps,
      });

      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997);
      // EXTERNAL MODULE: external "@chakra-ui/react"
      var react_ = __webpack_require__(8930);
      // EXTERNAL MODULE: external "next-seo"
      var external_next_seo_ = __webpack_require__(6641);
      // EXTERNAL MODULE: external "next/head"
      var head_ = __webpack_require__(968);
      var head_default = /*#__PURE__*/ __webpack_require__.n(head_);
      // EXTERNAL MODULE: ./node_modules/next/link.js
      var next_link = __webpack_require__(1664);
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689); // CONCATENATED MODULE: ./src/components/Icon.js
      function Icon({ name }) {
        if (name === 'facebook') {
          return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            w: 5,
            h: 5,
            style: {
              fill: 'currentColor',
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              children: /*#__PURE__*/ jsx_runtime_.jsx('path', {
                d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
              }),
            }),
          });
        }
        if (name === 'twitter') {
          return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            w: 5,
            h: 5,
            style: {
              fill: 'currentColor',
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              children: /*#__PURE__*/ jsx_runtime_.jsx('path', {
                d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
              }),
            }),
          });
        }
        if (name === 'github') {
          return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            w: 5,
            h: 5,
            style: {
              fill: 'currentColor',
            },
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('svg', {
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('title', {
                  children: 'GitHub icon',
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('path', {
                  d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                }),
              ],
            }),
          });
        }
        if (name === 'linkedin') {
          return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            w: 5,
            h: 5,
            style: {
              fill: 'currentColor',
            },
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('svg', {
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('title', {
                  children: 'LinkedIn icon',
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('path', {
                  d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                }),
              ],
            }),
          });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {});
      }

      // EXTERNAL MODULE: ./src/components/date.js
      var components_date = __webpack_require__(6054);
      // EXTERNAL MODULE: ./src/components/layout.js
      var layout = __webpack_require__(2283);
      // EXTERNAL MODULE: ./src/lib/posts.js
      var posts = __webpack_require__(381); // CONCATENATED MODULE: ./src/pages/index.js
      // (Static Generation): Fetch data at build time
      const getStaticProps = async (ctx) => {
        const allPostsData = await (0, posts /* getSortedPostsData */.ld)();
        return {
          props: {
            allPostsData,
          },
        };
      };
      function Home({ allPostsData }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
              title: 'Home',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
              maxW: 'container.sm',
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                layout /* Layout */.A,
                {
                  home: true,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(head_default(), {
                      children: /*#__PURE__*/ jsx_runtime_.jsx('title', {
                        children: layout /* siteTitle */.y,
                      }),
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(react_.Flex, {
                      direction: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                          fontSize: 'xl',
                          pb: '4',
                          children:
                            'Hello, my name is Afif, just call me Apep. My Professional skill are a Full-Stack developer and have a much year of experiences especially on Web Based Program.',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                          fontSize: 'xl',
                          pb: '4',
                          children:
                            'Contact me if you need anything on me, list on the below.',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                          mx: 'auto',
                          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                            react_.Flex,
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              wrap: 'wrap',
                              children: [
                                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                  react_.Button,
                                  {
                                    colorScheme: 'facebook',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        name: 'facebook',
                                      }),
                                      'Facebook',
                                    ],
                                  },
                                ),
                                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                  react_.Button,
                                  {
                                    colorScheme: 'twitter',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        name: 'twitter',
                                      }),
                                      'Twitter',
                                    ],
                                  },
                                ),
                                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                  react_.Button,
                                  {
                                    colorScheme: 'github',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        name: 'github',
                                      }),
                                      'Github',
                                    ],
                                  },
                                ),
                                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                  react_.Button,
                                  {
                                    colorScheme: 'linkedin',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        name: 'linkedin',
                                      }),
                                      'LinkedIn 1',
                                    ],
                                  },
                                ),
                              ],
                            },
                          ),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('section', {
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                          as: 'h2',
                          size: 'lg',
                          mb: 6,
                          children: 'Blog',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                          spacing: 3,
                          children: allPostsData.map(({ id, date, title }) =>
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              react_.ListItem,
                              {
                                cursor: 'pointer',
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    next_link['default'],
                                    {
                                      href: `/posts/${id}`,
                                      passHref: true,
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        react_.Heading,
                                        {
                                          as: 'h3',
                                          size: 'md',
                                          children: title,
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx('small', {
                                    className:
                                      'prose lg:prose-xl dark:text-white font-light',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                                      components_date /* default */.Z,
                                      {
                                        dateString: date,
                                      },
                                    ),
                                  }),
                                ],
                              },
                              id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                },
              ),
            }),
          ],
        });
      }
      Home.layoutProps = {
        Layout: (props) =>
          /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            borderLeft: 4,
            ...props,
          }),
      };

      /***/
    },

    /***/ 8930: /***/ (module) => {
      module.exports = require('@chakra-ui/react');

      /***/
    },

    /***/ 8076: /***/ (module) => {
      module.exports = require('gray-matter');

      /***/
    },

    /***/ 2245: /***/ (module) => {
      module.exports = require('moment');

      /***/
    },

    /***/ 6641: /***/ (module) => {
      module.exports = require('next-seo');

      /***/
    },

    /***/ 562: /***/ (module) => {
      module.exports = require('next/dist/server/denormalize-page-path.js');

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

      /***/
    },

    /***/ 4365: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-middleware-regex.js');

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js');

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

    /***/ 1283: /***/ (module) => {
      module.exports = require('remark');

      /***/
    },

    /***/ 1778: /***/ (module) => {
      module.exports = require('remark-html');

      /***/
    },

    /***/ 7147: /***/ (module) => {
      module.exports = require('fs');

      /***/
    },

    /***/ 1017: /***/ (module) => {
      module.exports = require('path');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [730, 664, 365], () =>
    __webpack_exec__(6969),
  );
  module.exports = __webpack_exports__;
})();
