import React from "react";
import CartItem from "./CartItem";
import { Box, Button } from "@mui/material";
import { ICartProduct } from "../../types/Cart/cart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useAddOrderMutation } from "../../redux/features/api/mainApi";
import { setSnackbar } from "../../redux/features/snackbarSlice";

const Cart: React.FC<{ products: ICartProduct[]; cartId: string }> = ({
  products,
  cartId,
}) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.id);

  const [addOrder, { isError }] = useAddOrderMutation();
  const handleAddingOrder = () => {
    addOrder({ cartId, userId });
    dispatch(
      setSnackbar({
        snackbarOpen: true,
        snackbarType: isError ? "error" : "success",
        snackbarMessage: isError
          ? "Something went wrong"
          : "Ordered successfully",
      })
    );
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={"flex-end"}
      flexDirection={{ xs: "column" }}
    >
      <Box display="flex" flexDirection="column" width={"100%"} mr={1}>
        {products.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </Box>
      <Button
        onClick={handleAddingOrder}
        sx={{ width: 150, mt: 2, mb: 2 }}
        variant={"outlined"}
      >
        Make order
      </Button>
    </Box>
  );
};
export default Cart;
