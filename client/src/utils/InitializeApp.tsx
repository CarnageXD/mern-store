import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {setCredentials} from "../redux/features/authSlice";
import {useGetCartQuery} from "../redux/features/api/mainApi";
import {setCart} from "../redux/features/cartSlice";
import {useRoutes} from "../routes/routes";
import {Box, CircularProgress} from "@mui/material";

const InitializeApp = () => {
    const [lsValue, setLSValue] = useState<string | null>()
    const dispatch = useAppDispatch();
    window.addEventListener('storage', () => setLSValue(localStorage.getItem('authData')));
    useEffect(() => {
        const data = localStorage.getItem("authData");
        if (data) {
            const authData = JSON.parse(data);
            if (authData.token) {
                dispatch(setCredentials(authData));
            }
        }
    }, [dispatch, lsValue]);
    const isAuth = useAppSelector((state) => state.auth.token);
    const userId = useAppSelector((state) => state.auth.id);

    const {data, isLoading} = useGetCartQuery(userId);

    useEffect(() => {
        if (isAuth && data) {
            dispatch(setCart({products: data.products, cartId: data.id}))
        }
    }, [data, dispatch, isAuth, lsValue])

    const routes = useRoutes(!!isAuth);

    if (isLoading) return <CircularProgress color="primary"/>
    return (
        <Box width="100%">
            {routes}
        </Box>
    );
};

export default InitializeApp;