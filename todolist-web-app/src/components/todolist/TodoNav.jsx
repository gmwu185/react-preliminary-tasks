const hrefLink = '#';

const TodoNav = () => {
  return (
    <nav>
      <h1>
        <a href={hrefLink}>ONLINE TODO LIST</a>
      </h1>
      <ul>
        <li className="todo_sm">
          <a href={hrefLink}>
            <span>王小明的代辦</span>
          </a>
        </li>
        <li>
          <a href="#loginPage">登出</a>
        </li>
      </ul>
    </nav>
  );
};

export default TodoNav;
