import * as React from "react";
import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AccountCircleOutlined,
    AdminPanelSettingsOutlined,
    ExitToAppOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import {Badge, Divider} from "@mui/material";
import Drawer from "../Drawer/Drawer";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setCredentials} from "../../redux/features/authSlice";
import {setSuccessSnackbar} from "../../redux/features/snackbarSlice";

export default function Header() {
    const isAuth = !!useAppSelector((state) => state.auth.token);
    const dispatch = useAppDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const cartLength = useAppSelector(state => state.cart.products?.length)
    const isAdmin = useAppSelector(state => state.auth.role)
    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

    const handleLogout = () => {
        localStorage.removeItem("authData");
        dispatch(
            setCredentials({
                name: null,
                id: null,
                token: null,
                role: null,
            })
        );
        dispatch(setSuccessSnackbar("Success logout"))
    };

    return (
        <Box sx={{flexGrow: 1, mb: 2}}>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{background: "white", color: "black"}}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, fontWeight: "bolder"}}
                    >
                        <NavLink to="/">MERN</NavLink>
                    </Typography>
                    {isAuth ? (
                        <>
                            {isAdmin === 'ADMIN' ?
                                <NavLink to="/admin">
                                    <IconButton color="inherit">
                                        <AdminPanelSettingsOutlined/>
                                    </IconButton>
                                </NavLink>
                                :
                                null
                            }

                            <NavLink to="/profile">
                                <IconButton color="inherit">
                                    <AccountCircleOutlined/>
                                </IconButton>
                            </NavLink>
                            <NavLink to="/cart">
                                <IconButton color="inherit">
                                    <Badge badgeContent={cartLength} color="primary">
                                        <ShoppingCartOutlined/>
                                    </Badge>
                                </IconButton>
                            </NavLink>
                            <NavLink to="/">
                                <IconButton
                                    sx={{
                                        display: {
                                            xs: "none !important",
                                            md: "flex !important",
                                        },
                                    }}
                                    onClick={handleLogout}
                                    color="inherit"
                                >
                                    <ExitToAppOutlined/>
                                </IconButton>
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/auth">
                            <Typography
                                sx={{display: {xs: "none", md: "block"}}}
                                variant={"h5"}
                            >
                                Login
                            </Typography>
                        </NavLink>
                    )}
                    <IconButton
                        onClick={toggleDrawer}
                        color="inherit"
                        sx={{display: {md: "none !important"}}}
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
