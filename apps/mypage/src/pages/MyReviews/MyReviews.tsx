import { useNavigate } from 'react-router-dom';
import { Header } from "../../../../../packages/ui/components/Header";
import Sidebar from "../../components/common/Sidebar";
import ReviewListItem from './ReviewListItem';

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
    <>
      <Header />
      <div className="flex max-w-[1190px] mx-auto mt-[40px]">
        <Sidebar />
        
        <div className="flex flex-col items-center flex-1 ml-[330px]">
            <h2 className="mr-[820px] text-lg font-semibold mt-[15px] mb-10">내 후기</h2>
          <div className="w-[900px] bg-white border border-gray-300 rounded-[5px] p-[20px] flex flex-col items-center gap-[20px]">
            <h2 className="text-[17px] mr-[130px] mt-[10px] mb-10 font-bold w-[725px]">작성한 후기 목록</h2>
            
            {/* 상품명 / 후기 헤더 */}
            <div className="flex items-center mt-[-20px] w-[860px] h-[27px] border-b border-gray-300">
              <div className="flex justify-center items-center w-[309px] text-[16px] font-medium text-black">
                상품명
              </div>
              <div className="flex justify-center items-center w-[461px] text-[16px] font-medium text-black">
                후기
              </div>
            </div>

            <div className="flex flex-col items-start w-[900px] ml-[70px]">
              {reviews.map((item) => (
                <ReviewListItem
                  key={item.id}
                  id={item.id}
                  productName={item.productName}
                  review={item.review}
                  imageUrl={item.imageUrl}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center items-center w-[715px] h-[30px] gap-[10px]">
              <button>{'<<'}</button>
              <button>{'<'}</button>
              <div className="flex gap-[15px] text-[17px]">
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
      </div>
    </>
  );
};

export default MyReviews;
