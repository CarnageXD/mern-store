import React from 'react';
import {IDetailedProduct, IProduct} from "../../types/Products/products";
import {Box, Button, Typography} from "@mui/material";
import {useAddCartProductMutation, useGetProductQuery} from "../../redux/features/api/mainApi";
import {useAppSelector} from "../../hooks/redux-hooks";


const DetailedProduct: React.FC<IDetailedProduct> = ({id}) => {
    const userId = useAppSelector(state => state.auth.id)
    const {data: product = {} as IProduct, isFetching} = useGetProductQuery(id)
    const [addProduct] = useAddCartProductMutation()

    const handleAddingProduct = () => {
        console.log(id, '...', userId)
        addProduct({id, userId})
    }

    if (isFetching) return <h1>Loading...</h1>
    return (
        <Box display={"flex"} sx={{mb: 2, flexDirection: {xs: "column", md: "row"}}}>
            <Box>
                <Box
                    component={'img'}
                    sx={{height: {xs: "360px", md: "500px"} , mr: 2}}
                    src={product.image ? process.env.REACT_APP_API_URL + product.image : ""}
                />
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Box>
                    <Typography variant={"overline"} color={'primary.light'}>{product.sex}</Typography>
                    <Typography variant={"h4"}> {product.title}</Typography>
                    <Typography sx={{mb: 2}} variant={"h6"} color={'primary.light'}>{product.category}</Typography>
                    <Typography>{product.description}</Typography>
                </Box>
                <Box sx={{mt: 4}} display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"h4"}>{product.price}$</Typography>
                    <Button onClick={handleAddingProduct} variant={"contained"}>Add to cart</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailedProduct;