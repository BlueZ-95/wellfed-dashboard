import React from "react";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import LinkCTA from "components/LinkCTA/LinkCTA";
import ContactDetails from "components/ContactDetails/ContactDetails";

export default function Admin({ children }) {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="relative bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <div className="w-full px-4 flex justify-center">
            <LinkCTA
              ctaText="View Courses"
              ctaLink="https://www.well-fed.com"
              target="_blank"
              ctaColors={{
                bgColor: "bg-wellfedPrimaryBlue",
                hoverBgColor: "bg-wellfedPrimaryGreen",
              }}
            />
            <LinkCTA
              ctaText="Chat With Us"
              ctaLink="https://wa.me/18475718540"
              target="_blank"
              ctaColors={{
                bgColor: "bg-wellfedPrimaryBlue",
                hoverBgColor: "bg-wellfedPrimaryGreen",
              }}
            />
          </div>
          <ContactDetails />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
