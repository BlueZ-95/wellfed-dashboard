import Image from "next/image";
import { useRef, useState } from "react";
import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FooterAdmin from "../../components/Footers/FooterAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
//import consumerData from "../../mocks/consumer.mock";
import enrolledUserData from "../../mocks/enrolled_users.mock";


export default function Login() {

  // const emailFieldRef = useRef(null);
  // const passwordFieldRef = useRef(null);
  // const consumerRadioRef = useRef(null);
  // const enterpriseRadioRef = useRef(null);

  // function initiateLogin(){
  //   console.log(emailFieldRef.current.value);
  //   console.log(passwordFieldRef.current.value);
  //   console.log(consumerRadioRef.current.checked);
  //   console.log(enterpriseRadioRef.current.checked);
  // }

  

  return (
    <>
    
      <main>
      <Sidebar />
      
        <section className="relative w-full h-full py-40 min-h-screen">
            
        <div className="relative md:ml-64 bg-blueGray-100">
            
        <div className="flex flex-wrap">
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="w-full mb-12 xl:mb-0 px-4">
            <div className="w-full px-4 my-4 flex justify-end">
              <LinkCTA
                ctaText="Assign New User"
                ctaLink="https://www.well-fed.com"
                target="_blank"
                ctaStyles={{
                  bgColor: "bg-wellfedPrimaryBlue",
                  hoverBgColor: "hover:bg-wellfedPrimaryGreen",
                  customClasses: "mr-1",
                }}
              />
              <LinkCTA
                ctaText="Upload 3rd Party Certificates"
                ctaLink="https://wa.me/18475718540"
                target="_blank"
                ctaStyles={{
                  bgColor: "bg-wellfedPrimaryBlue",
                  hoverBgColor: "hover:bg-wellfedPrimaryGreen",
                  customClasses: "mr-1",
                }}
              />
            </div>
              {enrolledUserData && (
                <Table
                  columns={enrolledUserData.columns}
                  data={enrolledUserData.users}
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
        </div>
        </section>
      </main>
    </>
  );
}
