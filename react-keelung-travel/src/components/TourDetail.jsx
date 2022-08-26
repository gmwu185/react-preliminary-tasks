import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import ImageHeader from './ImageHeader';

function TourDetail() {
  const para_id = useParams().Id;
  const navigate = useNavigate();
  const [tourDatas] = useOutletContext();
  const [tourData, setTourData] = useState({});

  useEffect(() => {
    const disposeTourApiData = (apiData) => {
      const tourFillterData = apiData.filter((item) => {
        return item.id === para_id;
      });
      if (tourFillterData.length === 0) {
        alert('無此分頁 ID，將重新導向列表頁！');
        navigate('/tour');
      }
      setTourData(tourFillterData[0]);
    };
    if (tourDatas.length === 0) {
      fetch(
        'https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json/'
      )
        .then((res) => res.json())
        .then((result) => {
          disposeTourApiData(result.attractions);
        });
    } else {
      disposeTourApiData(tourDatas);
    }
  }, [navigate, para_id, tourDatas]);

  return (
    <>
      {Object.keys(tourData).length === 0 ? (
        <span>資料載入中…</span>
      ) : (
        <div>
          <ImageHeader bgImgPath={tourData.cover_image} />
          {/* <img src={tourData.cover_image} alt={tourData.title} /> */}
          <h2>{tourData.title}</h2>
          <p>{tourData.address}</p>
          <p style={{whiteSpace: "pre-line"}}>{tourData.visit_hours}</p>
          <p style={{whiteSpace: "pre-line"}}>{tourData.ticket_price}</p>
          <p>{tourData.parking_information}</p>
          <p style={{whiteSpace: "pre-line"}}>{tourData.traffic_guideline}</p>
          <input
            type="button"
            value="回列表"
            onClick={() => {
              navigate('/tour');
            }}
          />
        </div>
      )}
    </>
  );
}

export default TourDetail;
