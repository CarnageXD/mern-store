import React from 'react';
import {useHistory} from "react-router-dom";
import {Box, Button, Typography} from "@material-ui/core";
import boxImg from "../../assets/img/orders/emptyBox.png";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

const EmptyOrders = () => {
    const history = useHistory()
    return (
        <Box display="flex" flexDirection="column" alignItems="center" height="50vh" justifyContent="center" m={4}>
            <img height={150} width={150} src={boxImg} alt="emptyCartImage"/>
            <Box margin={2} textAlign="center">
                <Typography variant="h4">You haven't any orders yet</Typography>
                <Typography variant="caption">Add whatever you want and checkout it!</Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <Button
                style={{marginBottom: '1rem'}}
                variant="contained"
                size="large"
                onClick={() => history.push("/products.ts")}
            >
                <ArrowBackIos/>
                <Typography>Back to products</Typography>
            </Button>
            <Button
                variant="contained"
                size="large"
                onClick={() => history.push("/cart")}
            >
                <Typography>Checkout shopping cart</Typography>
                <ArrowForwardIos/>
            </Button>
            </Box>
        </Box>
    );
};

export default EmptyOrders;