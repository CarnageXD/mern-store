import React, {useEffect, useState} from 'react';
import ProductItem from "./ProductItem";
import {IProduct} from "../../types/Products/products";
import {Grid} from "@mui/material";

const ProductsList = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        async function getProducts () {
            setLoading(true)
            const response = await fetch('http://localhost:5000/api/products')
            const data = await response.json()
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <Grid container spacing={4}>
            {products.map(product => <ProductItem key={product._id} {...product}/>)}
        </Grid>
    );
};

export default ProductsList;