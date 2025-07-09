import axios from "axios";

// 타입 필요 시 정의
export interface SupportedProject {
  id: number;
  supportDate: string;
  supportNumber: string;
  title: string;
  option: string;
  price: string;
  paymentDate: string;
  thumbnailUrl: string;
}

// 사용자 후원한 프로젝트 리스트 불러오기
export const getSupportedProjects = async (): Promise<SupportedProject[]> => {
  try {
    const response = await axios.get<SupportedProject[]>("/api/users/me/supported-projects");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch supported projects:", error);
    return []; // Prevent UI crashes on error
  }
};
