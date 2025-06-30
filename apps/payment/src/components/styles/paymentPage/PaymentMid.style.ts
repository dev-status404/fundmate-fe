import tw from 'tailwind-styled-components';

export const Box = tw.div` 
  flex
  flex-row
  justify-between 
  items-center
  w-full
  p-3
  border border-silver
  rounded-md
`;

export const MoneyBox = tw.div`
  flex 
  items-center 
  border 
  border-gray-300 
  rounded-md 
  p-2 
  w-fit 
  bg-white 
  relative
`;

export const Span = tw.span`
  text-lg 
  text-gray-800 
  bg-gray-200 
  px-2 
  rounded-r-md 
  absolute 
  right-0 
  h-full 
  w-12 
  flex 
  items-center 
  justify-center
`;

export const Input = tw.input`
  border-none 
  text-lg 
  pl-2 
  w-full 
  focus:outline-none
`;
