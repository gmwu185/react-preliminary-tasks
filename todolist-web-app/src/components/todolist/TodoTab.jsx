import { useState } from 'react';
import { useDatasContext } from '../../controllers/contexts';

const hrefLink = '#';

const TodoTab = () => {
  const { selectType, setSelectType, tabStatus, setTabStatus } = useDatasContext();

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
