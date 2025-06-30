import tw from 'tailwind-styled-components';

export const ModalContainer = tw.div`
  fixed
  inset-0
  flex
  justify-center
  items-center
  z-40
`;

export const ModalContent = tw.div`
  bg-white
  p-6
  rounded
  shadow-lg
  max-w-md
  w-full
`;

export const Container = tw.div`
  p-6
  border
  rounded
  shadow
  max-w-md
  mx-auto
  bg-white
`;

export const CardType = tw.div`
  flex
  items-center
  mb-4
  border
  border-gray-300
  p-4
  rounded-md
  gap-3
  
`;

export const Label = tw.label`
  block
  text-sm
  font-medium
  mb-1
`;

export const Input = tw.input`
  block
  w-full
  border-b
  border-gray-300
  rounded
  p-2
  mb-4
  outline-none
`;

export const CardInputContainer = tw.div`
  flex
  mb-1
`;

export const CardInput = tw.input`
border-0
outline-none
  rounded
  p-2
  w-1/6
  mr-2
  border-b
`;

export const Select = tw.select`
  block
  w-full
  rounded
  p-2
  mb-4
  border-0
  outline-none
  appearance-none
  border-b
`;

export const H2 = tw.h2`text-xl font-bold mb-4`;

export const ImgBox = tw.div`flex items-center space-x-2 mb-4`;

export const ExpiryBox = tw.div`flex justify-between`;

export const MouthBox = tw.div`flex items-center relative`;

export const SecBox = tw.div`w-[48%] relative`;
