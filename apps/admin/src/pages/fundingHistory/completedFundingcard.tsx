import React from 'react';
import { Title, SubTitle, MediumFont } from '@repo/ui/styles';

const CompletedFunding = () => {
  return (
    <div className="w-full max-w-screen-xl bg-white rounded-md flex flex-col gap-6 px-4 md:px-6 py-6">
      <Title>최근 완료된 펀딩</Title>

      {/* 본문 컨텐츠 */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* 이미지 영역 */}
        <div className="w-full md:w-[40%] aspect-[16/9] bg-gray-300 rounded-lg" />

        {/* 상세 영역 */}
        <div className="flex flex-col justify-between flex-grow gap-4">
          {/* 펀딩명 + 뱃지 + 기간 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <SubTitle className="text-black">대충 펀딩 이름</SubTitle>
              <span className="bg-[#5FBDFF] text-white text-xs md:text-sm font-bold px-2 py-[2px] rounded-full">
                File
              </span>
            </div>
            <MediumFont className="text-[#7E7C7C]">2025.01.01 ~ 2025.02.01</MediumFont>
          </div>

          {/* 진행률 */}
          <div className="flex flex-col gap-2">
            <MediumFont className="text-black">진행률</MediumFont>
            <div className="relative w-full h-4 md:h-5 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-4 md:h-5 bg-[#5FBDFF] rounded-full text-center text-white text-[10px] md:text-sm flex items-center justify-center"
                style={{ width: '80%' }}
              >
                80%
              </div>
            </div>
          </div>

          {/* 모금액 */}
          <div className="flex items-center gap-2">
            <MediumFont className="text-black">모금액</MediumFont>
            <MediumFont className="text-[#7E7C7C]">1,000,000원</MediumFont>
          </div>

          {/* 참여인원 */}
          <div className="flex items-center gap-2">
            <MediumFont className="text-black">참여인원</MediumFont>
            <MediumFont className="text-black">50명</MediumFont>
          </div>
        </div>
      </div>

      {/* 아래 네비게이션 영역 */}
      <div className="flex justify-center">
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
        >
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CompletedFunding;
