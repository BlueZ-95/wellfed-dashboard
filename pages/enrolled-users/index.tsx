import Popup from "reactjs-popup";
import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import { withAuth } from "../../components/HOC/withAuth";
import Table from "../../components/Table/Table";
import enrolledUserData from "../../mocks/enrolled_users.mock";

import { useState } from "react";
import ButtonWithModal from "../../components/Modal/ButtonWithModal";

export default function EnrolledUsers() {
  const [showModal, setShowModal] = useState(false);

const EnrolledUsers = () => {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="flex flex-wrap">
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="w-full mb-12 mt-6 xl:mb-0 px-4">
                <div className="w-full px-4 my-4 flex justify-between">
                  <div className="flex w-1/2  ">
                    <label className="w-1/4  my-auto">Select Course : </label>
                    <select className="text-sm border-2 rounded p-1 border-solid  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ">
                      <option value="dog">Food Management</option>
                      <option value="cat">Sexual Harassment</option>
                      <option value="hamster">Allergy Training</option>
                      <option value="parrot">Finance Management</option>
                    </select>
                  </div>
                  <div>
                    <ButtonWithModal showFileUpload={false} buttonText="Assign New User"/>
                    <ButtonWithModal showFileUpload={true} buttonText="Upload 3rd Party Certficates"/>
                    
                  </div>
              <div className="w-full mb-12 xl:mb-0 px-4">
                <div className="w-full px-4 my-4 flex justify-end">
                  <LinkCTA
                    ctaText="Assign New User"
                    ctaLink="https://www.well-fed.com"
                    target="_blank"
                    variant="primary"
                    customClasses="mr-1"
                  />
                  <LinkCTA
                    ctaText="Upload 3rd Party Certificates"
                    ctaLink="https://wa.me/18475718540"
                    target="_blank"
                    variant="primary"
                    customClasses="mr-1"
                  />
                </div>
                {enrolledUserData && (
                  <Table
                    columns={enrolledUserData.columns}
                    data={enrolledUserData.users}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default withAuth(EnrolledUsers);
