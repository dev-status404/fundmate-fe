import { useState, useEffect } from 'react';

interface Supporter {
  nickname: string;
  following: number;
  follower: number;
  sponsored: number;
  introduction: string;
  profileImage: string;
  isFollowing: boolean;
}

const SupporterProfile = () => {
  const [supporter, setSupporter] = useState<Supporter | null>(null);

  useEffect(() => {
    // 예시 mock 데이터
    const fetchData = () => {
      const mockData: Supporter = {
        nickname: '서포터1',
        following: 5,
        follower: 12,
        sponsored: 3,
        introduction: '안녕하세요. 지속 가능한 펀딩에 관심이 많습니다.',
        profileImage: '',
        isFollowing: false,
      };
      setSupporter(mockData);
    };

    fetchData();
  }, []);

  const handleFollowToggle = () => {
    if (!supporter) return;
    setSupporter({ ...supporter, isFollowing: !supporter.isFollowing });
  };

  if (!supporter) {
    return (
      <>
        
        <div className="flex flex-col items-center w-full mt-[60px]">
          <div>로딩중...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center w-full">
        {/* 상단 프로필 박스 */}
        <div className="flex items-center p-[10px] gap-[20px] w-[1300px] h-[159px] bg-white mt-[60px]">
          {/* 프로필 이미지 */}
          <div
            className="w-[99px] h-[99px] rounded-full bg-gray-300"
            style={{
              backgroundImage: supporter.profileImage
                ? `url(${supporter.profileImage})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* 닉네임 및 상태 박스 */}
          <div className="flex flex-col justify-between h-full mt-[-40px] py-[40px] px-[10px] gap-[15px]">
            {/* 닉네임 */}
            <div className="text-[16px] mb-3 font-bold">{supporter.nickname}</div>

            {/* 상태 영역 */}
            <div className="flex items-end gap-[55px]">
              {/* 팔로잉 */}
              <div className="flex flex-col gap-[5px]">
                <span className="text-[12px] text-[#999A9A]">팔로잉 &gt;</span>
                <span className="text-[16px] font-bold">{supporter.following}</span>
              </div>

              {/* 팔로워 */}
              <div className="flex flex-col gap-[5px]">
                <span className="text-[12px] text-[#999A9A]">팔로워 &gt;</span>
                <span className="text-[16px] font-bold">{supporter.follower}</span>
              </div>

              {/* 후원횟수 */}
              <div className="flex flex-col gap-[5px]">
                <span className="text-[12px] text-[#999A9A]">후원횟수 &gt;</span>
                <span className="text-[16px] font-bold">{supporter.sponsored}</span>
              </div>
            </div>
          </div>

          {/* 팔로우 / 팔로잉 버튼 */}
          <button
            onClick={handleFollowToggle}
            className={`flex items-center px-[12px] py-[12px] border rounded-[5px] gap-[12px] text-[14px] ml-auto
              ${supporter.isFollowing ? 'border-[#A7A7A7] text-[#A7A7A7]' : 'border-[#5FBDFF] text-[#5FBDFF]'}
            `}
          >
            {supporter.isFollowing ? (
              <>
                {/* 체크 아이콘 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#A7A7A7"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                팔로잉
              </>
            ) : (
              <>
                {/* + 아이콘 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#5FBDFF"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                팔로우
              </>
            )}
          </button>
        </div>

        {/* 하단 프로필 소개 영역 */}
        <div className="w-[1300px] mt-[20px] p-[20px] bg-white">
          {/* 프로필 + 파란 밑줄 */}
          <h3 className="text-[14px] font-bold mb-[10px] border-b-2 border-[#5FBDFF] inline-block pb-[2px]">
            프로필
          </h3>

          {/* 경계선 */}
          <div className="w-full border-b border-gray-200 mb-[10px]" />

          <p className="text-[12px] text-gray-500">
            {supporter.introduction
              ? supporter.introduction
              : '한줄 소개 / 없다면 등록한 소개가 없습니다.'}
          </p>
        </div>
      </div>
    </>
  );
};

export default SupporterProfile;
