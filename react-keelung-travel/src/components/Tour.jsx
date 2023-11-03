import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";

import { SwalLoader, msgSwal } from "../vendorModule/Swal";

function Tour() {
  const [tourDatas, setRourDatas] = useState([]);

  useEffect(() => {
    SwalLoader();
    if (tourDatas.length === 0) {
      const proxySuccessResult = (result) => {
        setRourDatas(result.attractions);
        Swal.fire({
          position: "top-end",
          icon: "info",
          html: `<small>完整旅遊景點資料已完全載入頁面，可透過選擇地區過濾操作！</small>`,
          timer: 3000,
        });
      };

      /** cors proxy service use-1
       * 可直接使用，但會限流量與次數
       */
      // fetch(
      //   'https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json/'
      // )
      //   .then((res) => res.json())
      //   .then( proxySuccessResult )
      //   .catch((err) => {
      //     console.log(err);
      //     return msgSwal(`發生錯誤：${err.message}`);
      //   });
      /* /cors proxy service use-1 */

      /** cors proxy service use-2
       * 需進入畫面點按執行按鈕才可使用
       */
      // fetch("https://cors-anywhere.herokuapp.com/https://tour.klcg.gov.tw/data/attractions.json")
      //   .then((res) => res.json())
      //   .then( (result) => {
      //     setRourDatas(result.attractions);
      //     Swal.fire({
      //       position: 'top-end',
      //       icon: 'info',
      //       html: `<small>完整旅遊景點資料已完全載入頁面，可透過選擇地區過濾操作！</small>`,
      //       // showConfirmButton: false,
      //       timer: 3000,
      //     });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     return msgSwal(`發生錯誤：${err.message}`);
      //   })
      /* /cors proxy service use-2 */

      /** cors proxy service use-3
       * https://github.com/Freeboard/thingproxy
       */
      // fetch(
      //   "https://thingproxy.freeboard.io/fetch/https://tour.klcg.gov.tw/data/attractions.json"
      // )
      //   .then((res) => res.json())
      //   .then(proxySuccessResult)
      //   .catch((err) => {
      //     console.log(err);
      //     return msgSwal(`發生錯誤：${err.message}`);
      //   });
      /* /cors proxy service use-3 */

      /** cors proxy service use-4
       * https://allorigins.win/
       */
      // fetch(`https://api.allorigins.win/get?url=${'https://tour.klcg.gov.tw/data/attractions.json'}`)
      //   .then((res) => res.json())
      //   .then( (data) => {
      //     console.log('allorigins data.contents', parseJSON(data.contents))
      //   })
      //   .catch(err => console.log('allorigins err', err))
      /* /cors proxy service use-4 */

      /* 直接取用政府資料開放平臺資料 json 檔 */
      fetch(
        `${process.env.PUBLIC_URL}/data/attractions.json`
      )
        .then((res) => res.json())
        .then(proxySuccessResult)
        .catch((err) => {
          console.log(err);
          return msgSwal(`發生錯誤：${err.message}`);
        });
      /* /直接取用政府資料開放平臺資料 json 檔 */
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
