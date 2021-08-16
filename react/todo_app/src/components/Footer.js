const Footer = ({ listItemLength, setStatus, setListItem }) => {
  const deleteAllItems = () => {
    setListItem([]);
  };

  return (
    <footer className="footer">
      <span className="todo-count">{listItemLength} items left</span>

      <ul className="filters">
        <li>
          <a onClick={() => setStatus("all")}>All</a>
        </li>
        <li>
          <a onClick={() => setStatus("active")}>Active</a>
        </li>
        <li>
          <a onClick={() => setStatus("completed")}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteAllItems}>
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
