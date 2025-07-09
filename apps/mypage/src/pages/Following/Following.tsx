import { useEffect, useState } from "react";
import { FollowingCard } from "./FollowingCard";

interface FollowingUser {
  id: number;
  name: string;
  initial: string;
  isFollowing: boolean;
}

const Following = () => {
  const [followings, setFollowings] = useState<FollowingUser[]>([]);
  const [followers, setFollowers] = useState<FollowingUser[]>([]);
  const [showFollowings, setShowFollowings] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 임시 더미 데이터 (백엔드 연동 시 교체)
    const mockFollowings: FollowingUser[] = [
      { id: 1, name: "닉네임1", initial: "CN", isFollowing: true },
      { id: 2, name: "닉네임2", initial: "CN", isFollowing: true },
      { id: 3, name: "닉네임3", initial: "CN", isFollowing: false },
      { id: 4, name: "닉네임4", initial: "CN", isFollowing: false },
      { id: 5, name: "닉네임5", initial: "CN", isFollowing: false },
    ];
    const mockFollowers: FollowingUser[] = [
      { id: 6, name: "팔로워1", initial: "CN", isFollowing: true },
      { id: 7, name: "팔로워2", initial: "CN", isFollowing: false },
    ];

    setFollowings(mockFollowings);
    setFollowers(mockFollowers);
    setLoading(false);
  }, []);

  const currentList = showFollowings ? followings : followers;

  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* Main */}
      <div className="flex flex-1">

        <main className="mt-[70px] ml-[470px] flex-1 p-8">
          {/* 상단 팔로잉/팔로워 탭 */}
          <h2 className="text-[25px] font-semibold mt-[-25px] ml-[60px] mb-[30px]">팔로잉</h2>
          <div className="flex gap-8 mb-8 border-b pb-2 w-[200px] ml-[60px]">
            <button
              onClick={() => setShowFollowings(true)}
              className={`flex items-center gap-1 text-[18px] ${
                showFollowings
                  ? "font-semibold text-black border-b-2 border-black pb-1"
                  : "text-[#343F59]"
              }`}
            >
              <span>팔로잉</span>
              <span className="text-[#5FBDFF]">{followings.length}</span>
            </button>
            <button
              onClick={() => setShowFollowings(false)}
              className={`flex items-center gap-1 text-[18px] ${
                !showFollowings
                  ? "font-semibold text-black border-b-2 border-black pb-1"
                  : "text-[#343F59]"
              }`}
            >
              <span>팔로워</span>
              <span className="text-[#5FBDFF]">{followers.length}</span>
            </button>
          </div>

          {/* 리스트 */}
          {loading ? (
            <div>Loading...</div>
          ) : currentList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {currentList.map((user) => (
                <FollowingCard
                  key={user.id}
                  name={user.name}
                  initial={user.initial}
                  isFollowing={user.isFollowing}
                />
              ))}
            </div>
          ) : (
            <div className="text-gray-500">
              {showFollowings ? "팔로잉한 사용자가 없습니다." : "팔로워가 없습니다."}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Following;
