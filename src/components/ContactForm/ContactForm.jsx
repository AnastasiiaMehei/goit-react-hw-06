import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleAddContact = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    dispatch(addContact({ name, number }));
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleAddContact}>
        <div className={css.div}>
          <label>Name</label>
          <input
            className={css.field}
            type="text"
            name="name"
            placeholder="Name..."
          />
        </div>
        <div className={css.div}>
          <label>Phone</label>
          <input
            className={css.field}
            type="number"
            name="number"
            placeholder="Phone"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
