import PaymentSummary from './paymentSummary';
import PaymentList from './paymentList';
import { Title } from '@repo/ui/styles';

const PaymentManagement = () => {
  return (
    <div className="flex max-w-[95%] flex-col gap-6 px-4 py-10">
      <Title className="mt-[22px]">결제 관리</Title>
      <PaymentSummary />
      <PaymentList />
    </div>
  );
};

export default PaymentManagement;
