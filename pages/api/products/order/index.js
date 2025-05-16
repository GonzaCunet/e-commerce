const methods = require("micro-method-router");

export default methods({
  async post(req, res) {
    res.status(200).send(`It's a post request!`);
  },
});
