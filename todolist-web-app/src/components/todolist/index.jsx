import TodoNav from '../todolist/TodoNav';
import NewTodoInput from '../todolist/NewTodoInput';
import TodoItems from '../todolist/TodoItems';
import Notodo from '../todolist/Notodo';

import { useDatasContext } from '../../controllers/contexts';

const ToDoListPage = () => {
  const { selectType, setSelectType, todosData, setTodosData } = useDatasContext();

  return (
    <div id="todoListPage" className="bg-half">
      <TodoNav />
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <NewTodoInput />
          {todosData.length > 0 ? (
            <TodoItems
              todosData={todosData}
              // selectType={selectType}
              setSelectType={setSelectType}
            />
          ) : (
            <Notodo />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoListPage;
