const express = require('express');

const app = express();

const logRequest = (req, res, next) => {
  console.log('[REQ] ' + req.method + ' ' + req.path);
  return next();
}

app.use(logRequest);

app.get('/hello', (req, res) => {
  const query = req.query;
  return res.send({
    message: 'World',
    query,
  });
});

app.get('/user/:id', (req, res) => {
  const params = req.params;
  return res.send({
    message: 'World',
    params,
  });
});

app.use((req, res) => {
  return res
    .status(404)
    .send({
      message: 'Not found',
    });
})

app.listen(3000, () => {
  console.log('Server started');
});