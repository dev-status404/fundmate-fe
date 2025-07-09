import tw from "tailwind-styled-components";

interface CateogoryContainerProps {
  isOpen: boolean;
}

export const CateogoryContainer = tw.div<CateogoryContainerProps>`
  ${p => p.$isOpen ? 'visible' : 'invisible'}
  absolute
  top-full
  left-0
  w-44
  bg-white
  rounded-lg
  shadow-lg
  p-3
  flex
  flex-col
  gap-1
  z-20
`
