import React, {useEffect, useState} from 'react';
import CartItem from "./CartItem";
import CartSummaryCard from "../Card/CartSummaryCard";
import {Box} from "@mui/material";
import {ICartProduct} from "../../types/Cart/cart";

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])
    useEffect(() => {
        async function getCartProducts () {
            setLoading(true)
            const response = await fetch('http://localhost:5000/api/cart/615458451e7fea07af1a277a')
            const data = await response.json()
            setCartProducts(data.products)
        }
        getCartProducts()
    }, [])
    return (
        <Box display="flex" justifyContent="space-between" flexDirection={{xs: "column", md: "row"}}>
            <Box display="flex" flexDirection="column" width={"100%"} mr={1}>
                {cartProducts.map(product => <CartItem key={product.id} {...product}/>)}
            </Box>
            <CartSummaryCard/>
        </Box>
    )

};
export default Cart;