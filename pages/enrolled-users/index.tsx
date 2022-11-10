import LinkCTA from "../../components/Base/LinkCTA/LinkCTA";
import { withAuth } from "../../components/HOC/withAuth";
import Table from "../../components/Table/Table";
import enrolledUserData from "../../mocks/enrolled_users.mock";
const EnrolledUsers = () => {
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
};

export default withAuth(EnrolledUsers);
