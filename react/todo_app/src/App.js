import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import shortid from "shortid";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([
    {
      text: "Drink water",
      isCompleted: false,
      id: shortid(),
    },
    {
      text: "Read at least 20 pages of a book",
      isCompleted: false,
      id: shortid(),
    },
  ]);
  const [status, setStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredList(listItem.filter((item) => item.isCompleted));
        break;
      case "active":
        setFilteredList(listItem.filter((item) => !item.isCompleted));
        break;
      default:
        setFilteredList(listItem);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [listItem, status]);

  const notCompleteItemLen = () => {
    return listItem.filter((item) => !item.isCompleted).length;
  };

  return (
    <div className="todoapp">
      <h1>ToDo</h1>
      <div className="main">
        <Form
          listItem={listItem}
          setListItem={setListItem}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList
          listItem={filteredList}
          setListItem={setListItem}
          listItemLength={notCompleteItemLen()}
        />
        {listItem.length > 0 && (
          <Footer
            listItemLength={notCompleteItemLen()}
            setStatus={setStatus}
            setListItem={setListItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
