import React from 'react';
import ProductItem from "./ProductItem";
import {Grid} from "@mui/material";
import {useGetProductsQuery} from "../../redux/features/api/mainApi";

const ProductsList = () => {
    const {data = [], isLoading} = useGetProductsQuery()
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Grid container spacing={4}>
            {data.map(product => <ProductItem key={product._id} {...product}/>)}
        </Grid>
    );
};

export default ProductsList;