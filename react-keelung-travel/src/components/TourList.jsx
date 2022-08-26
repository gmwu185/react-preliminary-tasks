import { Link, useOutletContext } from 'react-router-dom';
import ImageHeader from './ImageHeader';

function TourList() {
  const [tourDatas] = useOutletContext();

  return (
    <>
      <ImageHeader bgImgPath="https://tour.klcg.gov.tw/media/klcgtour/attractions/6263832/21eb35e5-a706-4ada-baac-3278753cfea7.jpg" />
      <section className="ftco-section">
        {/* <h3>旅遊詳細列表</h3> */}
        <div className="container">
          <ul className="row list-unstyled">
            {tourDatas.length > 0 ? (
              tourDatas.map((item, index) => {
                return (
                  <li className="col-md-6" key={item.id}>
                    <div className="project-wrap hotel">
                      <Link
                        className="img"
                        to={`/tour/${item.id}`}
                        style={{
                          backgroundImage: `url(${
                            item.cover_image ===
                            'https://tour.klcg.gov.tw/media/klcgtour/attractions/10484882/cover_image.tif'
                              ? 'images/大武崙砲台.jpg'
                              : item.cover_image
                          })`,
                        }}
                      >
                        <span className="price">
                          {item.ticket_price === '無' ||
                          item.ticket_price === '無門票' ||
                          item.ticket_price === '免門票'
                            ? '免費無需門票'
                            : '有收費或限制'}
                        </span>
                      </Link>
                      <div className="text p-4">
                        <h3 className="text-center">
                          <Link to={`/tour/${item.id}`}>{item.title}</Link>
                        </h3>
                      </div>
                      {/* <Link to={`/tour/${item.id}`}>{item.title}</Link> */}
                    </div>
                  </li>
                );
              })
            ) : (
              <span>資料載入中…</span>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default TourList;
