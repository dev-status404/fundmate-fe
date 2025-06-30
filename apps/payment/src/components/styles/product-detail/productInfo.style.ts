import tw from 'tailwind-styled-components';
import type { HasProps } from './prdouctstyle.style';

export const Wrapper = tw.div`
  w-full
  h-[80%]
  flex
  flex-col
  gap-2
  mt-8
`;

export const Top = tw.div`
    flex
    flex-col
    items-start
    justify-center
    gap-3
`;

export const KeyP = tw.p`
    text-sm
`;

export const ValueP = tw.p<HasProps>`
    font-bold
    ${({ ishas }) => (ishas ? 'text-[18px]' : 'text-[16px]')} 
`;

export const Divide = tw.div`
    h-[0.5px]
    bg-black
    my-5
`;

export const Bottom = tw.div`
    flex
    flex-col
    gap-6
    `;

export const BottomItems = tw.div`
    flex
    flex-row
    items-center
    justify-start
    w-full
`;

export const IconBox = tw.div`
    flex
    flex-row
    items-center
    justify-start
    gap-3
    w-full
    `;

export const IconGroup = tw.div`
  flex
  gap-4
`;

export const IconButton = tw.button`
  flex
  flex-col
  items-center
  text-[10px]
`;

export const BaseButton = tw.button`
  bg-[#5FBDFF]
  text-white
  w-full
  px-6
  py-3
  rounded-md
  text-base
  font-bold
  transition
  ml-3.5
`;
