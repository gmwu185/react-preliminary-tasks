import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useDatasContext, useAuth } from '../../controllers/contexts';
import {
  api_deleteItem,
  api_todoList,
  api_changeCheckbox,
} from '../../controllers/todos';

const TodoItem = () => {
  const { todosData, setTodosData } = useDatasContext();
  const { token } = useAuth();
  const hrefLink = '#';

  // useEffect(() => {
  //   console.log('useEffect todosData', todosData);
  // }, [todosData]);

  const delTodo = ({ e, todo }) => {
    const { id, content } = todo;
    const asyncDelTodo = async () => {
      const delTodoRes = await api_deleteItem(token, id);
      const delTodoResJson = await delTodoRes.json();
      if (delTodoRes.status === 200) {
        const todoListRes = await api_todoList(token);
        const todoListResJson = await todoListRes.json();
        setTodosData(todoListResJson.todos);
        alert(`${delTodoResJson.message} ${content}`);
      } else {
        alert(delTodoResJson.message);
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

        alert(`${toggleTodotResJson.content} 完成切換`);
      } else {
        alert(toggleTodotRes.message);
      }
    };
    asyncToggleTodo();
  };

  return todosData.map((todo) => {
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
