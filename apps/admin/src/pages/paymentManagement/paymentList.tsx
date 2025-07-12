import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Title, MediumFont } from '@repo/ui/styles';

const PaymentList = () => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-md px-6 py-4 flex flex-col justify-between gap-6 min-h-[160px]">

      {/* 상단 타이틀 + 필터 */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Title className="text-black">결제 내역 리스트</Title>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded text-xs h-[30px]">
            <span className="text-slate-900">상태</span>
            <ChevronDown size={16} className="opacity-50" />
          </button>
          <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded text-xs h-[30px]">
            <span className="text-slate-900">추천순</span>
            <ChevronDown size={16} className="opacity-50" />
          </button>
        </div>
      </div>

      {/* 테이블 헤더 */}
      <div className="w-full flex px-2 py-3 border-b border-gray-300 text-center text-base font-medium text-black">
        <div className="basis-3/6">상품</div>
        <div className="basis-1/6">옵션</div>
        <div className="basis-1/6">날짜</div>
        <div className="basis-1/6">금액</div>
        <div className="basis-1/6">상태</div>
      </div>

      {/* 테이블 본문 */}
      <div className="w-full flex flex-col divide-y divide-gray-200">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Link
            to={`/products/${idx}`}
            key={idx}
            className="flex items-center px-2 py-4 hover:bg-gray-50 transition"
          >
            {/* 상품 */}
            <div className="flex items-center gap-4 basis-3/6">
              <img
                src={`https://picsum.photos/seed/${idx}/70/70`}
                alt={`상품 이미지 ${idx + 1}`}
                className="w-[70px] h-[70px] rounded object-cover"
              />
              <MediumFont className="text-sm sm:text-base text-black">
                이것은 상품 상세 정보인데요 완전 신기하지 않나요!?
              </MediumFont>
            </div>

            {/* 옵션 */}
            <MediumFont className="basis-1/6 text-center text-sm sm:text-base text-black">
              옵션 1번
            </MediumFont>

            {/* 날짜 */}
            <MediumFont className="basis-1/6 text-center text-sm sm:text-base text-black">
              2025.07.09
            </MediumFont>

            {/* 금액 */}
            <MediumFont className="basis-1/6 text-center text-sm sm:text-base text-black">
              000,000,000원
            </MediumFont>

            {/* 상태 */}
            <MediumFont className="basis-1/6 text-center text-sm sm:text-base font-medium">
              <span className={idx % 2 === 0 ? 'text-[#49DB00]' : 'text-[#FB6565]'}>
                {idx % 2 === 0 ? '성공' : '실패'}
              </span>
            </MediumFont>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex w-full justify-center">
        <div className="flex justify-center items-center mt-[25px] gap-[10px]">
          <button>{'<<'}</button>
          <button>{'<'}</button>
          <div className="flex gap-[15px] text-[23px]">
            <span className="text-black">1</span>
            <span className="text-[#7E7C7C]">2</span>
            <span className="text-[#7E7C7C]">3</span>
            <span className="text-[#7E7C7C]">4</span>
            <span className="text-[#7E7C7C]">5</span>
          </div>
          <button>{'>'}</button>
          <button>{'>>'}</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
