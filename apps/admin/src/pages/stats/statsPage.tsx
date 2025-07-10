import React from 'react';
import StatsHeader from './statsHeader';
import StatsContent from './statsContent';

const StatsPage: React.FC = () => {
  return (
    <div className="flex flex-col ml-[-20px] items-start w-full h-full px-4 py-8 gap-8">
        <h2 className="mt-[10px] text-[24px] font-semibold">통계 관리</h2>
    
      {/* 상단 주요 지표 영역 */}
      <StatsHeader />

      {/* 하단 통계/그래프 영역 */}
      <StatsContent />
    </div>
  );
};

export default StatsPage;
