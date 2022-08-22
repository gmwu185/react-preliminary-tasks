import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TourList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://cors.eu.org/https://gis.taiwan.net.tw/XMLReleaseALL_public/hotel_C_f.json'
    )
      .then((res) => res.json())
      .then((result) => {
        const newData = result.XML_Head.Infos.Info;
        setData(newData);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <main>
        <h3>旅遊詳細列表</h3>
        <ul>
          {data.length > 0 ? (
            data.map((item, index) => {
              if (index <= 50) {
                return (
                  <li key={index}>
                    <Link to={`/tour/${item.Id}`}>{item.Name}</Link>
                  </li>
                );
              }
            })
          ) : (
            <span>資料載入中…</span>
          )}
        </ul>
      </main>
    </>
  );
}

export default TourList;
