import React, {useEffect, useState} from 'react';
import OrdersItem from "./OrdersItem";
import OrdersSummaryCard from '../Card/OrdersSummaryCard';
import {Box} from "@mui/material";
import {IOrders} from "../../types/Orders/orders";

const Orders = () => {
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<IOrders[]>([])
    useEffect(() => {
        async function getOrders () {
            setLoading(true)
            const response = await fetch('http://localhost:5000/api/orders/615458451e7fea07af1a277a')
            const data = await response.json()
            setOrders(data.orders)
        }
        getOrders()
    }, [])
    console.log(orders)
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="50vh">
            <OrdersSummaryCard/>
            <Box width="100%" display="flex" flexDirection="column">
                {orders.map(order =>
                    <div></div>
                    // <OrdersItem />
                )}
            </Box>
        </Box>
    )
};

export default Orders;