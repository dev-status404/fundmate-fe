import { Header, Footer } from '@repo/ui/components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateFunding from './pages/createFunding/createFunding';
import FundingDetail from './pages/fundingDetail/fundingDetail';
import AskFundi from './pages/askFundi/askFundi';
import AskFundiResult from './pages/askFundi/askFundiResult';

function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex">
        <Routes>
          <Route path="/funding/create" element={<CreateFunding />} />
          <Route path="/funding/detail/:id" element={<FundingDetail />} />
          <Route path="/fundi">
            <Route path="request" element={<AskFundi />} />
            <Route path="response" element={<AskFundiResult />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;