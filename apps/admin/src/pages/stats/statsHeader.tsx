import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface StatsSummaryData {
  totalSupportCount: number;
  totalSupporters: number;
  totalFunding: string;
  averageSuccessRate: number;
}

const fetchStatsSummary = (): Promise<StatsSummaryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalSupportCount: Math.floor(Math.random() * 100),
        totalSupporters: Math.floor(Math.random() * 5000),
        totalFunding: (Math.floor(Math.random() * 5000000)).toLocaleString(),
        averageSuccessRate: Math.floor(Math.random() * 100),
      });
    }, 500);
  });
};

const getCurrentDateString = (): string => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}. ${mm}. ${dd} ${hh}:${min}`;
};

const StatsHeader: React.FC = () => {
  const [summary, setSummary] = useState<StatsSummaryData>({
    totalSupportCount: 12,
    totalSupporters: 3450,
    totalFunding: '2,750,000',
    averageSuccessRate: 98,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(getCurrentDateString());

  const handleRefresh = async () => {
    setIsLoading(true);
    const newData = await fetchStatsSummary();
    setSummary(newData);
    setCurrentDate(getCurrentDateString());
    setIsLoading(false);
  };

  return (
    <div className="w-[1190px] h-[170px] border border-gray-300 rounded-[5px] p-5 flex flex-col justify-end items-end gap-[65px] relative bg-white">
      {/* 상단: 제목 + 새로고침 + 날짜 */}
      <div className="w-full flex justify-between items-start">
        <div className="flex gap-[15px] items-center">
          <span className="font-inter font-bold text-[20px] leading-[17px] text-black ml-7">
            주요 지표
          </span>
          <RotateCcw
            size={20}
            color="#999292"
            strokeWidth={2}
            onClick={handleRefresh}
            className={`cursor-pointer transition-transform ${isLoading ? 'animate-spin' : ''}`}
          />
        </div>
        <span className="font-pretendard font-light text-[20px] leading-[20px] text-[#7E7C7C]">
          {currentDate}
        </span>
      </div>

      {/* 하단: 주요 지표 */}
      <div className="flex items-center gap-[70px]">
        {/* 총 프로젝트 수 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] text-[#7E7C7C]">
              총 프로젝트 수
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] text-black">
                {summary.totalSupportCount.toLocaleString()}
              </span>
              <span className="font-inter font-medium text-[20px] text-black">개</span>
            </div>
          </div>
        </div>

        {/* 평균 성공률 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] text-[#7E7C7C]">
              평균 성공률
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] text-black">
                {summary.averageSuccessRate}
              </span>
              <span className="font-inter font-medium text-[20px] text-black">%</span>
            </div>
          </div>
        </div>

        {/* 총 모금액 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] text-[#7E7C7C]">
              총 모금액
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] text-black">
                {summary.totalFunding}
              </span>
              <span className="font-inter font-medium text-[20px] text-black">원</span>
            </div>
          </div>
        </div>

        {/* 총 후원자 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] text-[#7E7C7C]">
              총 후원자
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] text-black">
                {summary.totalSupporters.toLocaleString()}
              </span>
              <span className="font-inter font-medium text-[20px] text-black">명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
