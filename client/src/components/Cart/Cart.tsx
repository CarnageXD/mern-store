import React, {useEffect, useState} from 'react';
import CartItem from "./CartItem";
import CartSummaryCard from "../Card/CartSummaryCard";
import {Box} from "@mui/material";
import {ICartProduct} from "../../types/Cart/cart";

const Cart:React.FC<{products: ICartProduct[]}> = ({products}) => {
    return (
        <Box display="flex" justifyContent="space-between" flexDirection={{xs: "column", md: "row"}}>
            <Box display="flex" flexDirection="column" width={"100%"} mr={1}>
                {products.map(product => <CartItem key={product.id} {...product}/>)}
            </Box>
            <CartSummaryCard/>
        </Box>
    )

};
export default Cart;