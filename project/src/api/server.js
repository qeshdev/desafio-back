require('dotenv').config();

const port = process.env.PORT;
const http = require('./app');

http.listen(port);
console.log(`API running on port ${port}`);
