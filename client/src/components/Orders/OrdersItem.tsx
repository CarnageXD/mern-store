// import React from 'react';
// import {Box, Collapse, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
// import {Assignment, ExpandLess, ExpandMore} from "@mui/icons-material";
// import {IOrders} from "../../types/Orders/orders";
//
//
// const OrdersItem = ({orderTime, id, products}) => {
//     const [open, setOpen] = React.useState(false);
//     console.log(products)
//     const handleClick = () => {
//         setOpen(!open);
//     };
//     return (
//         <List
//             component="nav"
//         >
//             <ListItem button onClick={handleClick}>
//                 <ListItemIcon>
//                     <Assignment/>
//                 </ListItemIcon>
//                 <Box width="100%" display="flex" justifyContent="space-between">
//                     <ListItemText primary={`Order #${id}`}  />
//                     <Box display="flex" alignItems="center">
//                     <ListItemText primary={orderTime}  />
//                     {open ? <ExpandLess /> : <ExpandMore />}
//                     </Box>
//                 </Box>
//
//             </ListItem>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                     <ListItem button>
//                         <Box width='100%' display="flex" justifyContent="space-between">
//                             <Box display="flex" alignItems="center">
//                                 <ListItemIcon>
//                                     <img src={process.env.REACT_APP_API_URL + products.product.image} width={50} height={50} alt={"product"}/>
//                                 </ListItemIcon>
//                                 <ListItemText primary={products.product.title} />
//                             </Box>
//                             <Box>
//                                 <ListItemText primary={products.product.price} />
//                                 <ListItemText secondary={products.product.price * products.quantity} />
//                             </Box>
//                         </Box>
//                     </ListItem>
//                 </List>
//             </Collapse>
//         </List>
//     );
// };
// export default OrdersItem;

import React from 'react';

const OrdersItem = () => {
    return (
        <div>
            
        </div>
    );
};

export default OrdersItem;