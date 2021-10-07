import React from 'react';
import {Box, ListItemIcon, ListItemText} from "@mui/material";
import {IOrderItem, IOrders} from "../../types/Orders/orders";


const OrderItem: React.FC<IOrderItem> = ({product, quantity, id, total}) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box width='100%' display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
                <ListItemIcon>
                    <img src={process.env.REACT_APP_API_URL + product.image} width={50} height={50}
                         alt={"product"}/>
                </ListItemIcon>
                <ListItemText primary={product.title}/>
            </Box>
            <Box>
                <ListItemText primary={`${total}$`}/>
                <ListItemText secondary={`${product.price}$ * ${quantity}x`}/>
            </Box>
        </Box>
    );
};
export default OrderItem;