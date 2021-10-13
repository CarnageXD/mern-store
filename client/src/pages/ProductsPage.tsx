import React from 'react';
import ProductsList from "../components/Products/ProductsList";
import {Box, Typography} from "@mui/material";
import PromotionSlider from "../components/PromotionSlider";

const ProductsPage = () => {
    return (
        <Box>
            <PromotionSlider/>
            <Typography sx={{mb: 4, mt: 4}} variant={"h4"}>All products</Typography>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <ProductsList/>
            </Box>
        </Box>
    );
};

export default ProductsPage;