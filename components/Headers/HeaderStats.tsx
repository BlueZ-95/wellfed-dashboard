import React from "react";

// components

import CardStats, { CardStatsProps } from "../Cards/CardStats";

export interface HeaderStatsProps {
  cardStats: Array<CardStatsProps>;
}

export default function HeaderStats({ cardStats }: HeaderStatsProps) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-wellfedPrimaryBlue md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {cardStats.map((stats) => {
                return (
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle={stats.statSubtitle}
                      statTitle={stats.statTitle}
                      // statArrow="up"
                      // statPercent="3.48"
                      // statPercentColor="text-emerald-500"
                      // statDescripiron="Since last month"
                      statIconName={stats.statIconName}
                      statIconColor={stats.statIconColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
