import ProgressBar from "@ramonak/react-progress-bar";
import { HorizontalCardContainer } from "../style/Card.style";
import { useNavigate } from "react-router-dom";
import { HeartButton } from "../../../../../packages/ui/components/Likes/HeartButton";
import { MediumFont, SubTitle } from "../../../../../packages/ui/styles";
interface HorizontalCardProps {
  number: string;
}

export const HorizontalCard = ({ number }: HorizontalCardProps) => {
  const navigate = useNavigate();
  return (
    <HorizontalCardContainer onClick={() => navigate('/product')}>
      <div className="col-span-4 relative">
        <img src="https://picsum.photos/id/30/100/100" className="w-auto h-full object-cover rounded-xl" />
        <HeartButton />
      </div>
      <div className="col-span-1 flex justify-center py-2">
        <span className="font-bold text-[#26AAFF]">{number}</span>
      </div>
      <div className="col-span-6 flex flex-col items-start justify-between py-2">
        <div className="flex flex-col">
          <MediumFont>이것은 상품의 이름입니다.</MediumFont>
          <MediumFont className="text-gray-500">이것은 상품의 상세 설명입니다.</MediumFont>
        </div>
        <div className="w-full">
          <SubTitle className="text-[#26AAFF]">100% 달성</SubTitle>
          <ProgressBar completed={100} height="5px" isLabelVisible={false} bgColor="#26AAFF" />
        </div>
      </div>
    </HorizontalCardContainer>
  );
};
