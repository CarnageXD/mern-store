import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {IOrderSummary} from '../../types/Orders/orders';

const OrdersSummaryCard:React.FC<IOrderSummary> = ({avg, price, quantity}) => {
    return (
        <Box mt={2} mb={4} width="290px">
            <Card variant="outlined">
                <Box p="10px 10px 0 10px" bgcolor="#fafafa">
                    <CardContent>
                        <Typography variant="h5">Orders summary</Typography>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2}
                             mb={2}>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Total orders </Typography>
                                <Typography variant="body1">{quantity}</Typography>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Total spent </Typography>
                                <Typography variant="body1">{price.toFixed(2)}$</Typography>
                            </Box>
                            <Box width="100%">
                                <hr/>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="body1">Average spent </Typography>
                                <Typography variant="h5">{isNaN(avg) ? '0.00' : avg.toFixed(2)}$</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default OrdersSummaryCard;