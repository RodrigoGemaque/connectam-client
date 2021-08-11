import {createSlice} from '@reduxjs/toolkit'



const travelSlice = createSlice({
  name: 'form_passager',
  initialState: [],
  reducers: {
    addPassager(state, action) {
      return [...state, action.payload]
    },
    removePassager: (state, action) => {
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    },
    clearList() {
      return [];
    }
  }
})


export const {addPassager,removePassager,clearList} = travelSlice.actions
export default travelSlice.reducer