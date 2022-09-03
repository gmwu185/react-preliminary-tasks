import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../controllers/contexts';
import { api_deleteItem, api_todoList } from '../../controllers/todos';

import TodoTab from '../todolist/TodoTab';
import TodoItem from '../todolist/TodoItem';

const TodoItems = () => {
  const { todosData, setTodosData } = useDatasContext();
  const { token } = useAuth();
  const hrefLink = '#';

  const delAllTodoCompleted = (e) => {
    Notiflix.Confirm.show(
      '清除已完成項目',
      '請確定是否需要清除所有已完成項目',
      '確定',
      '取消',
      () => {
        todosData.forEach((el) => {
          if (el.completed_at) {
            const asyncDelAllTodoCompleted = async () => {
              const delAllTodoCompletedRes = await api_deleteItem(token, el.id);
              const delAllTodoCompletedResJson =
                await delAllTodoCompletedRes.json();
              if (delAllTodoCompletedRes.status === 200) {
                Notiflix.Notify.success(
                  `${el.content} ${delAllTodoCompletedResJson.message}`
                );
                const todoListRes = await api_todoList(token);
                const todoListResJson = await todoListRes.json();
                setTodosData(todoListResJson.todos);
              } else {
                Notiflix.Notify.failure(
                  `${el.content} 刪除發生錯誤，原因：${delAllTodoCompletedResJson.message}`
                );
              }
            };
            asyncDelAllTodoCompleted();
          }
        });
      },
      () => {
        Notiflix.Notify.failure('取消清除已完成項目');
      }
    );
    e.preventDefault();
  };

  return (
    <div className="todoList_list">
      <TodoTab />
      <div className="todoList_items">
        <ul className="todoList_item">
          <TodoItem />
        </ul>
        <div className="todoList_statistics">
          <p>
            {todosData.filter((todo) => todo.completed_at !== null).length}{' '}
            個已完成項目
          </p>
          <a href={hrefLink} onClick={(e) => delAllTodoCompleted(e)}>
            清除已完成項目
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
