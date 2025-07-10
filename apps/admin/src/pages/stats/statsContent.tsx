import React from "react";
import StatsCalendar from "../../components/stats/StatsCalendar";
import StatsSummary from "../stats/statsSummary";
import SupporterPieChart from "../stats/SupporterPieChart";
import StatsLineChart from "../stats/StatsLineChart";

const StatsContent: React.FC = () => {
  return (
    <div className="max-w-[1200px] w-full bg-white rounded-md p-6 flex flex-col gap-6 border border-gray-300 shadow-sm">
      <h2 className="mt-[10px] text-[24px] font-semibold">통계 내역</h2>
      <div className="flex gap-8">
        <StatsCalendar />
        <StatsSummary />
        <SupporterPieChart />
      </div>
      <StatsLineChart />
    </div>
  );
};

export default StatsContent;
