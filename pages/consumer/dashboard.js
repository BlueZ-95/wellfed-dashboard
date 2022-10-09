import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

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
