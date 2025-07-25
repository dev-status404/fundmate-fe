import tw from 'tailwind-styled-components';

export const CreateFundingStyle = tw.div`
  flex
  flex-col
  text-left 
  gap-[30px]
  pb-[40px]
  w-full
`;

export const Title = tw.div`
  text-[18px] font-bold
`;

export const CompWrapper = tw.div`
  flex flex-col gap-5
  md:w-[480px]
`;

export const HorizontalLine = tw.div`
  border-b border-line
`;

export const WarningText = tw.p`
  text-red font-bold
  pl-4
`;
