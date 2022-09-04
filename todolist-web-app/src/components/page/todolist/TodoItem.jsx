import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../../controllers/contexts';
import {
  api_deleteItem,
  api_todoList,
  api_changeCheckbox,
} from '../../../controllers/todos';

const TodoItem = () => {
  const { todosData, setTodosData, selectType } = useDatasContext();
  const { token } = useAuth();
  const [todosStatusData, setTodosStatusData] = useState([]);
  useEffect(() => {
    if (selectType === 'unfinish') {
      setTodosStatusData(
        todosData.filter((todo) => todo.completed_at === null)
      );
    } else if (selectType === 'finish') {
      setTodosStatusData(
        todosData.filter((todo) => todo.completed_at !== null)
      );
    } else {
      setTodosStatusData(todosData);
    }
  }, [selectType, todosData]);
  const hrefLink = '#';

  const delTodo = ({ e, todo }) => {
    const { id, content } = todo;
    const asyncDelTodo = async () => {
      const delTodoRes = await api_deleteItem(token, id);
      const delTodoResJson = await delTodoRes.json();
      if (delTodoRes.status === 200) {
        const todoListRes = await api_todoList(token);
        const todoListResJson = await todoListRes.json();
        setTodosData(todoListResJson.todos);
        Notiflix.Notify.success(`${delTodoResJson.message} ${content}`);
      } else {
        Notiflix.Notify.failure(delTodoResJson.message);
      }
    };
    asyncDelTodo();
    e.preventDefault();
  };
  const toggleTodo = (todo) => {
    const checkTodo = todosData.find((item) => item.id === todo.id);
    // console.log('checkTodo', checkTodo);
    const asyncToggleTodo = async () => {
      const toggleTodotRes = await api_changeCheckbox(token, checkTodo.id);
      if (toggleTodotRes.status === 200) {
        const toggleTodotResJson = await toggleTodotRes.json();
        // console.log('toggleTodotResJson', toggleTodotResJson);

        /* 寫法一：更新資料不上提 */
        const newToggleTodos = await todosData.map((item) => {
          if (item.id === toggleTodotResJson.id) {
            return (item = toggleTodotResJson);
          } else {
            return item;
          }
        });
        // console.log('newToggleTodos', newToggleTodos);
        setTodosData(newToggleTodos);
        /* /寫法一：更新資料不上提 */

        /* 寫法二：更新資料會上提 */
        // const todoListRes = await api_todoList(token);
        // const todoListResJson = await todoListRes.json();
        // console.log('todoListResJson.todos', todoListResJson.todos);
        // setTodosData(todoListResJson.todos);
        /* /寫法二：更新資料會上提 */

        Notiflix.Notify.success(
          `${toggleTodotResJson.content} 切換為${
            checkTodo.completed_at !== null ? '待完成' : '已完成'
          }`
        );
      } else {
        Notiflix.Notify.failure(toggleTodotRes.message);
      }
    };
    asyncToggleTodo();
  };

  return todosStatusData.map((todo) => {
    return (
      <li key={todo.id}>
        <label className="todoList_label">
          <input
            className="todoList_input"
            type="checkbox"
            checked={todo.completed_at !== null}
            onChange={() => toggleTodo(todo)}
          />
          <span>{todo.content}</span>
        </label>
        <a href={hrefLink} onClick={(e) => delTodo({ e, todo })}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
      </li>
    );
  });
};

export default TodoItem;
