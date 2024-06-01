// action
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "contact",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        const newItem = {
          ...action.payload,
          id: crypto.randomUUID(),
        };
        state.items.push(newItem);
      },
      prepare(value) {
        return {
          payload: {
            value,
            id: crypto.randomUUID(),
          },
        };
      },
      deleteContact: (state, action) => {
        const index = state.findIndex(
          (contact) => contact.id === action.payload
        );
        state.splice(index, 1);
      },
    },
  },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
export const contactReducer = slice.reducer;

export const selectContact = (state) => state.contact.items;
// export const contactReducer = createReducer({ items: [] }, (builder) => {
//   builder
//     .addCase(addContact, (state, action) => {

//     })
//     .addCase(deleteContact, (state, action) => {
//       const removeContact = action.payload.id;
//       state.items = state.items.filter(
//         (contact) => contact.id !== removeContact
//       );
//     });
// });
