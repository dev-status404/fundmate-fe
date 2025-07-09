import { useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "예술", "의류", "디자인", "테크/가전",
  "게임", "홈/리빙", "향수/뷰티", "잡화"
];

const ageOptions = [
  "10대", "20대", "30대", "40대", "50대",
  "60대", "70대", "80대", "90대", "100대"
];

const UserProfileSetting = () => {
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [intro, setIntro] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => (prev === category ? null : category));
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nickname,
      gender,
      age,
      email,
      intro,
      selectedCategory,
      profileImage,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickChange = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-col items-center mt-[60px]">
        <h2 className="text-2xl font-semibold mr-[480px] mb-8">내 정보 설정</h2>

        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
          ) : (
            <div className="w-[130px] h-[130px] rounded-full bg-slate-200" />
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          <div className="flex gap-6 text-lg text-gray-500 underline cursor-pointer">
            <button type="button" onClick={handleClickChange}>바꾸기</button>
            <button type="button" onClick={() => setProfileImage(null)}>삭제</button>
          </div>
        </div>

        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[600px]">

          {/* 닉네임 */}
          <div>
            <label className="text-base font-medium">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full mt-2 p-3 border border-slate-300 rounded-md focus:border-[#5FBDFF] focus:outline-none"
              placeholder="닉네임을 입력하세요"
            />
          </div>

          {/* 성별 및 나이 */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-base font-medium">성별</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-3 text-base cursor-pointer py-2 px-3 rounded-md hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="gender"
                    value="여자"
                    checked={gender === "여자"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-5 h-5"
                  />
                  여자
                </label>
                <label className="flex items-center gap-3 text-base cursor-pointer py-2 px-3 rounded-md hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="gender"
                    value="남자"
                    checked={gender === "남자"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-5 h-5"
                  />
                  남자
                </label>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-base font-medium">나이</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full mt-2 p-3 border border-slate-300 rounded-md focus:border-[#5FBDFF] focus:outline-none"
              >
                <option value="">선택</option>
                {ageOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 이메일 */}
          <div>
            <label className="text-base font-medium">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border border-slate-300 rounded-md focus:border-[#5FBDFF] focus:outline-none"
              placeholder="이메일을 입력하세요"
            />
          </div>

          {/* 한줄 소개 */}
          <div>
            <label className="text-base font-medium">한줄 소개</label>
            <textarea
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              className="w-full mt-2 p-3 border border-slate-300 rounded-md resize-none h-[100px] focus:border-[#5FBDFF] focus:outline-none"
              placeholder="자기소개를 입력하세요"
            />
          </div>

          {/* 카테고리 선택 */}
          <div>
            <label className="text-base font-medium">카테고리 선택</label>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full h-[50px] text-sm transition ${
                    selectedCategory === category
                      ? "bg-[#5FBDFF] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 py-3 bg-gray-100 text-gray-500 rounded-md border"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-[#5FBDFF] text-white rounded-md"
            >
              확인
            </button>
          </div>

          {/* 회원탈퇴 버튼 */}
          <button
            type="button"
            className="mt-6 w-full h-[48px] flex justify-center items-center rounded-md text-[20px] font-medium underline text-[#7E7C7C] mb-[120px]"
            onClick={() => navigate("/withdrawal")}
          >
            회원탈퇴
          </button>
        </form>
      </main>
    </div>
  );
};

export default UserProfileSetting;
