import { useEffect } from 'react';
import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../../controllers/contexts';
import { api_todoList } from '../../../controllers/todos';

import NewTodoInput from '../todolist/NewTodoInput';
import TodoItems from '../todolist/TodoItems';
import Notodo from '../todolist/Notodo';

const ToDoListPage = () => {
  const { token } = useAuth();
  const { setSelectType, todosData, setTodosData } = useDatasContext();

  useEffect(() => {
    Notiflix.Loading.custom('讀取中 ...');
    setTimeout(() => {
      Notiflix.Loading.remove();
    }, 1000);
    const todoList = async () => {
      const res = await api_todoList(token || localStorage.getItem('token'));
      const resJson = await res.json();
      setTodosData(resJson.todos);
    };
    todoList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="todoList_Content">
      <NewTodoInput />
      {todosData.length > 0 ? (
        <TodoItems todosData={todosData} setSelectType={setSelectType} />
      ) : (
        <Notodo />
      )}
    </div>
  );
};

export default ToDoListPage;
