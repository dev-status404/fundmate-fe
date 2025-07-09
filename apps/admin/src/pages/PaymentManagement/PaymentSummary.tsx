import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface PaymentSummaryData {
  totalPayments: number;
  totalRevenue: string;
  failedPayments: number;
}

const fetchPaymentSummary = (): Promise<PaymentSummaryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalPayments: Math.floor(Math.random() * 100),
        totalRevenue: (Math.floor(Math.random() * 5000000)).toLocaleString(),
        failedPayments: Math.floor(Math.random() * 10),
      });
    }, 500); // 0.5초 딜레이 후 데이터 반환
  });
};

// 오늘 날짜 YYYY. MM. DD HH:MM 반환 함수
const getCurrentDateString = (): string => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}. ${mm}. ${dd} ${hh}:${min}`;
};

const PaymentSummary: React.FC = () => {
  const [summary, setSummary] = useState<PaymentSummaryData>({
    totalPayments: 12,
    totalRevenue: '2,750,000',
    failedPayments: 3,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDateString());

  const handleRefresh = async () => {
    setIsLoading(true);
    const newData = await fetchPaymentSummary();
    setSummary(newData);
    setCurrentDate(getCurrentDateString());
    setIsLoading(false);
  };

  return (
    <div className="w-[1190px] h-[170px] border border-gray-300 rounded-[5px] p-5 flex flex-col justify-end items-end gap-[65px] relative bg-white">
      {/* 상단: 제목 + 새로고침 아이콘 + 날짜 */}
      <div className="w-full flex justify-between items-start">
        <div className="flex gap-[15px] items-center">
          <span className="font-inter font-bold text-[20px] leading-[17px] text-black">
            오늘의 결제 요약
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

      {/* 하단: 요약 데이터 */}
      <div className="flex items-center gap-[70px]">
        {/* 총 결제 건수 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] leading-[20px] text-right text-[#7E7C7C]">
              총 결제 건수
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                {summary.totalPayments}
              </span>
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                개
              </span>
            </div>
          </div>
        </div>

        {/* 총 수익 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] leading-[20px] text-right text-[#7E7C7C]">
              총 수익
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                {summary.totalRevenue}
              </span>
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                원
              </span>
            </div>
          </div>
        </div>

        {/* 미결제 실패 */}
        <div className="flex items-start px-5 gap-[10px] h-[34px] border-r border-black">
          <div className="flex flex-col justify-center items-end gap-[5px] h-full">
            <span className="font-inter font-medium text-[18px] leading-[20px] text-right text-[#7E7C7C]">
              미결제 실패
            </span>
            <div className="flex justify-end items-center gap-[2px]">
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                {summary.failedPayments}
              </span>
              <span className="font-inter font-medium text-[20px] leading-[30px] text-black">
                회
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
