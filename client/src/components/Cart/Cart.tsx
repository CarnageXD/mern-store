import React from "react";
import CartItem from "./CartItem";
import {Box} from "@mui/material";
import {ICartProduct} from "../../types/Cart/cart";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {useAddOrderMutation} from "../../redux/features/api/mainApi";
import {setErrorSnackbar, setInfoSnackbar} from "../../redux/features/snackbarSlice";
import {getTotal} from "../../utils/getTotal";
import CartSummaryCard from "../Card/CartSummaryCard";
import {setCart} from "../../redux/features/cartSlice";

const Cart: React.FC<{ products: ICartProduct[]; cartId: string | null }> = ({
                                                                                 products,
                                                                                 cartId,
                                                                             }) => {
    const dispatch = useAppDispatch();
    const summaryPrice = getTotal(products, 'total')
    const summaryQuantity = getTotal(products, 'quantity')
    const [addOrder] = useAddOrderMutation();
    const handleAddingOrder = async () => {
        addOrder(cartId).unwrap()
            .then(payload => {
                window.location = payload
                dispatch(setInfoSnackbar("Payment is processing"))
                dispatch(setCart({products: [], cartId: null}))
            })
            .catch(e => dispatch(setErrorSnackbar(e.data.message)))
    };

    return (
        <Box
            height="100%"
            display="flex"
            justifyContent="space-between"
            flexDirection={{xs: "column", md: "row"}}
        >
            <Box display="flex" flexDirection="column" width={"100%"} mr={1}>
                {products.map((product) => (
                    <CartItem key={product._id} {...product} />
                ))}
            </Box>

            <CartSummaryCard handleAddProduct={handleAddingOrder} totalPrice={summaryPrice}
                             totalQuantity={summaryQuantity}/>

        </Box>
    );
};
export default Cart;
