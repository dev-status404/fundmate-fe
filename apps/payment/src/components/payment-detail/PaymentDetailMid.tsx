import { MainButton } from '@repo/ui/components';
import { BoxRow, FlexCol, FlexColsm, FlexRowsm } from '../styles/layout.style';
import { BoldBigText, BoldText } from '../styles/text.style';

const PaymentDetailMid = () => {
  const title = ['선물 정보', '추가 후원 정보'];
  const subTitle = ['선물 금액', '추가 후원금'];
  const content = ['1,000원', '0원'];

  return (
    <>
      {title.map((v, idx) => (
        <FlexCol className="items-start" key={v}>
          <BoldBigText>{title[idx]}</BoldBigText>
          <BoxRow className="justify-between items-start">
            <FlexColsm className="items-start">
              <FlexRowsm className="w-full py-2 flex justify-between items-center">
                <BoldText className="flex-1 mr-3 text-xs">
                  {subTitle[idx]}
                </BoldText>
                <BoldText className="text-left">{content[idx]}</BoldText>
              </FlexRowsm>
            </FlexColsm>
            <MainButton
              label="변경"
              className="bg-[#E2E8F0] w-16 sm:w-[10%] p-2 text-xs text-black"
              textSize={'text-base'}
              textWeight={'font-bold'}
            />
          </BoxRow>
        </FlexCol>
      ))}
    </>
  );
};

export default PaymentDetailMid;
