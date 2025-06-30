import { BoxCol, BoxRow, FlexColsm } from '../styles/flex.style';
import { Radio } from '../styles/paymentPage/Adress.style';
import { BaseButton } from '../styles/product-detail/productInfo.style';
import { BaseText, BoldText, LightColor } from '../styles/text.style';
import Adress from './Adress';

const PaymentFinal = () => {
  return (
    <>
      <Adress />
      <BoxRow className="justify-between p-5 my-7">
        <LightColor className="bg-none">최종 후원 금액</LightColor>
        <BoldText>1,000원</BoldText>
      </BoxRow>
      <BoxCol className="items-start border-2 border-dashed border-[#9747FF]">
        <Radio className="mt-3">
          <input type="checkbox" value="check1" className="text-main" />
          <BaseText>Accept terms andditon</BaseText>
        </Radio>
        <Radio className="items-center justify-start my-3">
          <input type="checkbox" value="check2" className="text-main" />
          <FlexColsm className="justify-start items-start">
            <BaseText>Accept terms andditon</BaseText>
            <LightColor className="text-xs">
              You agree to our Terms of Service and Privacy Policy.
            </LightColor>
          </FlexColsm>
        </Radio>
      </BoxCol>
      <BaseButton className="ml-0 mt-4">후원하기</BaseButton>
    </>
  );
};

export default PaymentFinal;
