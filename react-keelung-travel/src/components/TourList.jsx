import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import BreadcrumbHeader from './BreadcrumbHeader';
import SelecteArea from './SelecteArea';
import Attractions from './Attractions';
import Pagination from './Pagination';

function TourList() {
  const [tourDatas] = useOutletContext();
  const [areaSelected, setAreaSelected] = useState({
    str: '',
    data: [],
  });
  const [pageCalce, setPageCalce] = useState({
    per: 10, // 每頁幾筆資料
    total: 0,
    current: 1, // 目前頁面
    data: [], // 當前頁面區間資料
  });

  const setData = (data) => {
    const filterData = data.filter((item, index) =>
      pageCalce.start <= index && pageCalce.end > index ? item : ''
    );
    setPageCalce({
      ...pageCalce,
      start: (pageCalce.current - 1) * pageCalce.per,
      end: pageCalce.start + pageCalce.per,
      total: Math.ceil(areaSelected.data.length / pageCalce.per),
      data: filterData,
    });
  };

  useEffect(() => {
    setAreaSelected((status) => ({ ...status, data: tourDatas }));
    setData(areaSelected.data);
  }, [tourDatas]);

  useEffect(() => {
    setPageCalce({
      ...pageCalce,
      current:
        pageCalce.current > pageCalce.total
          ? pageCalce.total
          : pageCalce.current,
    });
    setData(areaSelected.data);
  }, [pageCalce.current, pageCalce.start, pageCalce.end, areaSelected.data]);

  return (
    <>
      <BreadcrumbHeader
        bgImgPath={`${process.env.PUBLIC_URL}/images/tour_cover.jpg`}
        atPage="旅遊基隆"
        title="旅遊景點列表"
      />
      <SelecteArea
        tourDatas={tourDatas}
        areaSelected={areaSelected}
        setAreaSelected={setAreaSelected}
        pageCalce={pageCalce}
        setPageCalce={setPageCalce}
      />
      <Pagination
        areaSelected={areaSelected}
        setAreaSelected={setAreaSelected}
        pageCalce={pageCalce}
        setPageCalce={setPageCalce}
      />
      <Attractions data={pageCalce.data} />
      <Pagination
        areaSelected={areaSelected}
        setAreaSelected={setAreaSelected}
        pageCalce={pageCalce}
        setPageCalce={setPageCalce}
      />
    </>
  );
}

export default TourList;
