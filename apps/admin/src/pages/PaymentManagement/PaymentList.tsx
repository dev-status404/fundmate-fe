import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentList = () => {
  return (
    <div className="w-[1190px] h-[740px] mb-40 border border-gray-300 rounded-[5px] p-5 flex flex-col items-center gap-[20px] bg-white">

      {/* 상단 타이틀 + 필터 */}
      <div className="w-[1100px] flex justify-between items-center">
        <h2 className="font-inter font-bold text-[20px] leading-[17px] mt-4 mb-5 text-black">
          결제 내역 리스트
        </h2>
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] px-[6px] py-[4px] border border-gray-300 rounded-[3px] h-[30px]">
            <span className="font-inter font-medium text-[10px] leading-[12px] text-[#0F172A]">상태</span>
            <ChevronDown size={16} className="opacity-50" />
          </button>
          <button className="flex items-center gap-[5px] px-[6px] py-[4px] border border-gray-300 rounded-[3px] h-[30px]">
            <span className="font-inter font-medium text-[10px] leading-[12px] text-[#0F172A]">추천순</span>
            <ChevronDown size={16} className="opacity-50" />
          </button>
        </div>
      </div>

      {/* 테이블 헤더 */}
      <div className="w-[1100px] flex items-center px-[10px] py-[5px] border-b border-gray-300">
        {['상품', '옵션', '날짜', '금액', '상태'].map((header, idx) => (
          <div
            key={idx}
            className={`flex justify-center items-center text-center font-inter font-medium text-[16px] mb-4 leading-[17px] text-black
            ${idx === 0 ? 'w-[500px]' : 'w-[150px]'}`}
          >
            {header}
          </div>
        ))}
      </div>

      {/* 테이블 데이터 */}
      <div className="w-[1100px] flex flex-col">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Link
            to={`/products/${idx}`} // 추후 product.id로 교체
            key={idx}
            className="flex items-center px-[10px] h-[85px] border-b border-gray-300 hover:bg-gray-50 transition"
          >
            {/* 상품 */}
            <div className="flex items-center gap-[15px] w-[500px]">
              <img
                src={`https://picsum.photos/seed/${idx}/70/70`}
                alt={`상품 이미지 ${idx + 1}`}
                className="w-[70px] h-[70px] rounded-[10px] object-cover"
              />
              <span className="font-pretendard font-medium text-[16px] leading-[14px] text-black">
                이것은 상품 상세 정보인데요 완전 신기하지 않나요!?
              </span>
            </div>

            {/* 옵션 */}
            <div className="flex justify-center items-center w-[150px]">
              <span className="font-pretendard font-medium text-[16px] leading-[14px] text-black">
                옵션 1번
              </span>
            </div>

            {/* 날짜 */}
            <div className="flex justify-center items-center w-[150px]">
              <span className="font-pretendard font-medium text-[16px] leading-[14px] text-black">
                2025.07.09
              </span>
            </div>

            {/* 금액 */}
            <div className="flex justify-center items-center w-[150px]">
              <span className="font-pretendard font-medium text-[16px] leading-[14px] text-black">
                000,000,000원
              </span>
            </div>

            {/* 상태 */}
            <div className="flex justify-center items-center w-[150px]">
              <span
                className={`font-pretendard font-medium text-[16px] leading-[14px] ${
                  idx % 2 === 0 ? 'text-[#49DB00]' : 'text-[#FB6565]'
                }`}
              >
                {idx % 2 === 0 ? '성공' : '실패'}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-[10px] mt-12">
        <button className="text-black text-[30px]">
          &laquo;
        </button>
        <button className="text-black text-[30px]">
          &lsaquo;
        </button>
        {['1', '2', '3', '4', '5'].map((page, idx) => (
          <button
            key={idx}
            className={`w-[22.8px] h-[12px] font-inter font-medium text-[20px] leading-[12px] flex items-center justify-center ${
              idx === 0 ? 'text-black' : 'text-[#7E7C7C]'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="text-black text-[30px]">
          &rsaquo;
        </button>
        <button className="text-black text-[30px]">
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default PaymentList;
