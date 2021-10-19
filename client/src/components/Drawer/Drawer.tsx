import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {AccountCircleOutlined, ExitToAppOutlined, LoginOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setCredentials} from "../../redux/features/authSlice";

type TemporaryDrawerType = {
    isOpen: boolean
    toggleDrawer: () => void
}

const TemporaryDrawer: React.FC<TemporaryDrawerType> = ({isOpen, toggleDrawer}) => {
    const isAuth = !!(useAppSelector(state => state.auth.token));
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        localStorage.removeItem('authData')
        dispatch(setCredentials({
            name: null,
            id: null,
            token: null,
            role: null
        }))
    }
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
                    {isAuth ?
                        <>
                            <NavLink to="/profile" onClick={toggleDrawer}>
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <AccountCircleOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Account
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/cart" onClick={toggleDrawer}>
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <ShoppingCartOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Cart
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/" onClick={toggleDrawer}>
                                <ListItem onClick={handleLogout} button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <ExitToAppOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Logout
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/auth" onClick={toggleDrawer}>
                                <ListItem button style={{padding: '1rem .2rem'}}>
                                    <ListItemIcon>
                                        <LoginOutlined/>
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{fontSize: '1.3rem'}}>
                                        Login
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
