const ImageHeader = (props) => {
  return (
    <div
      className="hero-wrap js-fullheight"
      style={{
        backgroundImage: `url(${
          props.bgImgPath ===
          'https://tour.klcg.gov.tw/media/klcgtour/attractions/10484882/cover_image.tif'
            ? 'images/大武崙砲台.jpg'
            : props.bgImgPath
        })`,
      }}
    >
      {/* <div className="overlay"></div> */}
      <div className="container">
        <div
          className="row no-gutters slider-text js-fullheight align-items-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-7 ftco-animate">
            <span className="subheading">Welcome to Pacific</span>
            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
            <p className="caps">
              Travel to the any corner of the world, without going around in
              circles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;
