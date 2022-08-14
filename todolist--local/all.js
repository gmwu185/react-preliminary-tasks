console.clear();
const { useState } = React;

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, content: '把冰箱發霉的檸檬拿去丟', finish: false },
    { id: 2, content: '打電話叫媽媽匯款給我', finish: true },
    { id: 3, content: '整理電腦資料夾', finish: false },
    { id: 4, content: '繳電費水費瓦斯費', finish: false },
    { id: 5, content: '約vicky禮拜三泡溫泉', finish: false },
    { id: 6, content: '約ada禮拜四吃晚餐', finish: false },
  ]);
  return (
    <div className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input
              type="text"
              placeholder="請輸入待辦事項"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <a
              href="#"
              onClick={(e) => {
                if (!newTodo) {
                  alert('請正確輸入文字內容！');
                } else {
                  const addNewTodoObj = {
                    content: newTodo,
                    id: Date.now(),
                    finish: false,
                  };
                  setTodos([addNewTodoObj, ...todos]);
                  setNewTodo('');
                }
              }}
            >
              <i className="fa fa-plus"></i>
            </a>
          </div>

          <div className="todoList_list">
            <ul className="todoList_tab">
              <li>
                <a href="#" className="active">
                  全部
                </a>
              </li>
              <li>
                <a href="#">待完成</a>
              </li>
              <li>
                <a href="#">已完成</a>
              </li>
            </ul>

            <div className="todoList_items">
              <ul className="todoList_item">
                <TodoItem todos={todos} setTodos={setTodos} />
              </ul>
              <div className="todoList_statistics">
                <p>{todos.length} 個已完成項目</p>
                <a
                  href="#"
                  onClick={() => {
                    setTodos(todos.filter((item) => item.finish == false));
                  }}
                >
                  清除已完成項目
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoItem = (props) => {
  const { todos, setTodos } = props;
  return todos.map((todo, i) => {
    return (
      <li key={todo.id}>
        <label className="todoList_label">
          <input
            className="todoList_input"
            type="checkbox"
            checked={todo.finish}
            onChange={() =>
              setTodos(
                todos.map((item) => {
                  if (item.id == todo.id) {
                    item.finish = !item.finish;
                  }
                  return item;
                })
              )
            }
          />
          <span>{todo.content}</span>
        </label>
        <a
          href="#"
          onClick={() => setTodos(todos.filter((item) => item.id !== todo.id))}
        >
          <i className="fa fa-times"></i>
        </a>
      </li>
    );
  });
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
