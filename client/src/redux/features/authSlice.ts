import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from "../../types/Auth/auth";

const initialState: AuthState = {
    id: null,
    name: null,
    token: null,
    role: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<AuthState>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.token = action.payload.token
            state.role = action.payload.role
        }
    }
})

export const {setCredentials} = authSlice.actions

export default authSlice.reducer
