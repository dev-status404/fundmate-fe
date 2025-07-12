import React from "react";
import { SubTitle, MediumFont } from "@repo/ui/styles";

const StatsSummary: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full flex-1">
      <div>
        <SubTitle className="mb-7">6월 통계</SubTitle>
        {[
          { label: "프로젝트 수", value: "3개" },
          { label: "성공한 프로젝트", value: "2개" },
          { label: "총 모금액", value: "10,100원" },
          { label: "후원자 수", value: "12명" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center text-[18px] mb-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-[2px] h-[18px] bg-gray-400" />
              <MediumFont className="text-gray-500">{item.label}</MediumFont>
            </div>
            <MediumFont>{item.value}</MediumFont>
          </div>
        ))}
      </div>

      <div>
        <SubTitle className="mb-3">펀딩 내역</SubTitle>
        <div className="flex justify-between items-center text-[18px]">
          <div className="flex items-center gap-2">
            <div className="w-[2px] h-[18px] bg-gray-400" />
            <MediumFont className="text-gray-500">결제 건수</MediumFont>
          </div>
          <MediumFont>3개</MediumFont>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
