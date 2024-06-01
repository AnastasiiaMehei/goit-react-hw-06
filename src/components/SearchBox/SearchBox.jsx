import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { filterContact, getStatusFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilter = (event) => dispatch(filterContact(event.target.value));

  return (
    <div className={css.div}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        onChange={handleFilter}
        type="text"
        value={filter}
        placeholder="Search ..."
      />
    </div>
  );
}
