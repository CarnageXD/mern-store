import React from 'react';
import DetailedProduct from "../components/Products/DetailedProduct";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

const DetailedProductPage = () => {
    const {id} = useParams<{id: string}>()
    return (
        <Box mb={4}>
            <DetailedProduct id={id} />
        </Box>
    );
};

export default DetailedProductPage;