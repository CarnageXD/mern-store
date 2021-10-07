import React from 'react';
import cartImg from '../../assets/img/cart/emptyCart.png'
import {useHistory} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {ArrowBackIos} from "@mui/icons-material";

const EmptyCart = () => {
    const history = useHistory()
    return (
        <Box display="flex" flexDirection="column" alignItems="center" height="50vh" justifyContent="center" m={4}>
            <img height={180} width={200} src={cartImg} alt="emptyCartImage"/>
            <Box margin={2} textAlign="center">
                <Typography variant="h4">Empty cart</Typography>
                <Typography variant="caption">Add at least one product to order it!</Typography>
            </Box>
            <Button
                variant="contained"
                sx={{backgroundColor: '#a4a4a4', mb: 4}}
                onClick={() => history.push("/")}
            >
                <ArrowBackIos/>
                <Typography>Back to products</Typography>
            </Button>
        </Box>
    );
};

export default EmptyCart;