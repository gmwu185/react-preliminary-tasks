const Notodo = () => {
  return (
    <div className="todoList_noTodo">
      <p className="todoList_noTodo_title">目前尚無待辦事項</p>
      <img
        className="todoList_noTodo_img"
        src={`${process.env.PUBLIC_URL}/assets/img/on-todo-img.png`}
        alt=""
      />
    </div>
  );
};

export default Notodo;
