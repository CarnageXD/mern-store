import React from "react";
import Cart from "../components/Cart/Cart";
import EmptyCart from "../components/Cart/EmptyCart";
import { CircularProgress, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/redux-hooks";
import { useGetCartQuery } from "../redux/features/api/mainApi";
import { ICartResponse } from "../types/Cart/cart";

const CartPage = () => {
  const userId = useAppSelector((state) => state.auth.id);
  const { data = {} as ICartResponse, isLoading } = useGetCartQuery(userId);

  if (isLoading) return <CircularProgress color="primary" />;
  return (
    <>
      <Typography sx={{ display: { xs: "none", md: "block" } }} variant="h4">
        Cart
      </Typography>
      {data && data.products.length !== 0 ? (
        <Cart products={data.products} cartId={data.id} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartPage;
