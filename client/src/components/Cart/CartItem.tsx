import React, {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {Add, Delete, Remove} from "@mui/icons-material";
import {ICartProduct} from "../../types/Cart/cart";
import {useAdjustProductCartQuantityMutation, useDeleteCartProductMutation,} from "../../redux/features/api/mainApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setSuccessSnackbar} from "../../redux/features/snackbarSlice";

const CartItem: React.FC<ICartProduct> = ({product, quantity, total, size, _id}) => {
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.auth.id);
  const [adjustProductCart] = useAdjustProductCartQuantityMutation();
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const plus = () => {
    if (cartQuantity < 10) {
      setCartQuantity(cartQuantity + 1);
      adjustProductCart({
        userId,
        product: product._id,
        cartQuantity: cartQuantity + 1,
      });
    }
  };

  const minus = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
      adjustProductCart({
        userId,
        product: product._id,
        cartQuantity: cartQuantity - 1,
      });
    }
  };

  const handleDeleteProduct = () => {
    deleteCartProduct({id: _id, userId});
    dispatch(setSuccessSnackbar('The product was successfully deleted'))
  };
  return (
    <Box
      mb={2}
      mt={2}
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box display={"flex"}>
        <img
          width={100}
          height={100}
          src={process.env.REACT_APP_API_URL + product.image}
          alt="product"
        />
        <Box ml={1}>
          <Typography
              variant="h5"
              sx={{fontSize: {xs: "0.9rem", md: "1rem"}}}
          >
            {product.title}
          </Typography>
          <Typography variant="body1">
            {product.price}$ x {cartQuantity}
          </Typography>
          <Typography color={"primary.light"} variant="body2">
            Size: {size}
          </Typography>
          <Box display={"flex"} flexWrap={"nowrap"} pt={2}>
            <Button onClick={plus}>
              <Add fontSize={"small"}/>
            </Button>
            <Button onClick={minus}>
              <Remove/>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Button onClick={handleDeleteProduct}>
          <Delete />
        </Button>
        <Typography variant={"h5"}>{product.price * cartQuantity}$</Typography>
      </Box>
    </Box>
  );
};

export default CartItem;
