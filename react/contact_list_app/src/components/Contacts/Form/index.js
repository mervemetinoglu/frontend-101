import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };
const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
          required
          autoFocus
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
          required
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
