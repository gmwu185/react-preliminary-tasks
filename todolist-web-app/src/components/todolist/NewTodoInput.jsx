import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useDatasContext, useAuth } from '../../controllers/contexts';
import { api_addTodo, api_todoList } from '../../controllers/todos';

const NewTodoInput = () => {
  const hrefLink = '#';
  const { setTodosData } = useDatasContext();
  const [newTodo, setNewTodo] = useState('');
  const { token } = useAuth();

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <a
        href={hrefLink}
        onClick={(e) => {
          if (!newTodo) {
            alert('請正確輸入文字內容！');
          } else {
            const addTodo = async () => {
              const addTodoRes = await api_addTodo(token, newTodo);
              const addTodoResJson = await addTodoRes.json();
              if (addTodoRes.status === 201) {
                const todoListRes = await api_todoList(token);
                const todoListResJson = await todoListRes.json();
                setTodosData(todoListResJson.todos);
                alert('成功新增 TODO 資料');
              } else {
                alert(addTodoResJson.message);
              }
            };
            addTodo();
            setNewTodo('');
          }
          e.preventDefault();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </a>
    </div>
  );
};

export default NewTodoInput;
