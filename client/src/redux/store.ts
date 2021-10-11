import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import cartReducer from './features/cartSlice'
import snackbarReducer from './features/snackbarSlice'
import {mainApi} from "./features/api/mainApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        snackbar: snackbarReducer,
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch