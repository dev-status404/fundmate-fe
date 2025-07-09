import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fundmateLogo from "../../../../../packages/ui/assets/images/Fundmate.png";

const Withdrawal = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleWithdrawal = () => {
    const confirmDelete = window.confirm("⚠️ 정말 회원 탈퇴하시겠습니까?");
    if (confirmDelete) {
      console.log("회원 탈퇴 진행");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-col justify-center items-center flex-grow px-4 mb-80">
        {/* 컨텐츠 박스 */}
        <div className="flex flex-col justify-center items-center w-[100%] max-w-[500px] p-8 gap-8">

          {/* 로고 */}
          <img
            src={fundmateLogo}
            alt="fundmate"
            className="w-[240px] h-[65px] mb-[10px]"
          />

          {/* 내용 */}
          <div className="flex flex-col items-start w-full gap-5">
            <h2 className="text-[20px] font-semibold text-black">회원 탈퇴</h2>

            <div className="flex flex-col w-full gap-2">
              <label className="text-[16px] font-medium text-black">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해 주세요."
                className="w-full h-[48px] px-4 border border-slate-300 rounded-md placeholder:text-slate-400 focus:border-[#5FBDFF] focus:outline-none text-[16px]"
              />
            </div>

            <p className="text-[15px] text-slate-500">
              회원 탈퇴를 원하시면 비밀번호를 입력해 주세요.
            </p>

            <div className="flex w-full justify-between gap-4 mt-4">
              <button
                onClick={handleWithdrawal}
                className="flex-1 h-[48px] flex justify-center items-center rounded-md border border-[#FB6565] text-[#FB6565] font-medium text-[16px] hover:bg-[#fb656510] transition"
              >
                회원 탈퇴
              </button>
              <button
                onClick={() => navigate(-1)}
                className="flex-1 h-[48px] flex justify-center items-center rounded-md bg-[#5FBDFF] text-white font-medium text-[16px] hover:bg-[#50aee8] transition"
              >
                돌아가기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Withdrawal;
