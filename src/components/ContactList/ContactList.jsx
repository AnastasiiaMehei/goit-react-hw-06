import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContact);
  console.log(contacts);
  return (
    <ul className={css.ul}>
      {contacts.map((contact) => {
        return (
          <li className={css.li} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}
