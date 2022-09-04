import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

import { SwalLoader, msgSwal } from '../vendorModule/Swal';

function Tour() {
  const [tourDatas, setRourDatas] = useState([]);

  useEffect(() => {
    SwalLoader();
    if (tourDatas.length === 0) {
      fetch(
        'https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json/'
      )
        .then((res) => res.json())
        .then((result) => {
          setRourDatas(result.attractions);
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            html: `<small>完整旅遊景點資料已完全載入頁面，可透過選擇地區過濾操作！</small>`,
            // showConfirmButton: false,
            timer: 3000,
          });
        })
        .catch((err) => {
          console.log(err);
          return msgSwal(`發生錯誤：${err.message}`);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Outlet context={[tourDatas]} />
    </>
  );
}
export default Tour;
