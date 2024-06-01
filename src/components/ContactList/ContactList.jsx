import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/contactsSlice";
import { getStatusFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(getStatusFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.ul}>
      {filteredContacts.map((contact) => {
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
