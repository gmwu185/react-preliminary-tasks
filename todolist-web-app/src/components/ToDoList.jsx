import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    // { id: 1, content: '把冰箱發霉的檸檬拿去丟', finish: false },
    // { id: 2, content: '打電話叫媽媽匯款給我', finish: true },
    // { id: 3, content: '整理電腦資料夾', finish: false },
    // { id: 4, content: '繳電費水費瓦斯費', finish: false },
    // { id: 5, content: '約vicky禮拜三泡溫泉', finish: false },
    // { id: 6, content: '約ada禮拜四吃晚餐', finish: false },
  ]);

  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
        <ul>
          <li className="todo_sm">
            <a href="#">
              <span>王小明的代辦</span>
            </a>
          </li>
          <li>
            <a href="#loginPage">登出</a>
          </li>
        </ul>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input type="text" placeholder="請輸入待辦事項" />
            <a href="#">
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
          {todos.length > 0 ? (
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
                  {todos.map((todo, i) => {
                    return (
                      <li key={todo.id}>
                        <label className="todoList_label">
                          <input
                            className="todoList_input"
                            type="checkbox"
                            value="true"
                          />
                          <span>{todo.content}</span>
                        </label>
                        <a href="#">
                          <FontAwesomeIcon icon={faTimes} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="todoList_statistics">
                  <p> 5 個已完成項目</p>
                  <a href="#">清除已完成項目</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="todoList_noTodo">
              <p className="todoList_noTodo_title">目前尚無待辦事項</p>
              <img className="todoList_noTodo_img" src="assets/img/on-todo-img.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
