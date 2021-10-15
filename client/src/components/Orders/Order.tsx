import React, {useState} from 'react';
import OrderItem from "./OrderItem";
import {Box, Collapse, List, ListItem, ListItemText} from "@mui/material";
import {IOrders} from "../../types/Orders/orders";
import {Assignment, ExpandLess, ExpandMore} from "@mui/icons-material";

const Order: React.FC<IOrders> = ({orderTime, products, _id}) => {
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
                <Assignment sx={{mr: 1}}/>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <ListItemText primary={`Order #${cutStr(_id)}`}/>
                    <Box ml={1} display="flex" alignItems="center">
                        <ListItemText primary={cutStr(orderTime)}/>
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