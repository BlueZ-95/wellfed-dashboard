import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import HeaderStats, {
  HeaderStatsProps,
} from "../../components/Headers/HeaderStats";
import Table from "../../components/Table/Table";
import { UserContext } from "../../contexts/userContext";

import consumerData from "../../mocks/consumer.mock";
import { APIWrapper } from "../../scripts/APIs/ConsumerApi";
import { CoursesListProps, SessionProps } from "../../scripts/UIConfigs.types";

const Consumer = () => {
  const { userDetails } = useContext<SessionProps>(UserContext);
  const [courses, setCourses] = useState<CoursesListProps>(null);

  //#region data
  const headerStats: HeaderStatsProps = {
    cardStats: [
      {
        statSubtitle: "Courses",
        statTitle: "350,897",
        statIconName: "fa fa-book",
        statIconColor: "bg-red-500",
      },
      {
        statSubtitle: "Not Initiated",
        statTitle: "2,356",
        statIconName: "fa fa-hourglass-start",
        statIconColor: "bg-orange-500",
      },
      {
        statSubtitle: "In Progress",
        statTitle: "924",
        statIconName: "fa fa-bars-progress",
        statIconColor: "bg-pink-500",
      },
      {
        statSubtitle: "Completed",
        statTitle: "49,65%",
        statIconName: "fa fa-check",
        statIconColor: "bg-blue-500",
      },
    ],
  };

  useEffect(() => {
    console.log("userDetails", userDetails);

    const _courses = APIWrapper.consumerAPIs.fetchCourses();
    console.log("courses", _courses);

    // setCourses(_courses);
  }, []);

  //#endregion
  return (
    <>
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
          {courses && courses.courseList.length > 0 && (
            <div className="flex flex-wrap">
              {courses?.courseList.map((course) => {
                return <Card data={course} />;
              })}
              {courses?.courseList.map((course) => {
                return <Card data={course} />;
              })}
              {courses?.courseList.map((course) => {
                return <Card data={course} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Consumer;

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://wellfed-content-api-rmedia.herokuapp.com/api/courses",
//     {
//       headers: {
//         Authorization: `Bearer ${userDetails}`,
//       },
//     }
//   );
//   const data = await res.json();

//   const rawData = data?.data;

//   const courses = [];

//   if (Array.isArray(rawData) && rawData.length > 0) {
//     rawData.forEach((item) => {
//       courses.push({
//         CourseID: item.id,
//         Title: item.attributes.Title,
//         Label: item.attributes.Label,
//       });
//     });
//   }

//   return {
//     props: {
//       courses,
//     },
//   };
// };
