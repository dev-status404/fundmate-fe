import { useEffect, useState } from 'react';
import { VerticalCard } from "./VerticalCard";
import type { Project } from "../../api/getLikedProjects"; 


interface Project { // 임시 타입
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  currentAmount: number;
  targetAmount: number;
  endDate: string;
  description: string;
}

const LikedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 임시 더미 데이터
    const mockData: Project[] = [
      {
        id: 1,
        title: "환경 보호 프로젝트",
        thumbnailUrl: "https://picsum.photos/300/300",
        category: "환경",
        currentAmount: 500000,
        targetAmount: 1000000,
        endDate: "2025-08-01",
        description: "지구를 위한 작은 시작",
      },
      {
        id: 2,
        title: "유기동물 후원 프로젝트",
        thumbnailUrl: "https://picsum.photos/300/300",
        category: "동물",
        currentAmount: 200000,
        targetAmount: 500000,
        endDate: "2025-08-15",
        description: "유기동물 보호소 지원",
      },
      {
        id: 3,
        title: "청년 창업 펀딩",
        thumbnailUrl: "https://picsum.photos/300/300",
        category: "창업",
        currentAmount: 750000,
        targetAmount: 1000000,
        endDate: "2025-08-20",
        description: "청년 창업가의 꿈을 응원합니다",
      },
    ];

    setProjects(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Sidebar + Main */}
      <div className="flex flex-1">


        {/* Main Content */}
        <main className="flex-1 pl-[300px] pr-[50px] py-[30px] ml-[270px]">
          <h2 className="mt-[30px] text-[24px] font-semibold mb-6">찜한 프로젝트</h2>

          {loading ? (
            <div>Loading...</div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[360px] gap-y-8">
              {projects.map((project) => {
                const progress = Math.floor(
                  (project.currentAmount / project.targetAmount) * 100
                );

                return (
                  <VerticalCard
                    key={project.id}
                    thumbnailUrl={project.thumbnailUrl}
                    title={project.title}
                    description={project.description}
                    progress={progress}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-gray-500">찜한 프로젝트가 없습니다.</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LikedProjects;
