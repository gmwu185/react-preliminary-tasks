import { useEffect } from 'react';

import { useDatasContext, useAuth } from '../../controllers/contexts';
import { api_todoList } from '../../controllers/todos';

import TodoNav from '../todolist/TodoNav';
import NewTodoInput from '../todolist/NewTodoInput';
import TodoItems from '../todolist/TodoItems';
import Notodo from '../todolist/Notodo';

const ToDoListPage = () => {
  const { token } = useAuth();
  const { setSelectType, todosData, setTodosData } = useDatasContext();

  useEffect(() => {
    const todoList = async () => {
      const res = await api_todoList(token || localStorage.getItem('token'));
      const resJson = await res.json();
      setTodosData(resJson.todos);
    };
    todoList();
    // eslint-disable-next-line
  }, []);

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
