import { FlexCol, FlexRowsm } from '../styles/flex.style';
import { BoldBigText } from '../styles/text.style';
import { BaseButton } from '../styles/product-detail/productInfo.style';
import { InputText } from '../styles/paymentPage/Adress.style';

const Adress = () => {
  return (
    <FlexCol className="items-start justify-start gap-4">
      <BoldBigText>주소 입력</BoldBigText>
      <FlexRowsm className="mt-5 w-full">
        <InputText type="text" placeholder="우편번호" />
        <BaseButton className="p-2 w-[30%]">우편번호 찾기</BaseButton>
      </FlexRowsm>
      <InputText type="text" placeholder="주소" />
      <InputText type="text" placeholder="상세주소" />
    </FlexCol>
  );
};

export default Adress;
