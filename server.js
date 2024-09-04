const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 8080;
const STATIC_ROOT = `${__dirname}/public`;

function contentType(url) {
  const ext = url.split('.').pop();
  const contentTypes = {
    js: 'application/javascript',
    html: 'text/html',
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    woff: 'font/woff',
    map: 'application/octet-stream',
    wasm: 'application/wasm'
  };

  

  if(contentTypes[ext] === undefined) return contentTypes['html'];

  return contentTypes[ext];
}

function static(req, res) {
  try {
    let pathname = url.parse(req.url).pathname;

    if(pathname === '/') pathname = '/index.html' 

    console.log(pathname);

    const fileContent = fs.readFileSync(STATIC_ROOT + pathname);
    res.writeHead(200, {'Content-Type': contentType(pathname)});

    if(fileContent === null) return res.end('not found');
    return res.end(fileContent);
  } catch (exception) {
    console.log('exception found..', exception);
  }
}

function respondPage(res, { html }) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSPro</title>
        <style type="text/css">
          body {
            background-color: #eee;
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        ${html}
        <script type="module" src="/components/cspro-iframe.js"></script>
      </body>
  `);
}

function proxy(req, res) {
  const url = req.url;

  console.log('proxying to:', url);

  const options = {
    hostname: PROXY_HOST,
    port: PROXY_PORT,
    path: url,
    method: 'GET',
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });

  proxyReq.on('error', (e) => {
    console.error('proxyReq error', e);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/test-page') return respondPage(res, {html: `<div>test</div>`});
  return static(req, res);
});

server.listen(PORT, () => console.log(`Server running at PORT ${PORT}/`));