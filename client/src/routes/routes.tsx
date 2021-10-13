import {Redirect, Route, Switch} from "react-router-dom"
import ProfilePage from "../pages/ProfilePage";
import ProductsPage from "../pages/ProductsPage";
import DetailedProductPage from "../pages/DetailedProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";


export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/' exact>
                    <ProductsPage/>
                </Route>
                <Route path='/profile' exact>
                    <ProfilePage/>
                </Route>
                <Route path='/detailed/:id'>
                    <DetailedProductPage/>
                </Route>
                <Route path='/cart' exact>
                    <CartPage/>
                </Route>
                <Route path='/admin' exact>
                    <AdminPage/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <ProductsPage/>
            </Route>
            <Route path='/auth'>
                <AuthPage/>
            </Route>
            <Route path='/detailed/:id'>
                <DetailedProductPage/>
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}