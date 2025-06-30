import tw from 'tailwind-styled-components';

export const Container = tw.div`
    flex
    items-center
    justify-center
    h-full
    w-full
    px-[120px]
    my-4
`;

export const FlexItem = tw.div`
    w-1/2
`;

export const FlexCol = tw.div`
    flex
    flex-col
    items-center
    w-full
    h-full
    mt-9
`;

export const FlexRow = tw.div`
    flex
    flex-row
    items-center
    justify-center
    w-full
    h-full
    mt-9
`;

export const FlexColsm = tw.div`
    flex
    flex-col
    items-center
`;

export const FlexRowsm = tw.div`
    flex
    flex-row
    items-center
`;

export const BoxRow = tw.div`
  flex
  flex-row
  w-full
  items-center
  justify-start
  p-3
  border border-gray-300
  rounded-md
`;

export const BoxCol = tw.div`
  flex
  flex-col
  w-full
  items-center
  justify-start
  p-3
  border border-gray-300
  rounded-md
`;

export const Box = tw.div`
  w-full
  border border-gray-300
  rounded-md
  p-3
`;

export const Line = tw.div`
  w-full
  border
  border-b-gray-300
`;
