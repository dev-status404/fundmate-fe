import { NavLink } from "react-router-dom";
import userImg from "../../assets/images/user.png";
import { MediumFont, SubTitle, Title } from "@repo/ui/styles";
import { MainButton } from "@repo/ui/components";

const Sidebar = () => {
  const supporterMenu = [
    { label: "후원한 프로젝트", path: "/mypage/projects/supported" },
    { label: "찜한 프로젝트", path: "/mypage/projects/liked" },
    { label: "팔로잉", path: "/mypage/projects/following" },
    { label: "내 후기", path: "/mypage/projects/myreviews" },
  ];

  const makerMenu = [
    { label: "펀딩 내역", path: "/fundinghistory" },
    { label: "통계 관리", path: "/stats" },
    { label: "결제 관리", path: "/paymentmanagement" },
    { label: "프로젝트 만들기", path: "/" },
  ];

  return (
    <div className="flex justify-end pr-10">
      <aside className="w-[400px] bg-white rounded-[10px] flex flex-col items-center gap-[40px] mt-[70px]">
        {/* 유저 프로필 */}
        <div className="flex flex-col items-center gap-[20px] w-full">
          <div
            className="w-[120px] h-[120px] rounded-full overflow-hidden border border-gray-300 cursor-pointer"
            onClick={() => (window.location.href = "/mypage")}
          >
            <img src={userImg} alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <Title>나는야 서포터 님</Title>
            <MediumFont className="text-[#7E7C7C]">abc@email.com</MediumFont>
            <MediumFont>한줄 소개</MediumFont>
          </div>
          <MainButton
            label="내 정보 설정"
            width="w-full"
            onClick={() => (window.location.href = "/user/settings")}
          />
        </div>

        {/* 나의 활동 (서포터) */}
        <div className="w-full flex flex-col gap-[14px] p-2">
          <SubTitle className="text-gray-400">나의 활동 (서포터)</SubTitle>
          <div className="flex flex-col gap-[10px]">
            {supporterMenu.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `text-left text-[22px] font-medium pl-[10px] transition-colors ${
                    isActive ? "text-[#5FBDFF]" : "text-black hover:text-[#5FBDFF]"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* 나의 활동 (메이커) */}
        <div className="w-full flex flex-col gap-[14px] p-2">
          <SubTitle className="text-gray-400">나의 활동 (메이커)</SubTitle>
          <div className="flex flex-col gap-[10px]">
            {makerMenu.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `text-left text-[22px] font-medium pl-[10px] transition-colors ${
                    isActive ? "text-[#5FBDFF]" : "text-black hover:text-[#5FBDFF]"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
