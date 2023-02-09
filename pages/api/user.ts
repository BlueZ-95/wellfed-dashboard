// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("request", req);
    console.log("request", req.body);
  }

  res.status(200);
}
