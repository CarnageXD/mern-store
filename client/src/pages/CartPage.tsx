import React from "react";
import Cart from "../components/Cart/Cart";
import EmptyCart from "../components/Cart/EmptyCart";
import {Typography} from "@mui/material";
import {useAppSelector} from "../hooks/redux-hooks";

const CartPage = () => {
    const products = useAppSelector((state) => state.cart.products)
    const cartId = useAppSelector((state) => state.cart.cartId)

    return (
        <>
            <Typography sx={{display: {xs: "none", md: "block"}}} variant="h4">
                Cart
            </Typography>
            {products && products.length !== 0 ? (
                <Cart products={products} cartId={cartId}/>
            ) : (
                <EmptyCart/>
            )}
        </>
    );
};

export default CartPage;
