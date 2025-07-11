import { useNavigate } from 'react-router-dom';
import ReviewListItem from './ReviewListItem';
import { MediumFont, Title } from '@repo/ui/styles';

const MyReviews = () => {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      productName: '제로웨이스트 텀블러',
      review: '깔끔하고 가볍고 매일 쓰기 좋아요.',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      id: 2,
      productName: '유기농 반려동물 간식',
      review: '강아지가 너무 잘 먹어요!',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      id: 3,
      productName: '착한 커피 원두',
      review: '고소하고 맛있습니다.',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      id: 4,
      productName: '편한 쿠션 방석',
      review: '앉아있을 때 허리가 덜 아파요.',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      id: 5,
      productName: '아로마 캔들',
      review: '은은한 향이 좋아서 자주 켜요.',
      imageUrl: 'https://picsum.photos/300/300',
    },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      <Title>작성한 후기 목록</Title>
      <div className='flex flex-col gap-5 w-full'>
        <div className="grid grid-cols-[200px_1fr_1fr] w-full">
          <div></div>
          <div className="flex justify-start items-center">
            <MediumFont>
              상품명
            </MediumFont>
          </div>
          <div className="flex justify-start items-center">
            <MediumFont>
              후기
            </MediumFont>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          {reviews.map((item) => (
            <ReviewListItem
              key={item.id}
              productName={item.productName}
              review={item.review}
              imageUrl={item.imageUrl}
              onClick={() => navigate(`/product/${item.id}`)}
            />
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className='flex w-full justify-center'>
        <div className="flex justify-center items-center mt-[25px] gap-[10px]">
          <button>{'<<'}</button>
          <button>{'<'}</button>
          <div className="flex gap-[15px] text-[23px]">
            <span className="text-black">1</span>
            <span className="text-[#7E7C7C]">2</span>
            <span className="text-[#7E7C7C]">3</span>
            <span className="text-[#7E7C7C]">4</span>
            <span className="text-[#7E7C7C]">5</span>
          </div>
          <button>{'>'}</button>
          <button>{'>>'}</button>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
