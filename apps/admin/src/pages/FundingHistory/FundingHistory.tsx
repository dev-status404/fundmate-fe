import CompletedFundingcard from './completedFundingcard';
import FundingList from './fundingList';

const FundingHistory = () => {
  return (
    <div className="max-w-[1190px] w-full flex flex-col gap-8">
      <h2 className="mt-[40px] text-[24px] font-semibold ">펀딩 내역</h2>
      {/* 완료된 펀딩 박스 */}
      <div className="bg-white border border-gray-300 rounded-md p-5">
        <CompletedFundingcard />
      </div>

      {/* 펀딩 리스트 박스 */}
      <div className="bg-white border border-gray-300 rounded-md p-5">
        <FundingList />
      </div>
      
    </div>
  );
};

export default FundingHistory;
