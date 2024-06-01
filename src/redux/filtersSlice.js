import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
export const getStatusFilter = (state) => state.filters.name;
