import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../../controllers/contexts';
import { api_todoList } from '../../../controllers/todos';

import NewTodoInput from '../todolist/NewTodoInput';
import TodoItems from '../todolist/TodoItems';
import Notodo from '../todolist/Notodo';

const ToDoListPage = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const { setSelectType, todosData, setTodosData } = useDatasContext();

  useEffect(() => {
    Notiflix.Loading.custom('讀取中 ...');
    setTimeout(() => {
      Notiflix.Loading.remove();
    }, 1000);
    const todoList = async () => {
      if (token === null) {
        navigate('/');
      } else {
        /** AJAX 取 todolist 資料
         * 不到資料或產生問題，todo 直接給以空陣列 (預設資料格式)
         * 當 token 判斷有錯誤時，將 react 上層元件定義變數與 localhost 內資料，處理成預設資料格式 (預設資料格式)
         */
        const todoListRes = await api_todoList(
          token || localStorage.getItem('token')
        );
        const todoListResJson = await todoListRes.json();
        setTodosData(todoListResJson?.todos ? todoListResJson.todos : []);
        if (todoListRes !== 200) {
          if (todoListResJson.message) {
            Notiflix.Notify.failure(
              `發生錯誤：${todoListResJson.message}，請重新登入！`
            );
            navigate('/');
            setToken(null);
            localStorage.setItem('token', null);
            localStorage.setItem('nickname', '');
            setTodosData([]);
          }
        }
      }
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
