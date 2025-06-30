import { BoxRow, FlexColsm, FlexRowsm } from '../styles/flex.style';
import { ProductImg } from '../styles/paymentPage/Productinfo.style';
import { BaseText, BoldText, LightColor } from '../styles/text.style';

const PaymentListData = () => {
  return (
    <BoxRow>
      <ProductImg src={'sss'} alt="대표 이미지" className="w-28 h-28" />
      <FlexColsm className="items-start gap-1">
        <FlexRowsm>
          <LightColor className="mr-5 text-xs">후원일 2025.06.17</LightColor>
          <LightColor className="text-xs">후원번호 12345678</LightColor>
        </FlexRowsm>
        <BoldText>책이 쌓일수록 귀엽다</BoldText>
        <LightColor className="text-xs">옵션 1</LightColor>
        <BaseText>1,556,900원</BaseText>
        <BoldText className="text-red-600">2025.06.25 결제 예정</BoldText>
      </FlexColsm>
    </BoxRow>
  );
};

export default PaymentListData;
