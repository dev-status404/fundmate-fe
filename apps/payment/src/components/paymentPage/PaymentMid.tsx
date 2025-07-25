import { BaseText, BoldBigText, LightColor } from '../styles/text.style';
import { Box, BoxRow, FlexColsm, FlexRowsm } from '../styles/layout.style';
import { Input, MoneyBox, Span } from '../styles/paymentPage/PaymentMid.style';
import { formatPrice } from '@repo/ui/utils';
import { useGetQueryString } from '../../hooks/useGetQueryString';
import { useGetProductInfo } from '../../hooks/product/getProductInfo';

interface PaymentMidProps {
  subText: string[];
  addAmount: number;
  setAddAmount: React.Dispatch<React.SetStateAction<number>>;
  nickname: string;
  email: string;
}

const PaymentMid = ({
  subText,
  addAmount,
  setAddAmount,
  nickname,
  email,
}: PaymentMidProps) => {
  const projectId = useGetQueryString();
  const { data: productData } = useGetProductInfo(Number(projectId));

  if (!productData) return null;

  const optionData = productData.options[0];

  return (
    <div className="w-full">
      <BoldBigText>{subText[0]}</BoldBigText>
      <BoxRow>{optionData.title}</BoxRow>
      <BoldBigText className="mt-6">{subText[1]}</BoldBigText>
      <Box>
        <BaseText>후원금</BaseText>
        <MoneyBox>
          <Input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
              setAddAmount(Number(onlyNumbers));
            }}
            value={formatPrice(String(addAmount))}
          />

          <Span>원</Span>
        </MoneyBox>
      </Box>
      <BoldBigText className="mt-6">{subText[2]}</BoldBigText>
      <BoxRow>
        <FlexColsm className="items-start">
          <FlexRowsm className="py-2 justify-between">
            <LightColor className="text-sm mr-6">닉네임</LightColor>
            <BaseText>{nickname}</BaseText>
          </FlexRowsm>
          <FlexRowsm className="py-2">
            <LightColor className="text-sm mr-6">이메일</LightColor>
            <BaseText>{email}</BaseText>
          </FlexRowsm>
        </FlexColsm>
      </BoxRow>
      <BoldBigText className="mt-6">{subText[3]}</BoldBigText>
    </div>
  );
};

export default PaymentMid;
