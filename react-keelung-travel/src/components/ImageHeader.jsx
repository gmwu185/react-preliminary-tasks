import { Link } from 'react-router-dom';

const ImageHeader = (props) => {
  return (
    <div
      className="hero-wrap"
      style={{
        backgroundImage: `url(${props.bgImgPath})`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center vh-100">
          <Link
            to="tour"
            className="icon d-flex align-items-center justify-content-center mx-4"
          >
            <span className="fa fa-ship"></span>
          </Link>
          <div className="col col-md-6">
            <span className="subheading">歡迎來到基隆</span>
            <h1 className="mb-2">
              <span className="d-inline-block">一起發現，</span>
              <span className="d-inline-block">你最喜歡的基隆</span>
            </h1>
            <p className="caps">
              <span className="d-inline-block">台灣山海城市之一，</span>
              <span className="d-inline-block">不用繞圈子</span>
              <span className="d-inline-block">最美的就是這裡…</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;
