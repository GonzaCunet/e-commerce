const methods = require("micro-method-router");
export default methods({
  async get(req, res) {
    const query = req.query;
    res.status(200).json({ titulo: `It's a GET request!`, query });
  },
});
