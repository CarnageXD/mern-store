import React, { useState } from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Add, Delete, Remove} from "@mui/icons-material";
import {ICartProduct} from "../../types/Cart/cart";

const CartItem: React.FC<ICartProduct> = ({product,quantity,total, id}) => {
    const [cartQuantity, setCartQuantity] = useState(quantity)
    // const [price, setPrice] = useState(5.45)

    const plus = () => {
        if (cartQuantity < 10) setCartQuantity((prev) => ++prev)
    }

    const minus = () => {
        if (cartQuantity > 1) setCartQuantity((prev) => --prev)
    }

    return (
        <Box mb={2} mt={2} display={"flex"}  justifyContent={"space-between"} width={"100%"} >
            <Box display={"flex"}>
                <img width={100} height={100} src={process.env.REACT_APP_API_URL + product.image} alt="product"/>
                <Box ml={1}  >
                    <Typography variant="h5" sx={{fontSize: {xs: "0.9rem", md: "1rem"}}}>{product.title}</Typography>
                    <Typography variant="body1">{product.price}$ x {cartQuantity}</Typography>
                    <Box display={"flex"} flexWrap={"nowrap"} pt={2}>
                        <Button onClick={plus}>
                            <Add fontSize={'small'} />
                        </Button>
                        <Button onClick={minus}>
                            <Remove  />
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} flexDirection={"column"}>
                <Button>
                    <Delete/>
                </Button>
                <Typography variant={"h5"}>{product.price * cartQuantity}$</Typography>
            </Box>
        </Box>
    );
};

export default CartItem;