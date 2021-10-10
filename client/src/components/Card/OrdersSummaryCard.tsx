import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";

const OrdersSummaryCard = () => {
    return (
        <Box mt={2} mb={4} width="290px">
            <Card variant="outlined">
                <Box p="10px 10px 0 10px" bgcolor="#fafafa">
                    <CardContent>
                        <Typography variant="h5">Total orders amount</Typography>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2}
                             mb={2}>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Products ordered </Typography>
                                <Typography variant="body1">20</Typography>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between">
                                <Typography variant="body2">Average spent </Typography>
                                <Typography variant="body1">4$</Typography>
                            </Box>
                            <Box width="100%">
                                <hr/>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="body1">Total spent </Typography>
                                <Typography variant="h5">96$</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default OrdersSummaryCard;