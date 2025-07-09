import tw from "tailwind-styled-components";

export const VerticalCardContainer = tw.div`
  flex
  flex-col
  grow
  justify-between
  cursor-pointer
  rounded-xl
  transition-shadow
  bg-white
  p-3
  w-full
  h-full
  @container/vertical

  hover:shadow-md
`

export const HorizontalCardContainer = tw.div`
  flex
  flex-row
  gap-3
  w-full
  h-full
  cursor-pointer
  rounded-xl  
  transition-shadow
  p-3
  bg-white

  hover:shadow-md
`
