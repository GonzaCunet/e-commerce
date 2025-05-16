const methods = require("micro-method-router");
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send(`soy ipn`);
  },
});
