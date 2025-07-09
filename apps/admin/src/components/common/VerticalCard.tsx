import ProgressBar from "@ramonak/react-progress-bar"
import { VerticalCardContainer } from "../style/Card.style";
import { useNavigate } from "react-router-dom"
import { HeartButton } from "../../../../../packages/ui/components/Likes/HeartButton";
import { MediumFont, SubTitle } from "../../../../../packages/ui/styles";

export const VerticalCard = () => {
  const navigate = useNavigate()

  return (
    <VerticalCardContainer onClick={() => navigate('/product')}>
      <div className="flex flex-col h-full justify-between @[250px]/vertical:gap-5 @[270px]/vertical:gap-7">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <img src="https://picsum.photos/id/40/300/300" className="w-full h-auto rounded-xl object-cover" />
            <HeartButton />
          </div>
          <div className="w-full min-w-200 overflow-hidden">
            <MediumFont>
              이것은 상품의 이름입니다.
            </MediumFont>
            <MediumFont className='text-gray-500'>이것은 상품의 상세설명입니다.</MediumFont>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <SubTitle className="text-[#26AAFF]">100% 달성</SubTitle>
          <ProgressBar completed={100} height="5px" isLabelVisible={false} bgColor="#26AAFF" />
        </div>
      </div>
    </VerticalCardContainer>
  );
};
