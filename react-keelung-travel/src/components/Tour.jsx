import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ImageHeader from './ImageHeader';

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
      <ImageHeader bgImgPath="https://tour.klcg.gov.tw/media/klcgtour/attractions/6263832/21eb35e5-a706-4ada-baac-3278753cfea7.jpg" />
      <h2>基隆市觀光旅遊資訊</h2>
      <Outlet context={[tourDatas]} />
    </>
  );
}
export default Tour;
