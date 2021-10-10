import React from 'react';
import ProductsList from "../components/Products/ProductsList";
import {Box, Pagination, Typography} from "@mui/material";
import PromotionSlider from "../components/PromotionSlider";

const ProductsPage = () => {
    return (
        <Box>
            <PromotionSlider/>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography sx={{mb: 4, mt: 4}} variant={"h4"}>All products</Typography>
                Filter
                Sort by
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <ProductsList/>
                <Pagination sx={{mb: 4, mt: 4}} size={"large"} count={10} showFirstButton showLastButton/>
            </Box>
        </Box>
    );
};

export default ProductsPage;