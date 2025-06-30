import tw from 'tailwind-styled-components';

export interface HasProps {
  ishas?: boolean;
}

export const Wrapper = tw.div`
  w-full 
  flex 
  flex-col
  mt-8
`;

export const Header = tw.header<HasProps>`
  flex
  flex-row
  w-full
  items-center
  justify-start
  p-3
  gap-7
  border-t border-b border-gray-300
`;

export const Text = tw.p`
  ${({ ishas }) => (ishas ? 'font-bold' : '')}
`;

export const Topic = tw.div`
  flex
  flex-row
  items-center
  justify-start
  mt-14
  p-3
`;

export const Line = tw.div`
  w-[3px]
  bg-black
  h-5
  mr-2
`;

export const Main = tw.main`
  flex 
  flex-row
  items-start
  justify-start 
  px-3
`;

export const Box = tw.div`
  w-full
  flex 
  flex-col 
  gap-3
  items-start
  justify-start
  p-0
  m-0
`;

export const Title = tw.h2`
  text-base
  font-bold 
`;

export const ProfileImg = tw.img`
  w-16 h-16 rounded-full object-cover mr-6
`;

export const ProfileInfo = tw.div`
  flex flex-col
`;

export const ProfileInfos = tw.h3`
  text-sm 
  font-bold
`;

export const ProfileCard = tw.div`
  flex
  flex-row
  items-center
  justify-between
  my-6
`;

export const ProfileDesc = tw.p`
  text-xs
`;

export const DescText = tw.p`
  text-sm 
  mt-8 
`;

export const GiftSection = tw.section`
  w-full 
  mt-6 
  flex 
  flex-col 
  gap-4
`;

export const GiftTitle = tw.h4`
  text-base
  font-bold
`;

export const GiftCard = tw.div`
  border
  rounded-lg 
  p-6
  flex 
  flex-col 
  bg-white 
  shadow-sm
  gap-5
`;

export const GiftItemTitle = tw.p`
  font-semibold
`;

export const GiftDesc = tw.p`
  text-sm text-gray-600
`;

export const GiftPrice = tw.p`
  text-lg 
  font-bold 
  text-right
`;

export const SelectButton = tw.button`
  self-end
  px-4 
  py-2
  bg-[#DFF2FF]
  text-[#5FBDFF]
  border-2 border-[#5FBDFF]
  rounded-md 
  text-sm 
  font-bold
`;

export const Blank = tw.div`
  h-7
`;

export const Button = tw.button`
  px-4 py-2
  bg-[#5FBDFF]
  text-white
  text-sm
  font-semibold
  rounded-md
  shadow-sm
  hover:bg-[#46aee9]
  transition
`;
