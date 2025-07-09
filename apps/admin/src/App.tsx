import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import { Header } from '@repo/ui/components';
import FundingHistory from './pages/FundingHistory/FundingHistory';

// 헤더 + 사이드바가 포함된 레이아웃
function LayoutWithSidebarAndHeader() {
  return (
    <div className="flex flex-col min-h-screen">
  <Header /> {/* 상단 고정 헤더 */}
  <div className="flex flex-grow">
    <aside className="w-[560px] shrink-0">
      <Sidebar /> {/* 좌측 고정 사이드바 */}
    </aside>
    <main className="flex-grow p-8">
      <Outlet />
    </main>
  </div>
</div>
  );
}

// 헤더만 포함된 레이아웃
function LayoutWithHeader() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <Outlet />
      </main>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 헤더 + 사이드바가 포함된 마이페이지 관련 경로 */}
      <Route element={<LayoutWithSidebarAndHeader />}>
        <Route path="/fundinghistory" element={<FundingHistory />} />
      </Route>

      {/* 헤더만 포함된 페이지 */}
      <Route element={<LayoutWithHeader />}>
        <Route path="/userprofile-settings" element={<div>유저 프로필 설정 페이지</div>} />
        <Route path="/withdrawal" element={<div>회원 탈퇴 페이지</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
