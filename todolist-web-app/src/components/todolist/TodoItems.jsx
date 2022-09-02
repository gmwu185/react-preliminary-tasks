import { useDatasContext } from '../../controllers/contexts';

import TodoTab from '../todolist/TodoTab';
import TodoItem from '../todolist/TodoItem';

const hrefLink = '#';

const TodoItems = () => {
  const { todosData, selectType, setSelectType } = useDatasContext();

  return (
    <div className="todoList_list">
      <TodoTab
        // selectType={selectType}
        setSelectType={setSelectType}
      />
      <div className="todoList_items">
        <ul className="todoList_item">
          <TodoItem todosData={todosData} />
        </ul>
        <div className="todoList_statistics">
          <p> 5 個已完成項目</p>
          <a href={hrefLink}>清除已完成項目</a>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
