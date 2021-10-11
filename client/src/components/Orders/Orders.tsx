import React from 'react';
import OrdersSummaryCard from '../Card/OrdersSummaryCard';
import {Box, Typography} from "@mui/material";
import Order from "./Order";
import {useGetOrdersQuery} from "../../redux/features/api/mainApi";
import {useAppSelector} from "../../hooks/redux-hooks";

const Orders = () => {
    const userId = useAppSelector(state => state.auth.id)
    const {data = [], isLoading} = useGetOrdersQuery(userId)
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Box mt={4} display="flex" flexDirection="column" minHeight="50vh">
            <OrdersSummaryCard/>
            <Typography variant={"h6"}>Your orders: </Typography>
            <Box width="100%" display="flex" flexDirection="column">
                {data.length === 0 ?
                    <Typography sx={{mt: 2}} variant={"button"}>No orders yet</Typography>
                    :
                    data.map(order =>
                            <Order key={order._id} {...order} />)
                }

            </Box>
        </Box>
    )
};

export default Orders;