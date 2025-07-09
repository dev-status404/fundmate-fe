import { create } from "zustand";

interface Project {
  id: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  progress: number;
}

interface RecentViewedProjectsState {
  recentViewedProjects: Project[];
  addProject: (project: Project) => void;
}

export const useRecentViewedProjectsStore = create<RecentViewedProjectsState>((set) => ({
  recentViewedProjects: [
    {
      id: 1,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 1",
      description: "프로젝트 설명입니다.",
      progress: 80,
    },
    {
      id: 2,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 2",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 3,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 3",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 4,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 4",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 5,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 5",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 6,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 6",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 7,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 7",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 8,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 8",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 9,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 9",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 10,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 10",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 11,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 11",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
    {
      id: 12,
      thumbnailUrl: "https://picsum.photos/300/300",
      title: "테스트 프로젝트 12",
      description: "프로젝트 설명입니다.",
      progress: 45,
    },
  ],

  addProject: (project) =>
    set((state) => ({
      recentViewedProjects: [
        project,
        ...state.recentViewedProjects.filter((p) => p.id !== project.id),
      ].slice(0, 12),
    })),
}));
