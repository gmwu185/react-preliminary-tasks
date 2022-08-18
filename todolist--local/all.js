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
  const [selectType, setSelectType] = useState('all');

  return (
    <div className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <NewTodoInput
            todos={todos}
            setTodos={setTodos}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
          <div className="todoList_list">
            <ul className="todoList_tab">
              <TodoTab selectType={selectType} setSelectType={setSelectType} />
            </ul>

            <div className="todoList_items">
              <ul className="todoList_item">
                <TodoItem
                  todos={todos}
                  setTodos={setTodos}
                  selectType={selectType}
                />
              </ul>
              <Statistics todos={todos} setTodos={setTodos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewTodoInput = (props) => {
  const { todos, setTodos, newTodo, setNewTodo } = props;

  return (
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
  );
};

const TodoItem = (props) => {
  const { todos, setTodos, selectType } = props;
  let todoData = [];
  if (selectType == 'all') {
    todoData = todos;
  } else if (selectType == 'finish') {
    todoData = todos.filter((todo, i) => todo.finish == true);
  } else if (selectType == 'unfinish') {
    todoData = todos.filter((todo, i) => todo.finish == false);
  }

  return todos.length > 0 ? (
    todoData.map((todo, i) => {
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
            onClick={() =>
              setTodos(todos.filter((item) => item.id !== todo.id))
            }
          >
            <i className="fa fa-times"></i>
          </a>
        </li>
      );
    })
  ) : (
    <li className="noTodo">目前尚無代辦事項</li>
  );
};

const TodoTab = (props) => {
  const { setSelectType } = props;

  const [tabStatus, setTabStatus] = useState([
    { type: 'all', text: '全部', active: true },
    { type: 'unfinish', text: '待完成', active: false },
    { type: 'finish', text: '已完成', active: false },
  ]);

  return tabStatus.map((item, i) => {
    return (
      <li key={i}>
        <a
          href="#"
          className={item.active ? 'active' : ''}
          onClick={(e) => {
            const changeActive = tabStatus.filter((item, i) => {
              e.target.text == item.text
                ? ((item.active = true), setSelectType(item.type))
                : (item.active = false);
              return item;
            });
            setTabStatus(changeActive);
          }}
        >
          {item.text}
        </a>
      </li>
    );
  });
};

const Statistics = (props) => {
  const { todos, setTodos } = props;
  return (
    <div className="todoList_statistics">
      <p>{todos.filter((todo) => todo.finish == false).length} 個未完成項目</p>
      <a
        href="#"
        onClick={() => {
          if (todos.filter((item) => item.finish == true).length == 0) {
            alert('沒有已完成項目處理清除動作');
            return;
          }
          if (confirm('確定清除全部已完成項目嗎？')) {
            setTodos(todos.filter((item) => item.finish == false));
          }
        }}
      >
        清除已完成項目
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
