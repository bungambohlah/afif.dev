(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [646],
  {
    1369: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/posts/[id]',
        function () {
          return t(9604);
        },
      ]);
    },
    6054: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(5893),
        i = t(381),
        s = t.n(i);
      function c(e) {
        var n = e.dateString,
          t = s()(n).toISOString();
        return (0, r.jsx)('time', {
          dateTime: n,
          children: s()(t).format('MMMM d, yyyy'),
        });
      }
    },
    2283: function (e, n, t) {
      'use strict';
      t.d(n, {
        y: function () {
          return d;
        },
        A: function () {
          return a;
        },
      });
      var r = t(5893),
        i = t(2684),
        s = t(3236),
        c = t(5684),
        l = t(1664),
        u = 'Afif Abdillah Jusuf',
        d = 'Hello from Afif \ud83d\udc4b\ud83c\udffc';
      function a(e) {
        var n = e.children,
          t = e.home,
          d = (0, i.Sx)({ base: 'xl', xl: '2xl' });
        return (0, r.jsxs)(s.xu, {
          children: [
            (0, r.jsx)('header', {
              children: t
                ? (0, r.jsxs)(s.kC, {
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 16,
                    children: [
                      (0, r.jsx)(c.qE, {
                        size: '2xl',
                        src: '/images/profile.jpg',
                        name: u,
                      }),
                      (0, r.jsx)(s.X6, {
                        as: 'h1',
                        size: d,
                        my: 4,
                        textAlign: 'center',
                        children: u,
                      }),
                    ],
                  })
                : (0, r.jsxs)(s.kC, {
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    my: 16,
                    children: [
                      (0, r.jsx)(l.default, {
                        href: '/',
                        children: (0, r.jsx)('a', {
                          children: (0, r.jsx)(c.qE, {
                            size: '2xl',
                            src: '/images/profile.jpg',
                            name: u,
                          }),
                        }),
                      }),
                      (0, r.jsx)(s.X6, {
                        as: 'h2',
                        size: '2xl',
                        my: 4,
                        children: (0, r.jsx)(l.default, {
                          href: '/',
                          children: (0, r.jsx)('a', { children: u }),
                        }),
                      }),
                    ],
                  }),
            }),
            (0, r.jsx)('main', { children: n }),
            !t &&
              (0, r.jsx)(s.xu, {
                mt: 12,
                children: (0, r.jsx)(l.default, {
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
    9604: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return l;
          },
          default: function () {
            return u;
          },
        });
      var r = t(5893),
        i = t(9008),
        s = t(6054),
        c = t(2283),
        l = !0;
      function u(e) {
        var n = e.postData;
        return (0, r.jsxs)(c.A, {
          children: [
            (0, r.jsx)(i.default, {
              children: (0, r.jsx)('title', { children: n.title }),
            }),
            (0, r.jsxs)('article', {
              children: [
                (0, r.jsx)('h1', { children: n.title }),
                (0, r.jsx)('div', {
                  children: (0, r.jsx)(s.Z, { dateString: n.date }),
                }),
                (0, r.jsx)('div', {
                  dangerouslySetInnerHTML: { __html: n.contentHtml },
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [885, 782, 774, 888, 179], function () {
      return (n = 1369), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);