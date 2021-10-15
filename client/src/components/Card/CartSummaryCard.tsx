import React from 'react';
import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {ICartSummary} from "../../types/Cart/cart";

const CartSummaryCard: React.FC<ICartSummary> = ({totalPrice, totalQuantity, handleAddProduct}) => {
    return (
        <Box mb={4}>
            <Card variant="outlined">
                <Box p="10px 10px 0 10px" bgcolor="#fafafa">
                    <CardContent>
                        <Typography variant="h5">Total amount</Typography>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2}
                             mb={2}>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Initial amount </Typography>
                                <Typography variant="body1">{totalPrice}$</Typography>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Products amount </Typography>
                                <Typography variant="body1">{totalQuantity}</Typography>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Delivery price </Typography>
                                <Typography variant="body1">{totalPrice > 150 ? '0$' : '15$'}</Typography>
                            </Box>
                            <Box width="100%">
                                <hr/>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="body1">Grand total </Typography>
                                <Typography variant="h5">{totalPrice > 150 ? totalPrice : totalPrice + 15}$</Typography>
                            </Box>
                        </Box>
                        <Button onClick={handleAddProduct} size="small" variant="contained" color="primary">
                            Proceed to checkout</Button>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default CartSummaryCard