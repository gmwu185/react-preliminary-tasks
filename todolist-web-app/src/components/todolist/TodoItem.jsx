import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const hrefLink = '#';

const TodoItem = (props) => {
  const {
    todosData,
    // selectType,
    // setSelectType,
  } = props;

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
