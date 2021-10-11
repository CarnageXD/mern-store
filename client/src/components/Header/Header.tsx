import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AccountCircleOutlined,
    ArrowBackIos, ExitToAppOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {useState} from "react";
import {Divider, InputBase} from "@mui/material";
import Drawer from "../Drawer/Drawer";
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setCredentials} from "../../redux/features/authSlice";

export default function Header() {
    const isAuth = !!(useAppSelector(state => state.auth.token));
    const dispatch = useAppDispatch()
    const [isInputOpen, setIsInputOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)

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
        <Box sx={{flexGrow: 1, mb: 2}}>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{background: "white", color: "black"}}>
                    <Typography variant="h6" component="div"
                                sx={{flexGrow: 1, fontWeight: "bolder"}}>
                        <NavLink to='/'>
                        MERN
                        </NavLink>
                    </Typography>
                    {
                        isInputOpen ?
                            <>
                                <InputBase
                                    sx={{
                                        ml: 1, width: {xs: "100%"}, margin: {sm: "0 2.5rem"},
                                        borderBottom: "1px solid #c4c4c4"
                                    }}
                                    placeholder="Search..."
                                    autoFocus={true}
                                />
                                <IconButton
                                    type="submit"
                                    sx={{p: '10px'}}
                                    aria-label="search"
                                    onClick={() => setIsInputOpen(prev => !prev)}
                                >
                                    <ArrowBackIos/>
                                </IconButton>
                            </>
                            :
                            <>
                                {isAuth ?
                                <>
                                    <IconButton
                                        onClick={() => setIsInputOpen((prev) => !prev)}
                                        color="inherit"
                                    >
                                        <SearchOutlined/>
                                    </IconButton>
                                    <NavLink to="/profile">
                                        <IconButton
                                            color="inherit"
                                        >
                                            <AccountCircleOutlined/>
                                        </IconButton>
                                    </NavLink>
                                    <NavLink to='/cart'>
                                        <IconButton
                                            color="inherit"
                                        >
                                            <ShoppingCartOutlined/>
                                        </IconButton>
                                    </NavLink>
                                    <NavLink to="/">
                                        <IconButton
                                            sx={{display: {xs: 'none !important', md: 'flex !important'}}}
                                            onClick={handleLogout}
                                            color="inherit"
                                        >
                                            <ExitToAppOutlined />
                                        </IconButton>
                                    </NavLink>
                                </>
                                :
                                    <NavLink to="/auth">
                                        <Typography sx={{display: {xs: "none", md: "block"}}} variant={"h5"}>Login</Typography>
                                    </NavLink>
                                }
                            </>
                    }
                    <IconButton
                        onClick={toggleDrawer}
                        color="inherit"
                        sx={{display: {md: 'none !important'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
                <Divider color={"#d4d4d4"}/>
            </AppBar>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
        </Box>
    );
}
