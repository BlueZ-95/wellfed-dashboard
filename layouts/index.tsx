import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footers/Footer";
import Navbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { UserContext } from "../contexts/userContext";
import { consumerNavLinks, enterpriseNavLinks } from "../scripts/UIConfigs";
import { SessionProps, SidebarProps } from "../scripts/UIConfigs.types";

const Layout = ({ children }) => {
  const { userDetails } = useContext<SessionProps>(UserContext);

  const [sidebarProps, setSidebarProps] = useState<SidebarProps>({
    navLinks: [],
  });

  useEffect(() => {
    setSidebarProps(
      userDetails?.user?.userType === "consumer"
        ? consumerNavLinks
        : enterpriseNavLinks
    );
  }, [userDetails]);

  return (
    <>
      <Sidebar navLinks={sidebarProps.navLinks} />
      <div className="relative md:ml-64 bg-blueGray-100">
        {<Navbar />}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
