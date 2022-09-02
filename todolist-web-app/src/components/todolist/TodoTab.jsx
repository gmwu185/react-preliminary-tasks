import { useDatasContext } from '../../controllers/contexts';

const TodoTab = () => {
  const { setSelectType, tabStatus, setTabStatus } = useDatasContext();
  const hrefLink = '#';

  return (
    <ul className="todoList_tab">
      {tabStatus.map((item, i) => {
        const changeActive = (e) => {
          const statuFilter = tabStatus.filter((item) => {
            if (e.target.text === item.text) {
              item.active = true;
              setSelectType(item.type);
            } else {
              item.active = false;
            }
            return item;
          });
          setTabStatus(statuFilter);
          e.preventDefault();
        };
        return (
          <li key={i}>
            <a
              href={hrefLink}
              className={item.active ? 'active' : ''}
              onClick={(e) => changeActive(e)}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoTab;
