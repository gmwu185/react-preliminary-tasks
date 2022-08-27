import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BreadcrumbHeader from './BreadcrumbHeader';

function TourList() {
  const [tourDatas] = useOutletContext();
  const reduceTourDatas = tourDatas.reduce((accumulator, currentValue) => {
    /** JavaScript reduce 包裝地區陣列與物件資料
     * 資料來源：JavaScript reduce 在做什麼？ (https://w3c.hexschool.com/blog/a2cb755f)
     * accumulator -> reduce 第二參數，積疊物件
     * 正則表達判斷產生市與區的陣列資料
     * 1. 判斷有無值至其他，EX: { 其他: [ {地點1}, {地點2}, ...] }
     * 2. 有值與索引位置 1 (長度 2) 做為取用，以屬性拆分地區名，將值集中在該區的陣列下，EX: {"七堵區" : [ {地點1}, {地點2}, ...], "中山區": [ {地點1}, {地點2}, ...]}
     */
    const areaRegular = currentValue.address.match(/.+?(市|區)/g);
    if (areaRegular && areaRegular.length >= 2) {
      accumulator[areaRegular[1]]
        ? accumulator[areaRegular[1]].push(currentValue)
        : (accumulator[areaRegular[1]] = []);
    } else {
      accumulator['其他']
        ? accumulator['其他'].push(currentValue)
        : (accumulator['其他'] = []);
    }
    return accumulator;
  }, {});
  const [areaSelected, setAreaSelected] = useState('');
  const [changeAreaData, setChangeAreaData] = useState([]);
  useEffect(() => {
    setChangeAreaData(tourDatas);
  }, [tourDatas]);

  return (
    <>
      <BreadcrumbHeader
        bgImgPath="https://tour.klcg.gov.tw/media/klcgtour/attractions/6263832/21eb35e5-a706-4ada-baac-3278753cfea7.jpg"
        atPage="旅遊基隆"
        title="旅遊景點列表"
      />

      <section className="ftco-section pb-5 pt-0 mt-n4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="search-wrap-1">
                <form action="#" className="search-property-1">
                  <div className="row no-gutters">
                    <div className="col-lg d-flex">
                      <div className="form-group p-4">
                        <label htmlFor="#area_selecte">選擇地區</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down"></span>
                            </div>
                            <select
                              id="area_selecte"
                              className="form-control"
                              defaultValue={areaSelected}
                              onChange={(e) => setAreaSelected(e.target.value)}
                            >
                              <option value={areaSelected} disabled>
                                請選擇行政區
                              </option>
                              <option value="all">{`全部 (${tourDatas.length})`}</option>
                              {Object.entries(reduceTourDatas).map((area) => {
                                return (
                                  <option key={area[0]} value={area[0]}>
                                    {`${area[0]} (${area[1].length})`}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group d-flex w-100 border-0">
                        <div className="form-field w-100 align-items-center d-flex">
                          <input
                            type="button"
                            value="送出"
                            className="align-self-stretch form-control btn btn-primary p-3"
                            onClick={() => {
                              if (areaSelected) {
                                areaSelected === 'all'
                                  ? setChangeAreaData(tourDatas)
                                  : setChangeAreaData(
                                      reduceTourDatas[areaSelected]
                                    );
                              } else {
                                alert('請選行政區');
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section pt-3">
        <div className="container">
          <ul className="row list-unstyled">
            {changeAreaData.length > 0 ? (
              changeAreaData.map((item, index) => {
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
