import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    AccountCircleOutlined,
    AssignmentOutlined,
    HelpOutlineOutlined,
    LoginOutlined,
    ShoppingBagOutlined, ShoppingCartOutlined
} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {NavLink} from 'react-router-dom';

type TemporaryDrawerType = {
    isOpen: boolean
    toggleDrawer: () => void
}

const TemporaryDrawer: React.FC<TemporaryDrawerType> = ({isOpen, toggleDrawer}) => {
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
                    {false ?
                        <>
                            <NavLink to="/profile">
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <AccountCircleOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Account
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/cart">
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <ShoppingCartOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Bag
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/support">
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <HelpOutlineOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Support
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/auth">
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <LoginOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Login
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/support">
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <HelpOutlineOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Support
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        </>
                    }

                </List>
            </Box>
        </Drawer>
    )
}

export default TemporaryDrawer
