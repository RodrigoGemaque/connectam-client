import {createSlice} from '@reduxjs/toolkit'


const initialState = []

const travelSlice = createSlice({
  name: 'cartTravels',
  initialState,
  reducers: {
    addCartTravel: (state, action) => {
      return [...state, action.payload]
    },
    removeCartTravel: (state, action) => {
      return [...state.filter((_, index) => index !== action.payload)]
    },
    clearCartTravels(){
      return [];
    }
    
  }
})


export const {addCartTravel,removeCartTravel, clearCartTravels } = travelSlice.actions

              
export default travelSlice.reducer