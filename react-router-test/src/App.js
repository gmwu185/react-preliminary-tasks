import { Routes, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import Layout from './components/front/Layout';
import Home from './components/front/Home';
import FQA from './components/front/FQA';
import About from './components/front/About';
import AdminLayout from './components/dashboard/AdminLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import DashboardMember from './components/dashboard/DashboardMember';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FQA />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="member" element={<DashboardMember />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
