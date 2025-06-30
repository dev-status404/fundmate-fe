import { ModalContainer } from '../styles/modal/modal.style';
import {
  Wrapper,
  BankBox,
  BankTitle,
  BankBtn,
  Label,
  Input,
  EtxDiv,
  BottomWrapper,
  Box,
} from '../styles/modal/tansfetModal.style';
import { BaseButton } from '../styles/product-detail/productInfo.style';

export default function TransferModal() {
  const bankList = ['KB국민은행', '농협', '신한', 'IBK', '토스'];
  return (
    <ModalContainer>
      <Wrapper>
        <BankBox>
          <BankTitle>은행계좌 등록</BankTitle>
          <BankBtn>&times;</BankBtn>
        </BankBox>

        <Label>결제 은행</Label>
        <select className="w-full border rounded-md p-2 mb-4">
          {bankList.map((v, i) => (
            <option key={i}>{v}</option>
          ))}
        </select>

        <Label>계좌번호</Label>
        <Input type="text" placeholder="공백, - 없이 입력해주세요." />

        <EtxDiv>
          <input id="biz" type="checkbox" className="mr-2" />
          <label htmlFor="biz" className="text-sm">
            사업자 계좌입니다.
          </label>
        </EtxDiv>

        <BottomWrapper>
          <div className="w-1/2">
            <Label>예금주명</Label>
            <input
              type="text"
              placeholder="예금주 명을 입력해주세요."
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="w-1/2">
            <Label>예금주 생년월일</Label>
            <input
              type="text"
              placeholder="예) 920101"
              className="w-full border rounded-md p-2"
            />
          </div>
        </BottomWrapper>

        <Box>
          <input
            id="default-pay"
            type="checkbox"
            className="mr-2"
            defaultChecked
          />
          <label htmlFor="default-pay" className="text-sm">
            기본 결제수단으로 등록
          </label>
        </Box>

        <BaseButton className="ml-0">다음 단계</BaseButton>
      </Wrapper>
    </ModalContainer>
  );
}
