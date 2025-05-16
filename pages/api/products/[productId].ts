const methods = require("micro-method-router");
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const productId = req.query.productId;
    res.status(200).send(`soy el get` + " " + productId);
  },
});
