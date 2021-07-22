import {createSlice} from '@reduxjs/toolkit'



const initialState = {
  name: '',
  cpf: '',
  phone_number: ''
}


const travelSlice = createSlice({
  name: 'form_passager',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload
    },
    getCpf: (state, action) => {
      state.cpf = action.payload
    },
    getPhone: (state, action) => {
      state.phone_number = action.payload
    },
    clearForm: () => {
      return initialState
    }
  }
})


export const {getName, getCpf, getPhone, clearForm} = travelSlice.actions
export default travelSlice.reducer