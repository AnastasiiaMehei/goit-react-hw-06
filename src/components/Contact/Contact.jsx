import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, contact }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.container}>
      <div className={css.paragraphDiv}>
        <p className={css.paragraph}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p className={css.paragraph}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
