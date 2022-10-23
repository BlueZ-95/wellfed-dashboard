import React from "react";
import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import Card from "../../components/Cards/Card";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FooterAdmin from "../../components/Footers/FooterAdmin";
import HeaderStats, {
  HeaderStatsProps,
} from "../../components/Headers/HeaderStats";
import Navbar from "../../components/Navbars/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarProps } from "../../components/Sidebar/Sidebar.types";
import Table from "../../components/Table/Table";

export const CurrentContext = React.createContext([]);
import consumerData from "../../mocks/consumer.mock";

const Consumer = () => {
  //#region data
  const sidebarProps: SidebarProps = {
    navLinks: [
      {
        href: "/enterprise",
        title: "DASHBOARD",
        icon: "fas fa-tv",
      },
      {
        href: "/enrolled-users",
        title: "Users",
        icon: "fas fa-qrcode",
        subLinks: [
          {
            href: "#",
            title: "Assign New User",
          },
          {
            href: "#",
            title: "Upload Certificate",
          },
        ],
      },
    ],
  };

  const headerStats: HeaderStatsProps = {
    cardStats: [
      {
        statSubtitle: "Courses",
        statTitle: "350,897",
        statIconName: "fa fa-book",
        statIconColor: "bg-red-500",
      },
      {
        statSubtitle: "Assigned",
        statTitle: "2,356",
        statIconName: "fa fa-list-check",
        statIconColor: "bg-orange-500",
      },
      {
        statSubtitle: "Expired",
        statTitle: "924",
        statIconName: "fa fa-hourglass-end",
        statIconColor: "bg-pink-500",
      },
      {
        statSubtitle: "Unassgined",
        statTitle: "49,65%",
        statIconName: "fa fa-bars-progress",
        statIconColor: "bg-blue-500",
      },
    ],
  };
  //#endregion
  return (
    <>
      <Sidebar navLinks={sidebarProps.navLinks} />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* <CurrentContext.Provider value={}> */}
        {/* Header */}
        <HeaderStats cardStats={headerStats.cardStats} />
        <div className="flex flex-wrap">
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="w-full mb-12 xl:mb-0 px-4">
              {consumerData && (
                <Table
                  columns={consumerData.columns}
                  data={consumerData.courses}
                />
              )}
            </div>
            <div className="w-full px-4 my-4 flex justify-center">
              <LinkCTA
                ctaText="View Courses"
                ctaLink="https://www.well-fed.com"
                target="_blank"
                ctaStyles={{
                  bgColor: "bg-wellfedPrimaryBlue",
                  hoverBgColor: "hover:bg-wellfedPrimaryGreen",
                  customClasses: "mr-1",
                }}
              />
              <LinkCTA
                ctaText="Chat With Us"
                ctaLink="https://wa.me/18475718540"
                target="_blank"
                ctaStyles={{
                  bgColor: "bg-wellfedPrimaryBlue",
                  hoverBgColor: "hover:bg-wellfedPrimaryGreen",
                  customClasses: "mr-1",
                }}
              />
            </div>
            <ContactDetails />
            <FooterAdmin />
          </div>
        </div>
        {/* </CurrentContext.Provider> */}
      </div>
    </>
  );
};

export default Consumer;
