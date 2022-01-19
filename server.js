const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
});
const handle = app.getRequestHandler();
// default PORT is 3000
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(async () => {
    const { url } = await createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/a') {
        app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        app.render(req, res, '/b', query);
      } else {
        handle(req, res, parsedUrl);
      }
    }).listen(PORT);
    console.log(`> Ready on ${url}`);
  })
  .catch((error) => console.error("error can't listen", error));
