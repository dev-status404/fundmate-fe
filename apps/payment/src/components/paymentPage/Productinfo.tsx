import { FlexColsm } from '../styles/flex.style';
import { BoldBigText } from '../styles/text.style';
import {
  ProductInfo,
  ProductImg,
  Title,
} from '../styles/paymentPage/Productinfo.style';

const Productinfos = () => {
  return (
    <ProductInfo>
      <ProductImg src={'sss'} alt="대표 이미지" />
      <FlexColsm className="items-start justify-start">
        <Title>책이 쌓일수록 귀엽다</Title>
        <BoldBigText>1,556,900원</BoldBigText>
      </FlexColsm>
    </ProductInfo>
  );
};

export default Productinfos;
