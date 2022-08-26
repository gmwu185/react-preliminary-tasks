import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="ftco-footer bg-bottom ftco-no-pt"
      style={{ backgroundImage: `url(images/bg_3.jpg)` }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">服務安全宣告</h2>
              <ul className="pl-3">
                <li>
                  <h6>個人資料之收集及運用</h6>
                  <p>
                    當您參與本站相關服務時，您所提供之資料，本網站不會將其應用在超出收集特定目的以外的用途，亦不會對第三者揭露。
                  </p>
                </li>
                <li>
                  <h6>資料安全及保護</h6>
                  <p>
                    本網站主機裝設防火牆及入侵偵測系統防止非法入侵、破壞或竊取資料，避免相關資料遭到非法存取使用。此外，所有下載服務皆為基隆市政府所製作檢測的，您可放心存取使用。
                  </p>
                </li>
                <li>
                  <h6>自我保護措施</h6>
                  <p>
                    最後提醒您切勿將個人資料提供給任何人。且在登入各管理網頁後，務必記得登出，以保障您的權益。
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-3">
              <h2 className="ftco-heading-2">活動快訊</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="py-2 d-block">
                    新聞公告 & 消息
                  </Link>
                </li>
                <li>
                  <Link to="#" className="py-2 d-block">
                    最新活動
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-3">
              <h2 className="ftco-heading-2">聯絡我們</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="text">
                      基隆市政府觀光及城市行銷處 (20241 基隆市中正區義一路21號)
                    </span>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="text">(02) 2427-4830</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="text">意見信箱</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              版權所有 基隆市政府 &copy; All rights reserved
              <br />
              <a
                href="https://tour.klcg.gov.tw/"
                target="_blank"
                rel="noreferrer"
              >
                基隆旅遊網 ( 原站出處，
                <span className="text-danger">此站為 React Router 練習</span>)
              </a>
              <br />
              <small>
                最佳瀏覽狀態為 Google Chrome ‧ Firefox ‧ Edge ‧ Safari
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
