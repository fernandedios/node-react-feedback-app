// next is a function that will pass request to the next middleware
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    // send forbidden status code
    return res.status(403).send({ error: 'Not enough credits' });
  }

  next();
};
