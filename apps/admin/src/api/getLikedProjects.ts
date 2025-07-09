import axios from "axios";

export interface Project {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  currentAmount: number;
  targetAmount: number;
  endDate: string;
  description: string;
}

export const getLikedProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get<Project[]>("/api/mypage/liked-projects");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch liked projects:", error);
    return [];
  }
};
