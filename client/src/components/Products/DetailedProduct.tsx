import React, {useState} from "react";
import {IDetailedProduct, IProduct} from "../../types/Products/products";
import {Box, Button, CircularProgress, MenuItem, TextField, Typography} from "@mui/material";
import {useAddCartProductMutation, useGetProductQuery,} from "../../redux/features/api/mainApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setSnackbar} from "../../redux/features/snackbarSlice";

const DetailedProduct: React.FC<IDetailedProduct> = ({id}) => {
  const dispatch = useAppDispatch();
  const {data: product = {} as IProduct, isLoading} = useGetProductQuery(id);
  const [size, setSize] = useState('')
  const userId = useAppSelector((state) => state.auth.id);
  const [addProduct] = useAddCartProductMutation();
  const handleAddingProduct = () => {
    if (size !== '') {
      addProduct({id, userId, size});
      dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarType: "success",
            snackbarMessage: "Products was successfully added to cart",
          })
      );
    } else dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: "info",
          snackbarMessage: "Please, choose the size",
        })
    );
  };

  if (isLoading) return <CircularProgress color="primary" />;
  return (
    <Box
      display={"flex"}
      sx={{ mb: 2, flexDirection: { xs: "column", md: "row" } }}
    >
      <Box>
        <Box
          component={"img"}
          sx={{ height: { xs: "360px", md: "500px" }, mr: 2 }}
          src={
            product.image ? process.env.REACT_APP_API_URL + product.image : ""
          }
        />
      </Box>
      <Box
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant={"overline"} color={"primary.light"}>
            {product.sex}
          </Typography>
          <Typography variant={"h4"}> {product.title}</Typography>
          <Typography sx={{mb: 2}} variant={"h6"} color={"primary.light"}>
            {product.category}
          </Typography>
          <Typography>{product.description}</Typography>
          <TextField
              sx={{width: 100, mt: 2, alignSelf: "flex-end"}}
              label="Size"
              onChange={(e) => setSize(e.target.value)}
              select>
            {product.sizes.split(', ').map((size: string) => <MenuItem value={size}>{size}</MenuItem>)}
          </TextField>
        </Box>
        <Box sx={{mt: 4}} display={"flex"} justifyContent={"space-between"}>
          <Typography variant={"h4"}>{product.price}$</Typography>

          <Button onClick={handleAddingProduct} disabled={isLoading} variant={"contained"}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedProduct;
