module.exports = (err, _req, res, _next) => {
  if (err.status) {
    const {status, message} = err;

    return res.status(status).json({message});
  }

  console.log('log de erro:', err);

  return res.status(500).json({message: 'Internal Error'});
};
