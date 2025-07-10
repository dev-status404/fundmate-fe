import React from "react";

const StatsSummary: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[350px] ml-8">
      <div>
        <h3 className="text-[20px] font-semibold mb-7">6월 통계</h3>
        {[
          { label: "프로젝트 수", value: "3개" },
          { label: "성공한 프로젝트", value: "2개" },
          { label: "총 모금액", value: "10,100원" },
          { label: "후원자 수", value: "12명" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center text-[18px] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-[2px] h-[18px] bg-gray-400" />
              <span className="text-gray-500">{item.label}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-[20px] font-semibold mb-3">펀딩 내역</h3>
        <div className="flex justify-between items-center text-[18px]">
          <div className="flex items-center gap-2">
            <div className="w-[2px] h-[18px] bg-gray-400" />
            <span className="text-gray-500">결제 건수</span>
          </div>
          <span>3개</span>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
