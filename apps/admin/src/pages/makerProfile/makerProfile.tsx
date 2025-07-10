import React, { useState } from 'react';
import { VerticalCard } from '@repo/ui/components';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

interface Project {
  id: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  progress: number;
}

interface MakerProfileProps {
  nickname: string;
  followingCount?: number;
  followerCount?: number;
  totalProjects?: number;
  introduction?: string;
  projects?: Project[];
}

const MakerProfile: React.FC<MakerProfileProps> = ({
  nickname,
  followingCount = 0,
  followerCount = 0,
  totalProjects = 0,
  introduction = '',
  projects,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  // ✅ 임시 Mock 데이터 (projects가 undefined거나 빈 배열일 때 대체)
  const mockProjects: Project[] = [
    {
      id: 1,
      thumbnailUrl: 'https://picsum.photos/300/300?random=1',
      title: '프로젝트 1',
      description: '설명 1',
      progress: 70,
    },
    {
      id: 2,
      thumbnailUrl: 'https://picsum.photos/300/300?random=2',
      title: '프로젝트 2',
      description: '설명 2',
      progress: 50,
    },
    {
      id: 3,
      thumbnailUrl: 'https://picsum.photos/300/300?random=3',
      title: '프로젝트 3',
      description: '설명 3',
      progress: 30,
    },
    {
      id: 4,
      thumbnailUrl: 'https://picsum.photos/300/300?random=4',
      title: '프로젝트 4',
      description: '설명 4',
      progress: 90,
    },
    {
      id: 5,
      thumbnailUrl: 'https://picsum.photos/300/300?random=5',
      title: '프로젝트 5',
      description: '설명 5',
      progress: 80,
    },
  ];

  const displayProjects = projects && projects.length > 0 ? projects : mockProjects;

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <main className="flex flex-col flex-grow p-8 w-full max-w-[1720px] mx-auto mt-10">
          {/* 프로필 헤더 */}
          <section className="w-full flex items-center justify-between mb-10">
            <div className="flex items-center gap-14">
              <div className="w-[130px] h-[130px] rounded-full bg-gray-300 shrink-0" />

              <div className="flex flex-col">
                <p className="text-[24px] mb-10 font-semibold">{nickname}가게명1</p>
                <div className="flex gap-16">
                  <div className="flex flex-col">
                    <p className="text-[15px] text-gray-500">팔로잉 {'>'}</p>
                    <p className="text-[20px] font-medium">
                      {followingCount.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[15px] text-gray-500">팔로워 {'>'}</p>
                    <p className="text-[20px] font-medium">
                      {followerCount.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[15px] text-gray-500">전체 프로젝트 {'>'}</p>
                    <p className="text-[20px] font-medium">
                      {totalProjects.toLocaleString()}개
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 팔로우 버튼 */}
            <button
              onClick={handleFollowToggle}
              className={`flex items-center justify-center gap-2 px-6 py-3 border rounded-md text-base font-medium transition 
                ${isFollowing
                  ? 'border-gray-300 text-gray-500 hover:bg-gray-100'
                  : 'border-blue-400 text-blue-400 hover:bg-blue-50'
                }`}
            >
              {isFollowing ? (
                <>
                  <AiOutlineCheck className="text-[22px]" />
                  팔로잉
                </>
              ) : (
                <>
                  <AiOutlinePlus className="text-[22px]" />
                  팔로우
                </>
              )}
            </button>
          </section>

          {/* 한줄 소개 */}
          <section className="w-full mb-32">
            <hr className="border-t border-gray-200 mb-6" />
            <p className="text-gray-500 text-left">
              {introduction || '한줄 소개 / 현재 등록한 소개가 없습니다.'}
            </p>
          </section>

          {/* 올린 프로젝트 영역 */}
          <section className="w-full">
            <hr className="border-t border-gray-200 mt-20 mb-10" />
            <h2 className="text-[20px] font-semibold ml-4 mb-4">
              올린 프로젝트 <span className="text-blue-500">{displayProjects.length}</span>
            </h2>
            <div className="grid grid-cols-5 gap-4 mb-40">
              {displayProjects.slice(0, 5).map((project) => (
                <VerticalCard
                  key={project.id}
                  thumbnailUrl={project.thumbnailUrl}
                  title={project.title}
                  description={project.description}
                  progress={project.progress}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MakerProfile;
