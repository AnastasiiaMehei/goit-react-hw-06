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
            ...value,
            id: crypto.randomUUID(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
export const selectContact = (state) => state.contact.items;
