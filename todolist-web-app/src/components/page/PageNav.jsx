import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../controllers/contexts';

const PageNav = () => {
  const { setToken } = useAuth();
  const { nickname } = useDatasContext();

  const logout = (e) => {
    Notiflix.Confirm.show(
      '執行登出',
      '請確定是否需要登出',
      '確定',
      '取消',
      () => {
        Notiflix.Notify.success('已完成登出動作，將導至登入頁');
        setTimeout(() => {
          localStorage.setItem('token', null);
          localStorage.setItem('nickname', '');
          setToken('');
        }, 2000);
      },
      () => {
        Notiflix.Notify.failure('取消登出');
      }
    );

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

export default PageNav;
