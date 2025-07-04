const methods = require("micro-method-router");
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send(`It's a GET request!`);
  },
  async patch(req, res) {
    res.status(200).send(`It's a PATCH request!`);
  },
});
