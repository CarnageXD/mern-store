import React from 'react'
import Cart from '../components/Cart/Cart';
import EmptyCart from "../components/Cart/EmptyCart";
import {Typography} from "@mui/material";

const CartPage = () => {
    return (
        <>
            <Typography sx={{display: {xs: "none", md: "block"}}} variant='h4'>Cart</Typography>
            {
                false
                    ?
                    <EmptyCart/>
                    :
                    <Cart/>
            }
        </>
    )
}

export default  CartPage
