import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { SnackbarState } from '../../types/Snackbar/snackbar'

const initialState:SnackbarState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
}

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar: (state, action:PayloadAction<SnackbarState>) => {
      state.snackbarOpen = action.payload.snackbarOpen
      state.snackbarType = action.payload.snackbarType
      state.snackbarMessage = action.payload.snackbarMessage
    }
  }
})

export const {setSnackbar} = snackbarSlice.actions

export default snackbarSlice.reducer