import React from "react";
import OrdersSummaryCard from "../Card/OrdersSummaryCard";
import {Box, CircularProgress, Typography} from "@mui/material";
import Order from "./Order";
import {useGetOrdersQuery} from "../../redux/features/api/mainApi";
import {useAppSelector} from "../../hooks/redux-hooks";
import {getTotalOrders} from "../../utils/getTotalOrders";

const Orders = () => {
    const userId = useAppSelector((state) => state.auth.id);
    const {data = [], isLoading} = useGetOrdersQuery(userId);
    const orders = data.slice().reverse()
    const summaryCardData = getTotalOrders(data);
    if (isLoading) return <CircularProgress color="primary"/>;
    return (
        <Box mt={4} display="flex" flexDirection="column" minHeight="50vh">
            <OrdersSummaryCard {...summaryCardData} />
            <Typography variant={"h6"}>Your orders: </Typography>
            <Box width="100%" display="flex" flexDirection="column">
                {data.length === 0 ? (
                    <Typography sx={{mt: 2}} variant={"button"}>
                        No orders yet
                    </Typography>
                ) : (
                    orders.map((order) => <Order key={order._id} {...order} />)
                )}
            </Box>
        </Box>
    );
};

export default Orders;
