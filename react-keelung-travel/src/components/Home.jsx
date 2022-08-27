import { Link } from 'react-router-dom';
import ImageHeader from './ImageHeader';

function Home() {
  return (
    <>
      <ImageHeader bgImgPath="https://tour.klcg.gov.tw/media/klcgtour/attractions/5821017/55f1314c-bc36-4691-aff6-abe5408e424d.jpg" />
      <section className="ftco-section services-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5 order-lg-last heading-section pl-lg-5 d-flex align-items-center">
              <div className="w-100">
                <h2 className="mb-4">基隆，立既出發！</h2>
                <p>
                  基隆，不只有大家熟知的廟口夜市，往海邊有著美麗繽紛的正濱漁港，懷舊的老漁港在夕陽餘暉之下更顯動人；往山邊的山丘，讓基隆擁抱著海洋與山丘，愜意的吹著山風俯瞰海洋，就像是有著豐富故事，等著旅人們，來去基隆探訪有趣的景點及文化吧。
                </p>
                <Link
                  to="tour"
                  className="btn btn-primary py-3 px-4 mb-5 mb-lg-3"
                >
                  查詢旅遊基隆資訊
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    className="services services-1 color-1 d-block img"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/services-1.jpg)` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-paragliding"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">必玩攻略</h3>
                      <ul className="pl-4 mb-0">
                        <li>這裡，很基隆</li>
                        <li>滄桑與美麗，最合拍</li>
                        <li>跟著基隆人，這樣吃</li>
                        <li>循著老屋，聽故事</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    className="services services-1 color-2 d-block img"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/services-2.jpg)` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-route"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">交通一次上手</h3>
                      <p>
                        基隆與台北緊密連結，有許多搭乘方式來到基隆，讓愛旅遊的人們更加方便，國際級郵輪觀光資源豐富著海洋假期。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    className="services services-1 color-3 d-block img"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/services-3.jpg)` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-tour-guide"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">推薦餐廳</h3>
                      <p>
                        基隆美食之多，讓你眼花撩亂了嗎？無論小吃攤販，還是景觀餐廳，基隆可謂是應有盡有，照著攻略吃就對啦！
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    className="services services-1 color-4 d-block img"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/services-4.jpg)` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-map"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">想去哪玩</h3>
                      <p>
                        基隆，依著山望向海的海港城市，因地理雨水豐沛煙雨濛濛，也因歷史豐富人文濃濃文化，底蘊造就多元城市光景。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
