import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Tour() {
  const [tourDatas, setRourDatas] = useState([]);
  useEffect(() => {
    fetch(
      'https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json/'
    )
      .then((res) => res.json())
      .then((result) => setRourDatas(result.attractions));
  }, []);
  
  return (
    <>
      <h2>基隆市觀光旅遊資訊</h2>
      <Outlet context={[tourDatas]} />
    </>
  );
}
export default Tour;
