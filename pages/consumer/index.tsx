import React from "react";
import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FooterAdmin from "../../components/Footers/FooterAdmin";
import HeaderStats from "../../components/Headers/HeaderStats";
import Navbar from "../../components/Navbars/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

export const CurrentContext = React.createContext([]);
import consumerData from "../../mocks/consumer.mock";

const Consumer = () => {
  const courses = [];

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        <CurrentContext.Provider value={courses}>
          {/* Header */}
          <HeaderStats />
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
              {/* {courses && courses.length > 0 && (
              <div className="flex flex-wrap">
                {courses?.map((course) => {
                  return <Card data={course} />;
                })}
                {courses?.map((course) => {
                  return <Card data={course} />;
                })}
                {courses?.map((course) => {
                  return <Card data={course} />;
                })}
              </div>
            )} */}
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
        </CurrentContext.Provider>
      </div>
    </>
  );
};

export default Consumer;
