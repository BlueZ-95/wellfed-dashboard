import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import Table from "../../components/Table/Table";
//import consumerData from "../../mocks/consumer.mock";
import enrolledUserData from "../../mocks/enrolled_users.mock";

export default function EnrolledUsers() {
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
        <section className="relative w-full h-full py-40 min-h-screen">
            <div className="flex flex-wrap">
              <div className="px-4 md:px-10 mx-auto w-full -m-24">
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
}
