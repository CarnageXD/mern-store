import React from 'react';
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import {useRoutes} from "./routes/routes";

const App = () => {
    const routes = useRoutes(true)
    return (
        <MainLayout>
            {routes}
        </MainLayout>
    );
};

export default App;