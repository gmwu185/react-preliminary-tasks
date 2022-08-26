import { Link, useOutletContext } from 'react-router-dom';

function TourList() {
  const [tourDatas] = useOutletContext();
  
  return (
    <>
      <main>
        <h3>旅遊詳細列表</h3>
        <ul>
          {tourDatas.length > 0 ? (
            tourDatas.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link to={`/tour/${item.id}`}>{item.title}</Link>
                </li>
              );
            })
          ) : (
            <span>資料載入中…</span>
          )}
        </ul>
      </main>
    </>
  );
}

export default TourList;
