import { Link } from 'react-router-dom';
import { useDatasContext } from '../../controllers/contexts';

const TodoNav = () => {
  const { nickname } = useDatasContext();

  return (
    <nav>
      <h1>
        <Link to="todolist">ONLINE TODO LIST</Link>
      </h1>
      <ul>
        <li className="todo_sm">
          <Link to="todolist">
            <span>{nickname} 的代辦</span>
          </Link>
        </li>
        <li>
          <a href="#loginPage">登出</a>
        </li>
      </ul>
    </nav>
  );
};

export default TodoNav;
