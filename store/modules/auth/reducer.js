import { createSlice  } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedUser: null  } ,
    reducers: {
        setLoggedUser(state, action) {
            state.loggedUser = action.payload; 
        },
        clearLoggedUser(state) {
            state.loggedUser = null;
        },
    }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;