import React from "react";
// layout for page

import Admin from "layouts/Admin.js";
import Table from "components/Table/Table";

// mock data
import consumerData from "mocks/consumer.mock";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0 px-4">
          {consumerData && (
            <Table columns={consumerData.columns} data={consumerData.courses} />
          )}
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
