import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center">
              For Support, call{" "}
              <a href="tel:+1(847)571-8540">+1 (847) 571-8540</a> or Email us at{" "}
              <a href="mailto: info@well-fed.com">info@well-fed.com</a>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center">
              FSSMC # 00004221 | Servsafe # 9049878 | COCIN - 183
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
