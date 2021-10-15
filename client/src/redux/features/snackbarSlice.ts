import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SnackbarState} from '../../types/Snackbar/snackbar'

const initialState:SnackbarState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
}

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.snackbarOpen = action.payload.snackbarOpen
      state.snackbarType = action.payload.snackbarType
      state.snackbarMessage = action.payload.snackbarMessage
    },
    setSuccessSnackbar: (state, action: PayloadAction<string>) => {
      state.snackbarOpen = true
      state.snackbarType = "success"
      state.snackbarMessage = action.payload
    },
    setErrorSnackbar: (state, action: PayloadAction<string>) => {
      state.snackbarOpen = true
      state.snackbarType = "error"
      state.snackbarMessage = action.payload
    },
    setInfoSnackbar: (state, action: PayloadAction<string>) => {
      state.snackbarOpen = true
      state.snackbarType = "info"
      state.snackbarMessage = action.payload
    }
  }
})

export const {setSnackbar, setSuccessSnackbar, setErrorSnackbar, setInfoSnackbar} = snackbarSlice.actions

export default snackbarSlice.reducer