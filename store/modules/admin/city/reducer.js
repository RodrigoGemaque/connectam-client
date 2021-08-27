import { createSlice } from '@reduxjs/toolkit';


const shipSlice = createSlice({
  name: 'city',
  initialState: null,
  reducers: {
    setCityToEdit(state, action) {
      return state = action.payload;
    },
    clearCityToEdit(state) {
      return state = null;
    }
  }
})

export const { setCityToEdit, clearCityToEdit } = shipSlice.actions;
export default shipSlice.reducer;