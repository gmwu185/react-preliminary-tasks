import { Routes, Route } from "react-router-dom";

import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Tour from './components/Tour';
import TourDetail from './components/TourDetail';
import TourList from './components/TourList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
