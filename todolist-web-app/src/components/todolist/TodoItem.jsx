import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useDatasContext, useAuth } from '../../controllers/contexts';
import { api_deleteItem, api_todoList } from '../../controllers/todos';

const TodoItem = () => {
  const { todosData, setTodosData } = useDatasContext();
  const { token } = useAuth();
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
        alert(`${delTodoResJson.message} ${content}`);
      } else {
        alert(delTodoResJson.message);
      }
    };
    asyncDelTodo();
    e.preventDefault();
  };

  return todosData.map((todo, i) => {
    return (
      <li key={todo.id}>
        <label className="todoList_label">
          <input className="todoList_input" type="checkbox" value="true" />
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
