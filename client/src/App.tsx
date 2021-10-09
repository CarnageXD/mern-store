import React, {useEffect, useState} from 'react';
import MainLayout from "./layouts/MainLayout";
import {useRoutes} from "./routes/routes";
import {useAppSelector} from "./hooks/redux-hooks";

const App = () => {
    const isAuth = useAppSelector(state => state.auth.token)

    const routes = useRoutes(!!isAuth)
    return (
        <MainLayout>
            {routes}
        </MainLayout>
    );
};

export default App;