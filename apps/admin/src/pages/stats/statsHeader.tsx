import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Title, MediumFont } from '@repo/ui/styles';

interface StatsSummaryData {
  totalSupportCount: number;
  totalSupporters: number;
  totalFunding: number;
  averageSuccessRate: number;
}

const fetchStatsSummary = (): Promise<StatsSummaryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalSupportCount: Math.floor(Math.random() * 100),
        totalSupporters: Math.floor(Math.random() * 5000),
        totalFunding: Math.floor(Math.random() * 5000000),
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
    totalFunding: 2750000,
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
    <div className="w-full bg-white border border-gray-300 rounded-md px-6 py-4 flex flex-col justify-between gap-6 min-h-[160px]">
      {/* 상단: 제목 + 새로고침 + 날짜 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Title className="text-black text-xl">주요 지표</Title>
          <RotateCcw
            size={20}
            color="#999292"
            strokeWidth={2}
            onClick={handleRefresh}
            className={`cursor-pointer transition-transform ${isLoading ? 'animate-spin' : ''}`}
          />
        </div>
        <MediumFont className="text-[#7E7C7C]">{currentDate}</MediumFont>
      </div>

      {/* 하단: 통계 항목 오른쪽 하단 정렬 */}
      <div className="flex justify-end">
        <div className="flex gap-4 flex-wrap justify-end items-end text-right">
          {[
            { label: '총 프로젝트 수', value: `${summary.totalSupportCount.toLocaleString()}개` },
            { label: '평균 성공률', value: `${summary.averageSuccessRate}%` },
            { label: '총 모금액', value: `${summary.totalFunding.toLocaleString()}원` },
            { label: '총 후원자', value: `${summary.totalSupporters.toLocaleString()}명` },
          ].map(({ label, value }, idx, arr) => (
            <div key={label} className="flex items-end gap-4">
              <div className="flex flex-col items-end min-w-[120px]">
                <MediumFont className="text-[#7E7C7C]">{label}</MediumFont>
                <MediumFont className="text-black text-lg">{value}</MediumFont>
              </div>
              {idx !== arr.length - 1 && (
                <div className="h-6 w-px bg-gray-300 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
