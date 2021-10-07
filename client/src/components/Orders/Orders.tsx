import React, {useEffect, useState} from 'react';
import OrdersSummaryCard from '../Card/OrdersSummaryCard';
import {Box, Typography} from "@mui/material";
import {IOrders} from "../../types/Orders/orders";
import Order from "./Order";

const Orders = () => {
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<IOrders[]>([])
    useEffect(() => {
        async function getOrders () {
            setLoading(true)
            const response = await fetch('http://localhost:5000/api/orders/615458451e7fea07af1a277a')
            const data = await response.json()
            setOrders(data)
        }
        getOrders()
    }, [])
    return (
        <Box mt={4} display="flex" flexDirection="column" minHeight="50vh">
            <OrdersSummaryCard/>
            <Typography variant={"h6"}>Your orders: </Typography>
            <Box width="100%" display="flex" flexDirection="column">
                {orders.map(order =>
                    <Order {...order} />)}
            </Box>
        </Box>
    )
};

export default Orders;