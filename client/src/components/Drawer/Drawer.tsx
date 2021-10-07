import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {AccountCircleOutlined, AssignmentOutlined, HelpOutlineOutlined, ShoppingBagOutlined} from "@mui/icons-material";
import {Typography} from "@mui/material";

type TemporaryDrawerType = {
    isOpen: boolean
    toggleDrawer: () => void
}

const TemporaryDrawer:React.FC<TemporaryDrawerType> = ({isOpen, toggleDrawer}) => {
   return (
       <Drawer
           open={isOpen}
           anchor={"right"}
           onClose={toggleDrawer}
       >
           <Box sx={{width: 320}}
           >
               <Typography
                   align={"center"}
                   onClick={toggleDrawer}
                   color="inherit"
                   p={2}
                   sx={{cursor: 'pointer'}}
               >
                   Back
               </Typography>
            <Divider/>
            <List sx={{paddingLeft: 2}}>
                <ListItem button style={{padding: '1rem .2rem'}}>
                    <ListItemIcon >
                        <AccountCircleOutlined />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                        Account
                    </ListItemText>
                </ListItem>
                <ListItem button style={{padding: '1rem .2rem'}}>
                    <ListItemIcon>
                        <ShoppingBagOutlined />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                        Bag
                    </ListItemText>
                </ListItem>
                <ListItem button style={{padding: '1rem .2rem'}}>
                    <ListItemIcon>
                        <AssignmentOutlined />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                        Orders
                    </ListItemText>
                </ListItem>
                    <ListItem button style={{padding: '1rem .2rem'}}>
                    <ListItemIcon>
                        <HelpOutlineOutlined />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                        Support
                    </ListItemText>
                </ListItem>
            </List>
           </Box>
    </Drawer>
   )
}

export default TemporaryDrawer
