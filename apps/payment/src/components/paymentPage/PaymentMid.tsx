import { BaseText, BoldBigText, LightColor } from '../styles/text.style';
import { Box, BoxRow, FlexColsm, FlexRowsm } from '../styles/flex.style';
import { Input, MoneyBox, Span } from '../styles/paymentPage/PaymentMid.style';

const PaymentMid = ({ subText }: { subText: string[] }) => {
  return (
    <div className="w-full">
      <BoldBigText>{subText[0]}</BoldBigText>
      <BoxRow>어쩌구 저쩌구 정보가 담길 예정</BoxRow>
      <BoldBigText className="mt-6">{subText[1]}</BoldBigText>
      <Box>
        <BaseText>후원금</BaseText>
        <MoneyBox>
          <Input type="number" placeholder="금액" />
          <Span>원</Span>
        </MoneyBox>
      </Box>
      <BoldBigText className="mt-6">{subText[2]}</BoldBigText>
      <BoxRow>
        <FlexColsm className="items-start">
          <FlexRowsm className="py-2 justify-between">
            <LightColor className="text-sm mr-6">연락처</LightColor>
            <BaseText>010-</BaseText>
          </FlexRowsm>
          <FlexRowsm className="py-2">
            <LightColor className="text-sm mr-6">이메일</LightColor>
            <BaseText>test@naver.com</BaseText>
          </FlexRowsm>
        </FlexColsm>
      </BoxRow>
      <BoldBigText className="mt-6">{subText[3]}</BoldBigText>
    </div>
  );
};

export default PaymentMid;
