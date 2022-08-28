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
      <Outlet context={[tourDatas]} />
    </>
  );
}
export default Tour;
