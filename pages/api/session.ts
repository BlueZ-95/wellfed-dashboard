// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie, setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      email: string;
      userType: string;
    }
  | {
      error: string;
    };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("req received");

    setCookie("userDetails", req.body, { req, res, maxAge: 60 * 60 * 24 });
  }
  let userCookie = getCookie("userDetails");
  console.log(userCookie);

  // userCookie = JSON.parse(JSON.stringify(userCookie));

  res
    .status(200)
    .json(getCookie("userDetails") ?? { error: "Cookie not found" });
}
