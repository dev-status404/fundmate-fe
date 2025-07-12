import React from "react";
import StatsCalendar from "../../components/stats/StatsCalendar";
import StatsSummary from "./statsSummary";
import SupporterPieChart from "./SupporterPieChart";
import StatsLineChart from "./StatsLineChart";
import { Title } from "@repo/ui/styles";

const StatsContent: React.FC = () => {
  return (
    <div className="w-full">
      {/* 전체 박스 감싸기 */}
      <div className="w-full border border-gray-300 rounded-lg p-6 bg-white flex flex-col gap-6">
        {/* 상단 제목 */}
        <Title className="text-gray-800">통계 내역</Title>

        {/* 상단 3분할 + 하단 1분할 구조 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* 캘린더 */}
          <div className="bg-white rounded-md p-4">
            <StatsCalendar />
          </div>

          {/* 월 통계 */}
          <div className="bg-white rounded-md p-4">
            <StatsSummary />
          </div>

          {/* 파이차트 */}
          <div className="bg-white rounded-md p-4">
            <SupporterPieChart />
          </div>

          {/* 라인차트 - 전체 span */}
          <div className="md:col-span-3 bg-white rounded-md p-6">
            <StatsLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsContent;
