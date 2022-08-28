import { Link } from 'react-router-dom';

const Attractions = (props) => {
  const { data } = props;
  return (
    <section className="ftco-section pt-3 pb-0">
      <div className="container">
        <ul className="row list-unstyled">
          {data.length > 0 ? (
            data.map((item, index) => {
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
                            ? `${process.env.PUBLIC_URL}/images/大武崙砲台.jpg`
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
  );
};

export default Attractions;
