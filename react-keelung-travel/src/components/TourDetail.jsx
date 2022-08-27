import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import BreadcrumbHeader from './BreadcrumbHeader';

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
          <BreadcrumbHeader
            bgImgPath={tourData.cover_image}
            atPage="旅遊基隆"
            title={tourData.title}
          />
          <div className="contact-section py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <h2>{tourData.title}</h2> */}
                  <ul className="row list-unstyled">
                    <li className="col-md-3 mb-3">
                      <div className="h-100 align-self-stretch box p-4 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <h3 className="mb-2">地址</h3>
                        <p className="mb-0">{tourData.address}</p>
                      </div>
                    </li>
                    <li className="col-md-3 mb-3">
                      <div className="h-100 align-self-stretch box p-4 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-clock-o"></span>
                        </div>
                        <h3 className="mb-2">開放時間</h3>
                        <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                          {tourData.visit_hours}
                        </p>
                      </div>
                    </li>
                    <li className="col-md-3 mb-3">
                      <div className="h-100 align-self-stretch box p-4 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-ticket"></span>
                        </div>
                        <h3 className="mb-2">收費或門票</h3>
                        <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                          {tourData.ticket_price}
                        </p>
                      </div>
                    </li>
                    <li className="col-md-3 mb-3">
                      <div className="h-100 align-self-stretch box p-4 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-thumb-tack"></span>
                        </div>
                        <h3 className="mb-2">停車資訊</h3>
                        <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                          {tourData.parking_information}
                        </p>
                      </div>
                    </li>
                    <li className="col-md-12 mb-3">
                      <div className="h-100 align-self-stretch box p-4 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-bus"></span>
                        </div>
                        <h3 className="mb-2">交通指引</h3>
                        <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                          {tourData.traffic_guideline}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center">
                    <input
                      type="button"
                      value="回列表"
                      className="btn btn-primary btn-lg px-5 py-3"
                      onClick={() => {
                        navigate('/tour');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TourDetail;
