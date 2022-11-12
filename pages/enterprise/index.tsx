import React from "react";
import HeaderStats, {
  HeaderStatsProps,
} from "../../components/Headers/HeaderStats";
import Table from "../../components/Table/Table";

export const CurrentContext = React.createContext([]);
import enterpriseData from "../../mocks/enterprise.mock";

const Consumer = () => {
  //#region data

  const headerStats: HeaderStatsProps = {
    cardStats: [
      {
        statSubtitle: "Courses",
        statTitle: "20",
        statIconName: "fa fa-book",
        statIconColor: "bg-red-500",
      },
      {
        statSubtitle: "Assigned",
        statTitle: "15",
        statIconName: "fa fa-list-check",
        statIconColor: "bg-orange-500",
      },
      {
        statSubtitle: "Expired",
        statTitle: "3",
        statIconName: "fa fa-hourglass-end",
        statIconColor: "bg-pink-500",
      },
      {
        statSubtitle: "Unassgined",
        statTitle: "5",
        statIconName: "fa fa-bars-progress",
        statIconColor: "bg-blue-500",
      },
    ],
  };
  //#endregion
  return (
    <>
      {/* Header */}
      <HeaderStats cardStats={headerStats.cardStats} />
      <div className="flex flex-wrap">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="w-full mb-12 xl:mb-0 px-4">
            {enterpriseData && (
              <Table
                columns={enterpriseData.columns}
                data={enterpriseData.courses}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Consumer;
