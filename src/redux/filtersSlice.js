import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    filterContact(state, action) {
      state.status = action.payload;
    },
  },
});

export const { filterContact } = slice.actions;
export default slice.reducer;
export const filterReducer = slice.reducer;
export const getStatusFilter = (state) => state.filters.items;
