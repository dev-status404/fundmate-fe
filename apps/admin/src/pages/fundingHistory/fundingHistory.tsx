import React from 'react';
import CompletedFundingcard from './completedFundingcard';
import FundingList from './fundingList';
import { Title } from '@repo/ui/styles';

const FundingHistory = () => {
  return (
    <div className="flex max-w-[95%] flex-col gap-6 px-4 py-10">
      <Title className="mt-8">펀딩 내역</Title>

      {/* 완료된 펀딩 */}
      <div className="bg-white border border-gray-300 rounded-md p-4">
        <CompletedFundingcard />
      </div>

      {/* 펀딩 리스트 */}
      <div className="bg-white border border-gray-300 rounded-md p-4">
        <FundingList />
      </div>
    </div>
  );
};

export default FundingHistory;
