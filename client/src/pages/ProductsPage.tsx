import React from 'react';
import Products from "../components/Products/Products";
import {Box, Typography} from "@mui/material";
import PromotionSlider from "../components/PromotionSlider";

const ProductsPage = () => {
    return (
        <Box>
            <PromotionSlider/>
            <Typography sx={{mb: 4, mt: 4}} variant={"h4"}>All products</Typography>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Products/>
            </Box>
        </Box>
    );
};

export default ProductsPage;