(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(8757);
        },
      ]);
    },
    6054: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(5893),
        i = t(381),
        a = t.n(i);
      function l(e) {
        var n = e.dateString,
          t = a()(n).toISOString();
        return (0, r.jsx)('time', {
          dateTime: n,
          children: a()(t).format('MMMM d, yyyy'),
        });
      }
    },
    2283: function (e, n, t) {
      'use strict';
      t.d(n, {
        y: function () {
          return o;
        },
        A: function () {
          return d;
        },
      });
      var r = t(5893),
        i = t(2684),
        a = t(3236),
        l = t(5684),
        s = t(1664),
        c = 'Afif Abdillah Jusuf',
        o = 'Hello from Afif \ud83d\udc4b\ud83c\udffc';
      function d(e) {
        var n = e.children,
          t = e.home,
          o = (0, i.Sx)({ base: 'xl', xl: '2xl' });
        return (0, r.jsxs)(a.xu, {
          children: [
            (0, r.jsx)('header', {
              children: t
                ? (0, r.jsxs)(a.kC, {
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 16,
                    children: [
                      (0, r.jsx)(l.qE, {
                        size: '2xl',
                        src: '/images/profile.jpg',
                        name: c,
                      }),
                      (0, r.jsx)(a.X6, {
                        as: 'h1',
                        size: o,
                        my: 4,
                        textAlign: 'center',
                        children: c,
                      }),
                    ],
                  })
                : (0, r.jsxs)(a.kC, {
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    my: 16,
                    children: [
                      (0, r.jsx)(s.default, {
                        href: '/',
                        children: (0, r.jsx)('a', {
                          children: (0, r.jsx)(l.qE, {
                            size: '2xl',
                            src: '/images/profile.jpg',
                            name: c,
                          }),
                        }),
                      }),
                      (0, r.jsx)(a.X6, {
                        as: 'h2',
                        size: '2xl',
                        my: 4,
                        children: (0, r.jsx)(s.default, {
                          href: '/',
                          children: (0, r.jsx)('a', { children: c }),
                        }),
                      }),
                    ],
                  }),
            }),
            (0, r.jsx)('main', { children: n }),
            !t &&
              (0, r.jsx)(a.xu, {
                mt: 12,
                children: (0, r.jsx)(s.default, {
                  href: '/',
                  children: (0, r.jsx)('a', {
                    children: '\u2190 Back to home',
                  }),
                }),
              }),
          ],
        });
      }
    },
    8757: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return F;
          },
          default: function () {
            return R;
          },
        });
      var r = t(5893),
        i = t(7375),
        a = t(1604),
        l = t(5031),
        s = t(8554),
        c = t.n(s),
        o = t(7294),
        d = t(6450),
        u = t(917),
        m = {
          border: '0px',
          clip: 'rect(0px, 0px, 0px, 0px)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
        },
        h = (0, a.m$)('span', { baseStyle: m });
      l.Ts && (h.displayName = 'VisuallyHidden');
      var p = (0, a.m$)('input', { baseStyle: m });
      l.Ts && (p.displayName = 'VisuallyHiddenInput');
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var x = ['label', 'thickness', 'speed', 'emptyColor', 'className'],
        v = (0, u.F4)({
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }),
        g = (0, a.Gp)(function (e, n) {
          var t = (0, a.mq)('Spinner', e),
            r = (0, a.Lr)(e),
            i = r.label,
            s = void 0 === i ? 'Loading...' : i,
            c = r.thickness,
            d = void 0 === c ? '2px' : c,
            u = r.speed,
            m = void 0 === u ? '0.45s' : u,
            p = r.emptyColor,
            g = void 0 === p ? 'transparent' : p,
            b = r.className,
            j = (function (e, n) {
              if (null == e) return {};
              var t,
                r,
                i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
              return i;
            })(r, x),
            y = (0, l.cx)('chakra-spinner', b),
            w = f(
              {
                display: 'inline-block',
                borderColor: 'currentColor',
                borderStyle: 'solid',
                borderRadius: '99999px',
                borderWidth: d,
                borderBottomColor: g,
                borderLeftColor: g,
                animation: v + ' ' + m + ' linear infinite',
              },
              t,
            );
          return o.createElement(
            a.m$.div,
            f({ ref: n, __css: w, className: y }, j),
            s && o.createElement(h, null, s),
          );
        });
      function b(e, n) {
        if (null == e) return {};
        var t,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
        return i;
      }
      function j() {
        return (j =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      l.Ts && (g.displayName = 'Spinner');
      var y = [
          'size',
          'colorScheme',
          'variant',
          'className',
          'spacing',
          'isAttached',
          'isDisabled',
        ],
        w = (0, d.kr)({ strict: !1, name: 'ButtonGroupContext' }),
        S = w[0],
        _ = w[1],
        k = (0, a.Gp)(function (e, n) {
          var t = e.size,
            r = e.colorScheme,
            i = e.variant,
            s = e.className,
            c = e.spacing,
            d = void 0 === c ? '0.5rem' : c,
            u = e.isAttached,
            m = e.isDisabled,
            h = b(e, y),
            p = (0, l.cx)('chakra-button__group', s),
            f = o.useMemo(
              function () {
                return { size: t, colorScheme: r, variant: i, isDisabled: m };
              },
              [t, r, i, m],
            ),
            x = { display: 'inline-flex' };
          return (
            (x = j(
              {},
              x,
              u
                ? {
                    '> *:first-of-type:not(:last-of-type)': {
                      borderEndRadius: 0,
                    },
                    '> *:not(:first-of-type):not(:last-of-type)': {
                      borderRadius: 0,
                    },
                    '> *:not(:first-of-type):last-of-type': {
                      borderStartRadius: 0,
                    },
                  }
                : { '& > *:not(style) ~ *:not(style)': { marginStart: d } },
            )),
            o.createElement(
              S,
              { value: f },
              o.createElement(
                a.m$.div,
                j({ ref: n, role: 'group', __css: x, className: p }, h),
              ),
            )
          );
        });
      l.Ts && (k.displayName = 'ButtonGroup');
      var C = [
          'label',
          'placement',
          'spacing',
          'children',
          'className',
          '__css',
        ],
        N = function (e) {
          var n = e.label,
            t = e.placement;
          e.spacing;
          var r = e.children,
            i =
              void 0 === r
                ? o.createElement(g, {
                    color: 'currentColor',
                    width: '1em',
                    height: '1em',
                  })
                : r,
            s = e.className,
            c = e.__css,
            d = b(e, C),
            u = (0, l.cx)('chakra-button__spinner', s),
            m = 'start' === t ? 'marginEnd' : 'marginStart',
            h = o.useMemo(
              function () {
                var e;
                return j(
                  (((e = {
                    display: 'flex',
                    alignItems: 'center',
                    position: n ? 'relative' : 'absolute',
                  })[m] = n ? '0.5rem' : 0),
                  (e.fontSize = '1em'),
                  (e.lineHeight = 'normal'),
                  e),
                  c,
                );
              },
              [c, n, m],
            );
          return o.createElement(
            a.m$.div,
            j({ className: u }, d, { __css: h }),
            i,
          );
        };
      l.Ts && (N.displayName = 'ButtonSpinner');
      var E = ['children', 'className'],
        O = function (e) {
          var n = e.children,
            t = e.className,
            r = b(e, E),
            i = o.isValidElement(n)
              ? o.cloneElement(n, { 'aria-hidden': !0, focusable: !1 })
              : n,
            s = (0, l.cx)('chakra-button__icon', t);
          return o.createElement(
            a.m$.span,
            j(
              { display: 'inline-flex', alignSelf: 'center', flexShrink: 0 },
              r,
              { className: s },
            ),
            i,
          );
        };
      l.Ts && (O.displayName = 'ButtonIcon');
      var I = [
          'isDisabled',
          'isLoading',
          'isActive',
          'isFullWidth',
          'children',
          'leftIcon',
          'rightIcon',
          'loadingText',
          'iconSpacing',
          'type',
          'spinner',
          'spinnerPlacement',
          'className',
          'as',
        ],
        z = (0, a.Gp)(function (e, n) {
          var t = _(),
            r = (0, a.mq)('Button', j({}, t, e)),
            s = (0, a.Lr)(e),
            d = s.isDisabled,
            u = void 0 === d ? (null == t ? void 0 : t.isDisabled) : d,
            m = s.isLoading,
            h = s.isActive,
            p = s.isFullWidth,
            f = s.children,
            x = s.leftIcon,
            v = s.rightIcon,
            g = s.loadingText,
            y = s.iconSpacing,
            w = void 0 === y ? '0.5rem' : y,
            S = s.type,
            k = s.spinner,
            C = s.spinnerPlacement,
            E = void 0 === C ? 'start' : C,
            O = s.className,
            z = s.as,
            P = b(s, I),
            T = o.useMemo(
              function () {
                var e,
                  n = c()(
                    {},
                    null != (e = null == r ? void 0 : r._focus) ? e : {},
                    { zIndex: 1 },
                  );
                return j(
                  {
                    display: 'inline-flex',
                    appearance: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    userSelect: 'none',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                    outline: 'none',
                    width: p ? '100%' : 'auto',
                  },
                  r,
                  !!t && { _focus: n },
                );
              },
              [r, t, p],
            ),
            A = (function (e) {
              var n = o.useState(!e),
                t = n[0],
                r = n[1];
              return {
                ref: o.useCallback(function (e) {
                  e && r('BUTTON' === e.tagName);
                }, []),
                type: t ? 'button' : void 0,
              };
            })(z),
            H = A.ref,
            M = A.type,
            L = { rightIcon: v, leftIcon: x, iconSpacing: w, children: f };
          return o.createElement(
            a.m$.button,
            j(
              {
                disabled: u || m,
                ref: (0, i.qq)(n, H),
                as: z,
                type: null != S ? S : M,
                'data-active': (0, l.PB)(h),
                'data-loading': (0, l.PB)(m),
                __css: T,
                className: (0, l.cx)('chakra-button', O),
              },
              P,
            ),
            m &&
              'start' === E &&
              o.createElement(
                N,
                {
                  className: 'chakra-button__spinner--start',
                  label: g,
                  placement: 'start',
                },
                k,
              ),
            m
              ? g ||
                  o.createElement(
                    a.m$.span,
                    { opacity: 0 },
                    o.createElement(B, L),
                  )
              : o.createElement(B, L),
            m &&
              'end' === E &&
              o.createElement(
                N,
                {
                  className: 'chakra-button__spinner--end',
                  label: g,
                  placement: 'end',
                },
                k,
              ),
          );
        });
      function B(e) {
        var n = e.leftIcon,
          t = e.rightIcon,
          r = e.children,
          i = e.iconSpacing;
        return o.createElement(
          o.Fragment,
          null,
          n && o.createElement(O, { marginEnd: i }, n),
          r,
          t && o.createElement(O, { marginStart: i }, t),
        );
      }
      l.Ts && (z.displayName = 'Button');
      var P = ['icon', 'children', 'isRound', 'aria-label'],
        T = (0, a.Gp)(function (e, n) {
          var t = e.icon,
            r = e.children,
            i = e.isRound,
            a = e['aria-label'],
            l = b(e, P),
            s = t || r,
            c = o.isValidElement(s)
              ? o.cloneElement(s, { 'aria-hidden': !0, focusable: !1 })
              : null;
          return o.createElement(
            z,
            j(
              {
                padding: '0',
                borderRadius: i ? 'full' : void 0,
                ref: n,
                'aria-label': a,
              },
              l,
            ),
            c,
          );
        });
      l.Ts && (T.displayName = 'IconButton');
      var A = t(3236),
        H = t(2962),
        M = t(9008),
        L = t(1664);
      function G(e) {
        var n = e.name;
        return 'facebook' === n
          ? (0, r.jsx)(A.xu, {
              w: 5,
              h: 5,
              style: { fill: 'currentColor' },
              children: (0, r.jsx)('svg', {
                role: 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: (0, r.jsx)('path', {
                  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }),
              }),
            })
          : 'twitter' === n
          ? (0, r.jsx)(A.xu, {
              w: 5,
              h: 5,
              style: { fill: 'currentColor' },
              children: (0, r.jsx)('svg', {
                role: 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: (0, r.jsx)('path', {
                  d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                }),
              }),
            })
          : 'github' === n
          ? (0, r.jsx)(A.xu, {
              w: 5,
              h: 5,
              style: { fill: 'currentColor' },
              children: (0, r.jsxs)('svg', {
                role: 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: [
                  (0, r.jsx)('title', { children: 'GitHub icon' }),
                  (0, r.jsx)('path', {
                    d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                  }),
                ],
              }),
            })
          : 'linkedin' === n
          ? (0, r.jsx)(A.xu, {
              w: 5,
              h: 5,
              style: { fill: 'currentColor' },
              children: (0, r.jsxs)('svg', {
                role: 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: [
                  (0, r.jsx)('title', { children: 'LinkedIn icon' }),
                  (0, r.jsx)('path', {
                    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                  }),
                ],
              }),
            })
          : (0, r.jsx)(A.xu, {});
      }
      var V = t(6054),
        D = t(2283);
      function $(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var F = !0;
      function R(e) {
        var n = e.allPostsData;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(H.PB, { title: 'Home' }),
            (0, r.jsx)(A.W2, {
              maxW: 'container.sm',
              children: (0, r.jsxs)(D.A, {
                home: !0,
                children: [
                  (0, r.jsx)(M.default, {
                    children: (0, r.jsx)('title', { children: D.y }),
                  }),
                  (0, r.jsxs)(A.kC, {
                    direction: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    children: [
                      (0, r.jsx)(A.xv, {
                        fontSize: 'xl',
                        pb: '4',
                        children:
                          'Hello, my name is Afif, just call me Apep. My Professional skill are a Full-Stack developer and have a much year of experiences especially on Web Based Program.',
                      }),
                      (0, r.jsx)(A.xv, {
                        fontSize: 'xl',
                        pb: '4',
                        children:
                          'Contact me if you need anything on me, list on the below.',
                      }),
                      (0, r.jsx)(A.xu, {
                        mx: 'auto',
                        children: (0, r.jsxs)(A.kC, {
                          alignItems: 'center',
                          justifyContent: 'center',
                          wrap: 'wrap',
                          children: [
                            (0, r.jsxs)(z, {
                              colorScheme: 'facebook',
                              children: [
                                (0, r.jsx)(G, { name: 'facebook' }),
                                'Facebook',
                              ],
                            }),
                            (0, r.jsxs)(z, {
                              colorScheme: 'twitter',
                              children: [
                                (0, r.jsx)(G, { name: 'twitter' }),
                                'Twitter',
                              ],
                            }),
                            (0, r.jsxs)(z, {
                              colorScheme: 'github',
                              children: [
                                (0, r.jsx)(G, { name: 'github' }),
                                'Github',
                              ],
                            }),
                            (0, r.jsxs)(z, {
                              colorScheme: 'linkedin',
                              children: [
                                (0, r.jsx)(G, { name: 'linkedin' }),
                                'LinkedIn 1',
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)('section', {
                    children: [
                      (0, r.jsx)(A.X6, {
                        as: 'h2',
                        size: 'lg',
                        mb: 6,
                        children: 'Blog',
                      }),
                      (0, r.jsx)(A.aV, {
                        spacing: 3,
                        children: n.map(function (e) {
                          var n = e.id,
                            t = e.date,
                            i = e.title;
                          return (0,
                          r.jsxs)(A.HC, { cursor: 'pointer', children: [(0, r.jsx)(L.default, { href: '/posts/'.concat(n), passHref: !0, children: (0, r.jsx)(A.X6, { as: 'h3', size: 'md', children: i }) }), (0, r.jsx)('small', { className: 'prose lg:prose-xl dark:text-white font-light', children: (0, r.jsx)(V.Z, { dateString: t }) })] }, n);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      R.layoutProps = {
        Layout: function (e) {
          return (0, r.jsx)(
            A.xu,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                  r = Object.keys(t);
                'function' === typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(t).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }),
                  )),
                  r.forEach(function (n) {
                    $(e, n, t[n]);
                  });
              }
              return e;
            })({ borderLeft: 4 }, e),
          );
        },
      };
    },
  },
  function (e) {
    e.O(0, [885, 782, 774, 888, 179], function () {
      return (n = 8581), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
