import tw from 'tailwind-styled-components';

export const InputText = tw.input`
  p-2
  border
  border-gray-300  
  focus:outline-none
  w-full
  rounded-md
`;

export const Radio = tw.label`
flex 
items-center 
space-x-2 
cursor-pointer 
mr-6`;
