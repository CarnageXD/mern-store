import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {setCredentials} from "../redux/features/authSlice";
import {useGetCartQuery} from "../redux/features/api/mainApi";
import {setCart} from "../redux/features/cartSlice";
import {useRoutes} from "../routes/routes";
import {CircularProgress} from "@mui/material";

const InitializeApp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const data = localStorage.getItem("authData");
        if (data) {
            const authData = JSON.parse(data);
            if (authData) {
                dispatch(setCredentials(authData));
            }
        }
    }, [dispatch]);
    const isAuth = !!useAppSelector((state) => state.auth.token);
    const userId = useAppSelector((state) => state.auth.id);
    const {data, isLoading} = useGetCartQuery(userId);
    useEffect(() => {
        if (data) {
            dispatch(setCart({products: data.products, cartId: data.id}))
        }
    }, [data, dispatch])

    const routes = useRoutes(isAuth);

    if (isLoading) return <CircularProgress color="primary"/>
    return (
        <div>
            {routes}
        </div>
    );
};

export default InitializeApp;