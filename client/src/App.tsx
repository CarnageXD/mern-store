import React, {useEffect, useState} from 'react';
import MainLayout from "./layouts/MainLayout";
import {useRoutes} from "./routes/routes";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {setCredentials} from "./redux/features/authSlice";

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const data = localStorage.getItem('authData')
        if (data) {
            const authData = JSON.parse(data)
            if(authData && authData.token) {
                dispatch(setCredentials(authData))
            }
        }
    }, [])
    const isAuth = useAppSelector(state => state.auth.token)

    const routes = useRoutes(!!isAuth)
    return (
        <MainLayout>
            {routes}
        </MainLayout>
    );
};

export default App;