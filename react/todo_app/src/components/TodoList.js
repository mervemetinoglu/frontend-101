const TodoList = ({ listItem, setListItem }) => {
  const deleteItemHandler = (id) => {
    setListItem(listItem.filter((e) => e.id !== id));
  };

  const completeHandler = (id) => {
    setListItem(
      listItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  const completeAllHandler = () => {
    setListItem(
      listItem.map((item) => {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      })
    );
  };

  return (
    <div>
      <section className="main">
        <input
          type="checkbox"
          className="toggle-all"
          onChange={completeAllHandler}
        />
        <label htmlFor="toggle-all" onClick={completeAllHandler}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {listItem.map((item) => (
            <li
              key={item.id}
              className={`${item.isCompleted ? "completed" : ""}`}
            >
              <div>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={() => completeHandler(item.id)}
                />
                <label>{item.text}</label>
                <button
                  className="destroy"
                  onClick={() => deleteItemHandler(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
