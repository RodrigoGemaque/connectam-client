import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const userReducer = createSlice({
  name: 'owner_ship',
  initialState: null,
  reducers: {
    setOwnerShipToEdit(state, action) {
      return state = action.payload;
    },
    clearOwnerShipToEdit(state) {
      return state = null;
    }
  }
});

export const { setOwnerShipToEdit, clearOwnerShipToEdit } = userReducer.actions;
export default userReducer.reducer;