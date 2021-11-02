import React, {useState} from 'react';
import OrderItem from "./OrderItem";
import {Box, Collapse, List, ListItem, Typography} from "@mui/material";
import {IOrders} from "../../types/Orders/orders";
import {Assignment, ExpandLess, ExpandMore} from "@mui/icons-material";

const Order: React.FC<IOrders> = ({orderTime, products, _id, paymentStatus}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const cutStr = (str: string) => {
        return str.substr(0, 10)
    }

    return (
        <List sx={{width: "100%", display: "flex", flexDirection: "column"}}>
            <ListItem button onClick={handleClick}>
                <Assignment sx={{mr: 1, display: {xs: "none", md: "block"}}}/>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography sx={{maxWidth: {xs: 100, sm: 150}}}>{`Order #${cutStr(_id)}`}</Typography>
                    <Box ml={1} display="flex" alignItems="center">
                        <Typography sx={{pr: 2}}
                                    variant="overline"
                                    color={paymentStatus === "unpaid" ? "darkred" : "green"}
                        >
                            {paymentStatus}
                        </Typography>
                        <Typography sx={{maxWidth: {xs: 50, sm: 100}}} variant="button" >{cutStr(orderTime)}</Typography>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </Box>
                </Box>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem sx={{flexDirection: "column"}}  button>
                        {
                            products.map(product => <OrderItem key={product.id} {...product}/>)
                        }
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
};

export default Order;