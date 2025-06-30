import { BoxCol, FlexRowsm } from '../styles/flex.style';
import { Radio } from '../styles/paymentPage/Adress.style';
import { BaseText } from '../styles/text.style';
import React, { useState } from 'react';

const PaySelect = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <BoxCol className="items-start p-0">
      <FlexRowsm className="p-4">
        <Radio>
          <input
            type="radio"
            name="payment"
            value="transfer"
            checked={selectedPayment === 'transfer'}
            onChange={handleChange}
            className="text-main"
          />
          <BaseText>계좌이체</BaseText>
        </Radio>
        <Radio>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedPayment === 'card'}
            onChange={handleChange}
            className="text-main"
          />
          <BaseText>카드결제</BaseText>
        </Radio>
      </FlexRowsm>
    </BoxCol>
  );
};

export default PaySelect;
