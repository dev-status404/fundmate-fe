import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import { Header } from '@repo/ui/components';
import FundingHistory from './pages/fundingHistory/fundingHistory';
import PaymentManagement from './pages/paymentManagement/paymentManagement';
import MakerProfile from './pages/makerProfile/makerProfile';
import StatsPage from './pages/stats/statsPage';

// 헤더 + 사이드바가 포함된 레이아웃
function LayoutWithSidebarAndHeader() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <aside className="w-[560px] shrink-0">
          <Sidebar />
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
      {/* 헤더 + 사이드바가 포함된 페이지 */}
      <Route element={<LayoutWithSidebarAndHeader />}>
        <Route path="/fundinghistory" element={<FundingHistory />} />
        <Route path="/paymentmanagement" element={<PaymentManagement />} />
        <Route path="/stats" element={<StatsPage />} />
      </Route>

      {/* 헤더만 포함된 페이지 */}
      <Route element={<LayoutWithHeader />}>
        <Route path="/userprofile-settings" element={<div>유저 프로필 설정 페이지</div>} />
        <Route path="/withdrawal" element={<div>회원 탈퇴 페이지</div>} />
        <Route path="/makerprofile" element={<MakerProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
