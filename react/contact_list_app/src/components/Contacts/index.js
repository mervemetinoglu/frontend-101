import { useState, useEffect } from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Contact1",
      phoneNumber: "1234",
    },
    {
      fullname: "Contact2",
      phoneNumber: "258",
    },
    {
      fullname: "Contact3",
      phoneNumber: "9874",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
