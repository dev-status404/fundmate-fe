import React, { useState } from 'react';
import { VerticalCard } from '@repo/ui/components';
import { SubTitle, MediumFont } from '@repo/ui/styles';

const FundingList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const ranges = Array.from({ length: 10 }, (_, idx) => `${idx * 10}~${idx * 10 + 10}%`);

  return (
    <section className="w-full flex flex-col gap-6 px-4 md:px-6">
      {/* 상단 타이틀 + 필터 */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 relative">
        {/* 타이틀 + 필터 */}
        <div className="flex flex-col gap-2">
          <SubTitle>펀딩 리스트</SubTitle>

          <div className="flex flex-wrap gap-2 relative">
            {/* 상태 필터 */}
            <button className="border px-3 py-1 rounded text-xs flex items-center gap-1">
              상태 <span className="text-[10px]">▼</span>
            </button>

            {/* 달성률 필터 */}
            <button
              className="border px-3 py-1 rounded text-xs flex items-center gap-1"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {selectedRange ?? '달성률'} <span className="text-[10px]">▼</span>
            </button>

            {/* 드롭다운 */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-1 left-0 bg-white border rounded shadow z-10 max-h-60 overflow-y-auto">
                {ranges.map((range) => (
                  <div
                    key={range}
                    className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      setSelectedRange(range);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {range}
                  </div>
                ))}
              </div>
            )}
          </div>

          <MediumFont className="mt-1">
            <span className="text-blue-500 font-semibold">10,000</span>개의 프로젝트가 있습니다
          </MediumFont>
        </div>

        {/* 정렬 버튼 */}
        <div className="flex justify-start md:justify-end">
          <button className="border px-3 py-1 rounded text-xs flex items-center gap-1 h-fit">
            추천순 <span className="text-[10px]">▼</span>
          </button>
        </div>
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <VerticalCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default FundingList;
