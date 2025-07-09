const CompletedFunding = () => {
  return (
    
    <div className="max-w-[1200px] bg-white rounded-md p-2  flex-col gap-4">
      <h2 className="text-[20px] mb-4 font-semibold">최근 완료된 펀딩</h2>
      {/* 상단 제목 영역 */}
      <div className="flex items-center px-5">
      </div>

      {/* 본문 컨텐츠 */}
      <div className="flex gap-4">
        {/* 이미지 영역 */}
        <div className="w-[360px] h-[200px] bg-gray-300 rounded-lg flex-shrink-0" />

        {/* 상세 영역 */}
        <div className="flex flex-col justify-between flex-grow p-3">
          {/* 펀딩명 + 뱃지 + 기간 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-black">대충 펀딩 이름</p>
              <span className="bg-[#5FBDFF] text-white text-[15px] font-bold px-2 py-[2px] rounded-full">
                File
              </span>
            </div>
            <p className="text-lg text-[#7E7C7C]">2025.01.01 ~ 2025.02.01</p>
          </div>

          {/* 진행률 */}
          <div className="flex items-center gap-4 mt-4">
            <p className="text-lg text-black">진행률</p>
            <div className="relative w-full max-w-[600px] h-6 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-6 bg-[#5FBDFF] rounded-full text-center text-lg text-white flex items-center justify-center"
                style={{ width: '80%' }}
              >
                80%
              </div>
            </div>
          </div>

          {/* 모금액 */}
          <div className="flex items-center gap-4 mt-2">
            <p className="text-lg text-black">모금액</p>
            <p className="text-lg text-[#7E7C7C]">1,000,000원</p>
          </div>

          {/* 참여인원 */}
          <div className="flex items-center gap-4 mt-2">
            <p className="text-lg text-black">참여인원</p>
            <p className="text-lg text-black">50명</p>
          </div>
        </div>
      </div>

      {/* 아래 네비게이션 영역 */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200"
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
