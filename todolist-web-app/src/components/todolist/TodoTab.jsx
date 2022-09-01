import { useState } from 'react';

const hrefLink = '#';

const TodoTab = (props) => {
  const {
    // selectType,
    setSelectType,
  } = props;

  const [tabStatus, setTabStatus] = useState([
    { type: 'all', text: '全部', active: true },
    { type: 'unfinish', text: '待完成', active: false },
    { type: 'finish', text: '已完成', active: false },
  ]);

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
