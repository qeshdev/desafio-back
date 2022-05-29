const express = require('express');
const app = express();
const http = require('http').createServer(app);
const routes = require('./routes/index');
const error = require('../middleware/error');

app.use(express.json());

app.use(routes);
app.use(error);

module.exports = http;
