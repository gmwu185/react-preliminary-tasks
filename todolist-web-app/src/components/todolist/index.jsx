import { useState } from 'react';

import TodoNav from '../todolist/TodoNav';
import NewTodoInput from '../todolist/NewTodoInput';
import TodoItems from '../todolist/TodoItems';
import Notodo from '../todolist/Notodo';

const ToDoListPage = () => {
  const [selectType, setSelectType] = useState('all');
  const [todosData, setTodosData] = useState([
    { id: 1, content: '把冰箱發霉的檸檬拿去丟', finish: false },
    { id: 2, content: '打電話叫媽媽匯款給我', finish: true },
    { id: 3, content: '整理電腦資料夾', finish: false },
    { id: 4, content: '繳電費水費瓦斯費', finish: false },
    { id: 5, content: '約vicky禮拜三泡溫泉', finish: false },
    { id: 6, content: '約ada禮拜四吃晚餐', finish: false },
  ]);

  return (
    <div id="todoListPage" className="bg-half">
      <TodoNav />
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <NewTodoInput />
          {todosData.length > 0 ? (
            <TodoItems
              todosData={todosData}
              // selectType={selectType}
              setSelectType={setSelectType}
            />
          ) : (
            <Notodo />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoListPage;
