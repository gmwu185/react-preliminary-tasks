const Pagination = (props) => {
  const { pageCalce, setPageCalce } = props;
  const goToPageTitle = () => {
    const EL_page_title = document.querySelector('#page_title');
    EL_page_title.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const beforeAndAfterPage = (num) => {
    setPageCalce({
      ...pageCalce,
      current:
        pageCalce.current + num >= pageCalce.total
          ? pageCalce.total
          : pageCalce.current + num < 1
          ? 1
          : pageCalce.current + num,
    });
    goToPageTitle();
  };

  const goToPage = (num) => {
    setPageCalce({
      ...pageCalce,
      current: num,
    });
    goToPageTitle();
  };
  return (
    <>
      {pageCalce.total > 1 && pageCalce.data.length > 0 ? (
        <section className="ftco-section pt-0 pb-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li className="mx-1" onClick={() => beforeAndAfterPage(-1)}>
                      <span>&lt;</span>
                    </li>
                    {Array.from(new Array(pageCalce.total), (val, index) => {
                      return (
                        index + 1,
                        (
                          <li
                            className={`mx-1 ${
                              index + 1 === pageCalce.current ? 'active' : ''
                            }`}
                            key={index}
                            onClick={(e) => {
                              goToPage(Number(e.target.textContent));
                            }}
                          >
                            <span>{index + 1}</span>
                          </li>
                        )
                      );
                    })}
                    <li className="mx-1" onClick={() => beforeAndAfterPage(+1)}>
                      <span>&gt;</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default Pagination;
