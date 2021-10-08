import React, {useEffect, useState} from 'react';
import {IDetailedProduct, IProduct} from "../../types/Products/products";
import {Box, Button, Typography} from "@mui/material";


const DetailedProduct: React.FC<IDetailedProduct> = ({id}) => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    useEffect(() => {
        async function getDetailedProduct() {
            setLoading(true)
            const response = await fetch(`http://localhost:5000/api/products/${id}`)
            const data = await response.json()
            setProduct(data)
            setLoading(false)
        }
        getDetailedProduct()
    }, [])
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
                    <Typography variant={"h4"}>{product.title}</Typography>
                    <Typography sx={{mb: 2}} variant={"h6"} color={'primary.light'}>{product.category}</Typography>
                    <Typography>{product.description}</Typography>
                </Box>
                <Box sx={{mt: 4}} display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"h4"}>{product.price}$</Typography>
                    <Button variant={"contained"}>Add to cart</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailedProduct;