import { FlexColsm } from '../styles/flex.style';
import { BaseText, BoldBigText, BoldText } from '../styles/text.style';

const PaymentListTop = () => {
  return (
    <FlexColsm className="items-start justify-start">
      <BoldBigText>후원한 프로젝트</BoldBigText>
      <BaseText className="flex items-center mb-6">
        <BoldText className="text-red-600">1</BoldText>건의 후원 내역이 있습니다
      </BaseText>
      <BoldText>후원 진행 중(1)</BoldText>
    </FlexColsm>
  );
};

export default PaymentListTop;
