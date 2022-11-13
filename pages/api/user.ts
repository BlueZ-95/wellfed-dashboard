// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

// {
//     "id": 706405506930370084,
//     "email": "bob@biller.com",
//     "accepts_marketing": true,
//     "created_at": null,
//     "updated_at": null,
//     "first_name": "Bob",
//     "last_name": "Biller",
//     "orders_count": 0,
//     "state": "disabled",
//     "total_spent": "0.00",
//     "last_order_id": null,
//     "note": "This customer loves ice cream",
//     "verified_email": true,
//     "multipass_identifier": null,
//     "tax_exempt": false,
//     "tags": "",
//     "last_order_name": null,
//     "currency": "USD",
//     "phone": null,
//     "addresses": [

//     ],
//     "accepts_marketing_updated_at": null,
//     "marketing_opt_in_level": null,
//     "email_marketing_consent": null,
//     "sms_marketing_consent": null,
//     "admin_graphql_api_id": "gid:\/\/shopify\/Customer\/706405506930370084"
//   }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("request", req);
    console.log("request", req.body);
  }

  const fs = require("fs");

  fs.writeFile("./sample-req-body.txt", JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  res.status(200).json(req.body);
}
