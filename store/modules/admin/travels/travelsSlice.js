import {createSlice} from '@reduxjs/toolkit'



const initialState = {
  departure: '',
  arrival: '',
  date: ''
}


const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    getDeparture: (state, action) => {
      state.departure = action.payload
    },
    getArrival: (state, action) => {
      state.arrival = action.payload
    },
    getDate: (state, action) => {
      state.date = action.payload
    },
    clearSeach: (state) =>{
     state.departure = '',
     state.arrival = '',
     state.date = ''
      
    }
  }
})


export const {getDeparture, getArrival, getDate, clearSeach} = travelSlice.actions
export default travelSlice.reducer