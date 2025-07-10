import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import { Header } from "@repo/ui/components";

import Mypage from './pages/Mypage/Mypage';
import SupportedProjects from './pages/Supportedproject/supportedProjects';
import LikedProjects from './pages/Likedprojects/LikedProjects';
import Following from './pages/Following/Following';
import UserProfileSettings from './pages/Userprofilesettings/UserProfileSettings';
import Withdrawal from './pages/Withdrawal/withdrawal';
import MyReviews from './pages/Myreviews/MyReviews';
import SupporterProfile from './pages/Supporterprofile/SupporterProfile';

// 헤더 + 사이드바가 포함된 레이아웃
function LayoutWithSidebarAndHeader() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* 상단 고정 헤더 */}
      <div className="flex flex-grow">
        <Sidebar /> {/* 좌측 고정 사이드바 */}
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 헤더 + 사이드바가 포함된 마이페이지 관련 경로 */}
      <Route element={<LayoutWithSidebarAndHeader />}>
        <Route path="/" element={<Mypage />} />
        <Route path="/supported-projects" element={<SupportedProjects />} />
        <Route path="/liked-projects" element={<LikedProjects />} />
        <Route path="/following" element={<Following />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/supporter-profile" element={<SupporterProfile />} />
      </Route>
      {/* 헤더만 포함된 페이지 */}
      <Route path="/userprofile-settings" element={
        <>
          <Header />
          <UserProfileSettings />
        </>
      } />
      <Route path="/withdrawal" element={
        <>
          <Header />
          <Withdrawal />
        </>
      } />
    </Routes>
  </BrowserRouter>
);

export default App;
