import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CartState} from '../../types/Cart/cart';

const initialState: CartState = {
    products: [],
    cartId: null,
}

export const authSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartState>) => {
            state.products = action.payload.products
            state.cartId = action.payload.cartId
        }
    }
})

export const {setCart} = authSlice.actions

export default authSlice.reducer
