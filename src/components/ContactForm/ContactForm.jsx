import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
export default function ContactForm({ onAdd }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
  });

  const dataId = useId();
  const dispatch = useDispatch();
  const handleAddContact = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    dispatch(addContact({ name, number }));
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values) => {
        onAdd({
          id: nanoid(),
          ...values,
        });
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form} onSubmit={handleAddContact}>
        <div className={css.div}>
          <label htmlFor={dataId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={dataId}
            placeholder="Name..."
          />
          <ErrorMessage className={css.span} name="name" component="span" />
        </div>
        <div className={css.div}>
          <label htmlFor={dataId}>Phone</label>
          <Field
            className={css.field}
            type="number"
            name="number"
            id={dataId}
            placeholder="Phone..."
          />
          <ErrorMessage className={css.span} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// export default function ContactForm() {

//   return (
//     <div>
//       <form className={css.form} onSubmit={handleAddContact}>
//         <div className={css.div}>
//           <label>Name</label>
//           <input
//             className={css.field}
//             type="text"
//             name="name"
// placeholder="Name..."
//           />
//         </div>
//         <div className={css.div}>
//           <label>Phone</label>
//           <input
//             className={css.field}
//             type="number"
//             name="number"
//             placeholder="Phone"
//           />
//         </div>
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     </div>
//   );
// }
