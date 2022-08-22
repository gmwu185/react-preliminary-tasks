import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TourDetail() {
  const { Id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      'https://cors.eu.org/https://gis.taiwan.net.tw/XMLReleaseALL_public/hotel_C_f.json'
    )
      .then((res) => res.json())
      .then((result) => {
        const newData = result.XML_Head.Infos.Info.filter(
          (item) => item.Id === Id
        );
        setData({ ...newData[0] });
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {Object.keys(data).length == 0 ? (
        <span>資料載入中…</span>
      ) : (
        <main>
          <h2>{data.Name}</h2>
          <input
            type="button"
            value="回列表"
            onClick={() => {
              navigate('/tour');
            }}
          />
          <br />
          <img src={data.Picture1} />
          <p>{data.Description}</p>
        </main>
      )}
    </>
  );
}

export default TourDetail;
