import type { NextApiRequest, NextApiResponse } from "next";
import { getRegistrationTemplate } from "../../../lib/email-templates/registration";
import { UserAuthentication } from "../../../scripts/APIs/UserAuthenticationService";

interface UserRegistrationProps {
  userName: string;
  email: string;
  password: string;
  fullName: string;
  phone: string;
  isEnterprise: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Register User in Strapi
    if (req.method === "POST") {
      const { email, first_name, last_name, phone, tags } = req.body.customer;

      let registrationData: UserRegistrationProps = {
        email: email,
        userName: email,
        password: Math.random().toString(36).slice(-8),
        fullName: `${first_name} ${last_name}`,
        phone: phone,
        isEnterprise: tags === "Enterprise",
      };

      const isExistingUser = await UserAuthentication.instance.isExistingUser(
        registrationData.email
      );

      // Send Mail
      const sendRegistrationMail = async () => {
        await new Promise((resolve, reject) => {
          let nodemailer = require("nodemailer");

          const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: process.env.NEXT_PUBLIC_EMAIL,
              pass: process.env.NEXT_PUBLIC_PASSWORD,
            },
            secure: true,
          });

          const mailData = {
            from: process.env.EMAIL,
            to: registrationData.email,
            subject: `Account created successfully`,
            html: getRegistrationTemplate(registrationData, isExistingUser),
          };

          // send mail
          transporter.sendMail(mailData, (err, info) => {
            if (err) {
              console.log(err);
              reject(err);
              res
                .status(err.code)
                .send("Something went wrong while sending Registration email");
            } else {
              console.log("email sent successfully");
              resolve(info);
            }
          });
        });
      };

      await sendRegistrationMail().then(async () => {
        console.info("New user registration request received");

        if (!isExistingUser) {
          await UserAuthentication.instance.register(
            registrationData.email,
            registrationData.userName,
            registrationData.password,
            registrationData.fullName,
            registrationData.phone,
            registrationData.isEnterprise
          );
        }

        delete registrationData.password;

        res.status(200).json(registrationData);
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
