import { Link } from 'react-router-dom';

const BreadcrumbHeader = (props) => {
  return (
    <div
      className="hero-wrap"
      style={{
        backgroundImage: `url(${
          props.bgImgPath ===
          'https://tour.klcg.gov.tw/media/klcgtour/attractions/10484882/cover_image.tif'
            ? `${process.env.PUBLIC_URL}/images/大武崙砲台.jpg`
            : props.bgImgPath
        })`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center vh-100">
          <div id="page_title" className="col-md-9 pb-5 text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link to="/">
                  首頁 <i className="fa fa-chevron-right"></i>
                </Link>
              </span>
              <span>
                {props.atPage} <i className="fa fa-chevron-right"></i>
              </span>
            </p>
            <h1 className="mb-0 bread">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
