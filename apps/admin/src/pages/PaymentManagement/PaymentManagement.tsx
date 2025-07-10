import PaymentSummary from './paymentSummary';
import PaymentList from './paymentList';

const paymentManagement = () => {
  return (
    <section className="max-w-[1000px] w-full flex flex-col gap-6">
    <h2 className="mt-[40px] text-[24px] font-semibold ">결제 관리</h2>
      <PaymentSummary />
      <PaymentList />
    </section>
  );
};

export default paymentManagement;
