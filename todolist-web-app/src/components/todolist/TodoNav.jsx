import { Link } from 'react-router-dom';
import { useDatasContext, useAuth } from '../../controllers/contexts';

const TodoNav = () => {
  const { setToken } = useAuth();
  const { nickname } = useDatasContext();

  const logout = (e) => {
    localStorage.setItem('token', null);
    localStorage.setItem('nickname', '');
    setToken('');
    alert('已完成登出動作，將導至登入頁。');
    e.preventDefault();
  };

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
          <a href="#loginPage" onClick={(e) => logout(e)}>
            登出
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TodoNav;
