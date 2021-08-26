import { createSlice } from '@reduxjs/toolkit';


const shipSlice = createSlice({
  name: 'ship',
  initialState: null,
  reducers: {
    setShipToEdit(state, action) {
      return state = action.payload;
    },
    clearShipToEdit(state) {
      return state = null;
    }
  }
})

export const { setShipToEdit, clearShipToEdit } = shipSlice.actions;
export default shipSlice.reducer;