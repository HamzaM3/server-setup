const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.end("test: " + req.url);
})

app.listen(5000)
