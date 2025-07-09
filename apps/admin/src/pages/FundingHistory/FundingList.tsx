import React, { useState } from 'react';
import { VerticalCard } from '@repo/ui/components';

const FundingList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  // 달성률 구간 목록
  const ranges = Array.from({ length: 10 }, (_, idx) => `${idx * 10}~${idx * 10 + 10}%`);

  return (
    <section className="flex flex-col gap-4">
      {/* 상단 타이틀 + 필터 */}
      <div className="flex justify-between items-start ml-4 relative">
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold">펀딩 리스트</h2>
          <div className="flex gap-2 mt-1 relative">
            <button className="border px-3 py-1 rounded text-xs flex items-center gap-1">
              상태 <span className="text-[10px]">▼</span>
            </button>

            {/* 달성률 버튼 */}
            <button
              className="border px-3 py-1 rounded text-xs flex items-center gap-1 relative"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {selectedRange ?? '달성률'} <span className="text-[10px]">▼</span>
            </button>

            {/* 드롭다운 모달 */}
            {isDropdownOpen && (
              <div className="absolute top-9 left-24 bg-white border rounded shadow z-10">
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
          <p className="text-lg mt-2">
            <span className="text-blue-500">10,000</span>개의 프로젝트가 있습니다
          </p>
        </div>

        <button className="border px-3 py-1 rounded text-xs flex items-center gap-1 h-fit">
          추천순 <span className="text-[10px]">▼</span>
        </button>
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <VerticalCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default FundingList;
