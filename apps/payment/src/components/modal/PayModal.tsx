import { randomPlaceholder } from '../../utils/randomNum';
import { IoCardOutline } from 'react-icons/io5';
import { BaseButton } from '../styles/product-detail/productInfo.style';
import {
  CardInput,
  CardInputContainer,
  CardType,
  Container,
  ExpiryBox,
  H2,
  ImgBox,
  Input,
  Label,
  ModalContainer,
  MouthBox,
  SecBox,
  Select,
} from '../styles/modal/modal.style';
import { monthList, yearList } from '../../utils/date';

const PayModal = () => {
  const placeholders = randomPlaceholder();
  return (
    <ModalContainer>
      <Container>
        <H2>결제방법</H2>
        <CardType>
          <input
            type="radio"
            id="credit-card"
            name="payment-method"
            value="credit"
            defaultChecked
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="신용카드 아이콘"
            className="w-6 h-6"
          />
          <label htmlFor="credit-card" className="ml-2">
            신용카드
          </label>
        </CardType>
        <Label htmlFor="card-number">카드 번호</Label>
        <CardInputContainer>
          {placeholders.map((text, index) => (
            <CardInput
              key={index}
              type="text"
              maxLength="4"
              placeholder={text}
              required
            />
          ))}
        </CardInputContainer>
        <ImgBox>
          <img
            src="https://img.icons8.com/color/48/visa.png"
            alt="VISA"
            className="h-6 border border-gray-300"
          />
          <img
            src="https://img.icons8.com/color/48/mastercard-logo.png"
            alt="MasterCard"
            className="h-6 border border-gray-300"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="신용카드 아이콘"
            className="h-6 border border-gray-300"
          />
        </ImgBox>

        <ExpiryBox>
          <div className="w-[48%]">
            <Label htmlFor="expiry-date">만료일</Label>
            <MouthBox>
              <Select id="expiry-month" required className="mr-2 ">
                <option value="" disabled selected>
                  MM
                </option>

                {monthList().map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
              <Select id="expiry-year" required>
                <option value="" disabled selected>
                  YY
                </option>
                {yearList().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
              <IoCardOutline className="absolute right-0 w-6 h-6 mt-2" />
            </MouthBox>
          </div>
          <SecBox>
            <Label htmlFor="cvv">보안 코드</Label>
            <Input
              id="cvv"
              type="text"
              placeholder="3자리"
              required
              className="pr-8"
            />
            <IoCardOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 mt-1" />
          </SecBox>
        </ExpiryBox>

        <Label htmlFor="card-name">카드 소유자 이름</Label>
        <Input id="card-name" type="text" placeholder="J. Smith" required />

        <BaseButton className="ml-0">결제하기</BaseButton>
      </Container>
    </ModalContainer>
  );
};

export default PayModal;
