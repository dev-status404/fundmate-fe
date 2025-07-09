import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { SupportedProject } from "../../api/supportedProjects"; 

const SupportedProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleData: SupportedProject[] = [
    {
      id: 1,
      supportDate: "2025.06.17",
      supportNumber: "12345678",
      title: "책이 쌓일수록 귀엽다, 실버 아티산 키캡",
      option: "옵션 1",
      price: "1,556,900원",
      paymentDate: "2025.06.25 결제 예정",
      thumbnailUrl: "https://picsum.photos/300/300",
    },
    {
      id: 2,
      supportDate: "2025.06.17",
      supportNumber: "87654321",
      title: "창의력 넘치는 독서대, 북스탠드",
      option: "옵션 2",
      price: "99,000원",
      paymentDate: "2025.06.25 결제 예정",
      thumbnailUrl: "https://picsum.photos/300/300",
    },
  ];

  return (
    <div>
      <div className="flex justify-center mt-[80px]">

        {/* Main Content */}
        <div className="mt-[-20px] ml-[530px] w-[1300px]">
          <h2 className="text-[24px] font-semibold mb-6">후원한 프로젝트</h2>

          {/* 후원한 프로젝트 리스트 */}
          <div className="flex flex-wrap gap-4">
            {sampleData.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/supported-projects/${project.id}`)}
                className="cursor-pointer flex flex-row items-center p-[15px] pr-[20px] border border-[#E2E8F0] rounded-[6px] w-[600px] h-[200px] hover:shadow-md transition"
              >
                {/* 썸네일 */}
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-[160px] h-[160px] object-cover rounded-[6px] flex-shrink-0"
                />

                {/* 우측 정보 영역 */}
                <div className="flex flex-col gap-[18px] ml-[25px] w-[500px]">
                  {/* 후원일 + 후원번호 */}
                  <div className="flex flex-row gap-[10px] text-[18px] leading-[12px] text-[#7E7C7C] font-medium">
                    <p>후원일 {project.supportDate}</p>
                    <p>후원번호 {project.supportNumber}</p>
                  </div>

                  {/* 프로젝트명 + 옵션 */}
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] text-black font-medium line-clamp-2">
                      {project.title}
                    </p>
                    <p className="text-[18px] leading-[4px] text-[#7E7C7C] font-medium">
                      {project.option}
                    </p>
                  </div>

                  {/* 금액 + 결제 예정일 */}
                  <div className="flex mt-[10px] flex-col gap-[12px]">
                    <p className="text-[20px] leading-[17px] text-black font-medium">
                      {project.price}
                    </p>
                    <p className="text-[18px] leading-[12px] text-[#FF4343] font-medium">
                      {project.paymentDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedProjects;
