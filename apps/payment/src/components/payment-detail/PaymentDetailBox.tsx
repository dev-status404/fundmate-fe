import { BoxRow, FlexCol, FlexColsm, FlexRowsm } from '../styles/flex.style';
import { BaseButton } from '../styles/product-detail/productInfo.style';
import { BoldBigText, BoldText, LightColor } from '../styles/text.style';

const PaymentDetailBox = () => {
  const payInfo = [
    '프로젝트 상태',
    '후원 상태',
    '후원 번호',
    '후원 날짜',
    '프러젝트 종료일',
  ];

  const dumyPayInfo = [
    '펀딩 진행 중',
    '후원 예약',
    '12345679',
    '2025.06.17',
    '2025.12.13',
  ];

  return (
    <FlexCol className="items-start">
      <BoldBigText>후원정보</BoldBigText>
      <BoxRow className="justify-between items-start">
        <FlexColsm className="items-start">
          {payInfo.map((v, idx) => (
            <FlexRowsm
              key={v}
              className="w-full py-2 flex justify-between items-center"
            >
              <LightColor className="flex-1 mr-3 text-xs">
                {payInfo[idx]}
              </LightColor>
              <BoldText
                className={`flex-1 text-left ${idx === 0 || idx === 1 ? 'text-[#FB6565]' : 'text-black'}`}
              >
                {dumyPayInfo[idx]}
              </BoldText>
            </FlexRowsm>
          ))}
        </FlexColsm>
        <BaseButton className="bg-[#E2E8F0] w-[10%] p-2 text-xs text-black">
          취소하기
        </BaseButton>
      </BoxRow>
    </FlexCol>
  );
};

export default PaymentDetailBox;
