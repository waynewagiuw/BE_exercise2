const http = require('http');
const url = require('url');
const members = require('./members');
const users = require('./users');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the home page');
  } else if (parsedUrl.pathname === '/about') {
    const currentDate = new Date().toISOString();
    const responseJson = {
      Status: 'success',
      Message: 'response success',
      Description: 'Exercise #03',
      Date: currentDate,
      Data: members.getMembers(),
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseJson));
  } else if (parsedUrl.pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
