require('dotenv').config();

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const genToken = (data) => jwt.sign(data, JWT_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;
  } catch (error) {
    console.log('TOKEN CHECK FAILED:', error);
    return null;
  }
};

module.exports = {
  genToken,
  verifyToken,
};
