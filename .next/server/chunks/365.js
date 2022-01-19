'use strict';
exports.id = 365;
exports.ids = [365];
exports.modules = {
  /***/ 6054: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ Date,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__,
      );
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2245);
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    function Date({ dateString }) {
      const date =
        moment__WEBPACK_IMPORTED_MODULE_1___default()(dateString).toISOString();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'time',
        {
          dateTime: dateString,
          children:
            moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format(
              'MMMM d, yyyy',
            ),
        },
      );
    }

    /***/
  },

  /***/ 2283: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ y: () => /* binding */ siteTitle,
      /* harmony export */ A: () => /* binding */ Layout,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__,
      );
    /* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8930);
    /* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__,
      );
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1664);

    const name = 'Afif Abdillah Jusuf';
    const siteTitle = 'Hello from Afif 👋🏼';
    function Layout({ children, home }) {
      const headingSize = (0,
      _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: 'xl',
        xl: '2xl',
      });
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box,
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'header',
              {
                children: home
                  ? /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex,
                      {
                        direction: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 16,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar,
                            {
                              size: '2xl',
                              src: '/images/profile.jpg',
                              name: name,
                            },
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading,
                            {
                              as: 'h1',
                              size: headingSize,
                              my: 4,
                              textAlign: 'center',
                              children: name,
                            },
                          ),
                        ],
                      },
                    )
                  : /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex,
                      {
                        direction: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        my: 16,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_2__['default'],
                            {
                              href: '/',
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'a',
                                  {
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar,
                                        {
                                          size: '2xl',
                                          src: '/images/profile.jpg',
                                          name: name,
                                        },
                                      ),
                                  },
                                ),
                            },
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading,
                            {
                              as: 'h2',
                              size: '2xl',
                              my: 4,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  next_link__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ],
                                  {
                                    href: '/',
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'a',
                                        {
                                          children: name,
                                        },
                                      ),
                                  },
                                ),
                            },
                          ),
                        ],
                      },
                    ),
              },
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'main',
              {
                children: children,
              },
            ),
            !home &&
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box,
                {
                  mt: 12,
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_2__['default'],
                      {
                        href: '/',
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'a',
                            {
                              children: '← Back to home',
                            },
                          ),
                      },
                    ),
                },
              ),
          ],
        },
      );
    }

    /***/
  },

  /***/ 381: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ ld: () => /* binding */ getSortedPostsData,
      /* harmony export */ Le: () => /* binding */ getAllPostIds,
      /* harmony export */ AU: () => /* binding */ getPostData,
      /* harmony export */
    });
    /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(7147);
    /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8076);
    /* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        gray_matter__WEBPACK_IMPORTED_MODULE_1__,
      );
    /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1017);
    /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(1283);
    /* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1778);
    /* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        remark_html__WEBPACK_IMPORTED_MODULE_4__,
      );

    const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(
      process.cwd(),
      'src/posts',
    );
    function getSortedPostsData() {
      // Get file names under /posts
      const fileNames =
        fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
      const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/u, '');
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(
          postsDirectory,
          fileName,
        );
        const fileContents =
          fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(
            fullPath,
            'utf8',
          );
        // Use gray-matter to parse the post metadata section
        const matterResult =
          gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);
        // Combine the data with the id
        return {
          id,
          ...matterResult.data,
        };
      });
      // Sort posts by date
      return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      });
    }
    function getAllPostIds() {
      const filenames =
        fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
      // return array like
      // [
      //   {
      //     params: {
      //       id: 'ssg-ssr'
      //     }
      //   }
      // ]
      //   {
      //     params: {
      //       id: 'pre-rendering'
      //     }
      //   }
      // ]
      return filenames.map((filename) => {
        return {
          params: {
            id: filename.replace(/\.md$/u, ''),
          },
        };
      });
    }
    async function getPostData(id) {
      const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(
        postsDirectory,
        `${id}.md`,
      );
      const fileContents =
        fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(
          fullPath,
          'utf8',
        );
      // use gray-matter to parse post metadata section
      const matterResult =
        gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);
      // use remark to convert markdown into html string
      const processedContent =
        await remark__WEBPACK_IMPORTED_MODULE_3___default()()
          .use(remark_html__WEBPACK_IMPORTED_MODULE_4___default())
          .process(matterResult.content);
      const contentHtml = processedContent.toString();
      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    }

    /***/
  },
};
