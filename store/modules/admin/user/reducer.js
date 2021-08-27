import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const userReducer = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUserToEdit(state, action) {
      return state = action.payload;
    },
    clearUserToEdit(state) {
      return state = null;
    }
  }
});

export const { setUserToEdit, clearUserToEdit } = userReducer.actions;
export default userReducer.reducer;