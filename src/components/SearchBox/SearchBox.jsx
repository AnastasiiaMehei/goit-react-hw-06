import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { filterContact, getStatusFilter } from "../../redux/filtersSlice";
export default function SearchBox({ value, onFilter }) {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilter = (filter) => dispatch(filterContact(filter));

  return (
    <div className={css.div}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        onClick={() => handleFilter(filter)}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
