
import {createSlice} from '@reduxjs/toolkit'


const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers:{
    setSearch(state, action) {
      return state = action.payload
    },
    clearSearch(state){
      return state = ''
    }
  }

})


export const {setSearch, clearSearch}= searchSlice.actions
export default searchSlice.reducer