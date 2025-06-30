import PaymentDetailBottom from '../components/payment-detail/PaymentDetailBottom';
import PaymentDetailBox from '../components/payment-detail/PaymentDetailBox';
import PaymentDetailMid from '../components/payment-detail/PaymentDetailMid';
import PaymentDetailTop from '../components/payment-detail/PaymentDetailTop';
import { FlexCol } from '../components/styles/flex.style';

const PaymentDetail = () => {
  return (
    <FlexCol className="w-[70%] mx-auto items-start">
      <PaymentDetailTop />
      <PaymentDetailBox />
      <PaymentDetailMid />
      <PaymentDetailBottom />
    </FlexCol>
  );
};

export default PaymentDetail;
