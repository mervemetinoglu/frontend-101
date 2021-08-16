import shortid from "shortid";

const Form = ({ inputText, setInputText, listItem, setListItem }) => {
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setListItem([
      ...listItem,
      { text: inputText, isCompleted: false, id: shortid() },
    ]);
    setInputText("");
  };

  return (
    <form onSubmit={submitToDoHandler}>
      <input
        className="new-todo"
        value={inputText}
        placeholder="What do you need to do today?"
        onChange={onChangeInput}
        autoFocus
      />
    </form>
  );
};

export default Form;
