import type { NextApiRequest, NextApiResponse } from "next";
import { getRegistrationTemplate } from "../../../lib/email-templates/registration";
import { UserAuthentication } from "../../../scripts/APIs/UserAuthenticationService";

interface UserRegistrationProps {
  userName: string;
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Register User in Strapi
    if (req.method === "POST") {
      console.info("New user registration request received");

      const { customerInput } = req.body.variables;

      let registrationData: UserRegistrationProps = {
        email: customerInput.email,
        userName: customerInput.email,
        password: Math.random().toString(36).slice(-8),
        fullName: `${customerInput.firstName} ${customerInput.lastName}`,
        phone: customerInput.phone,
      };

      await UserAuthentication.instance.register(
        registrationData.email,
        registrationData.userName,
        registrationData.password,
        registrationData.fullName,
        registrationData.phone
      );

      // Send Mail

      const sendRegistrationMail = () => {
        let nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        const mailData = {
          from: process.env.EMAIL,
          to: registrationData.email,
          subject: `Account created successfully`,
          html: getRegistrationTemplate(registrationData),
        };

        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.log(err);
            res.status(err.code);
            res
              .status(200)
              .send("Something went wrong while sending Registration email");
          } else {
            console.log("email sent successfully");
            res.status(200).json(req.body);
          }
        });
      };

      sendRegistrationMail();
    }
    res.status(200);
  } catch (error) {
    res.status(500).send("Something went wrong at server side.", error);
  }
}
