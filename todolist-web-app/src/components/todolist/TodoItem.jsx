import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDatasContext } from '../../controllers/contexts';

const hrefLink = '#';

const TodoItem = () => {
  const { todosData, selectType, setSelectType } = useDatasContext();

  return todosData.map((todo, i) => {
    return (
      <li key={todo.id}>
        <label className="todoList_label">
          <input className="todoList_input" type="checkbox" value="true" />
          <span>{todo.content}</span>
        </label>
        <a href={hrefLink}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
      </li>
    );
  });
};

export default TodoItem;
