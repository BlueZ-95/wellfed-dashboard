import React from "react";

// components
import AdminNavbar from "components/Navbars/Navbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import LinkCTA from "components/LinkCTA/LinkCTA";
import ContactDetails from "components/ContactDetails/ContactDetails";
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
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
