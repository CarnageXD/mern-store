import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { CartState, ICartProduct } from '../../types/Cart/cart';

const initialState: CartState = {
    products: []
}

export const authSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<ICartProduct[]>) => {
            state.products = state.products.concat(action.payload)
        }
    }
})

export const {setCart} = authSlice.actions

export default authSlice.reducer
