import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const hrefLink = '#';

const NewTodoInput = (props) => {
  return (
    <div className="inputBox">
      <input type="text" placeholder="請輸入待辦事項" />
      <a href={hrefLink}>
        <FontAwesomeIcon icon={faPlus} />
      </a>
    </div>
  );
};

export default NewTodoInput;
