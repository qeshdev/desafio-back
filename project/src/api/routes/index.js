const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('APP is running');
});

module.exports = router;
