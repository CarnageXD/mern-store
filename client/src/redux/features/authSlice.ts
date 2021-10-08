import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from "../../types/Auth/auth";

const initialState: AuthState = {
    id: null,
    name: null,
    token: null,
    role: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export const {} = authSlice.actions

export default authSlice.reducer
