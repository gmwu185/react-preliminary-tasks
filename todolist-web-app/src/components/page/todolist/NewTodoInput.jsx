import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Notiflix from 'notiflix';

import { useDatasContext, useAuth } from '../../../controllers/contexts';
import { api_addTodo, api_todoList } from '../../../controllers/todos';

const NewTodoInput = () => {
  const hrefLink = '#';
  const { setTodosData } = useDatasContext();
  const [newTodo, setNewTodo] = useState('');
  const { token } = useAuth();

  const addTodo = (e) => {
    if (!newTodo) {
      Notiflix.Notify.failure('請正確輸入文字內容！');
    } else if (/(^\s)/.test(newTodo)) {
      Notiflix.Notify.failure(
        '輸入待辦內容開頭或全部不能都是空格，請重新更改待辦內容！'
      );
    } else {
      const asyncAddTodo = async () => {
        const addTodoRes = await api_addTodo(token, newTodo);
        const addTodoResJson = await addTodoRes.json();
        if (addTodoRes.status === 201) {
          const todoListRes = await api_todoList(token);
          const todoListResJson = await todoListRes.json();
          setTodosData(todoListResJson.todos);
          Notiflix.Notify.success('成功新增待辦項目！');
        } else {
          addTodoResJson.message
            ? Notiflix.Notify.failure(addTodoResJson.message)
            : Notiflix.Notify.failure(
                '待辦內容不能空格或非正常字元，請重新輸入！'
              );
        }
      };
      asyncAddTodo();
      setNewTodo('');
    }
  };

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            addTodo(e);
          }
        }}
      />
      <a
        href={hrefLink}
        onClick={(e) => {
          addTodo(e);
          e.preventDefault();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </a>
    </div>
  );
};

export default NewTodoInput;
