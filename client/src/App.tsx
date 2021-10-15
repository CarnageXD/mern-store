import React, {useEffect} from "react";
import MainLayout from "./layouts/MainLayout";
import {useRoutes} from "./routes/routes";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {setCredentials} from "./redux/features/authSlice";
import CustomizedSnackbar from "./components/Snackbar";
import {useGetCartQuery} from "./redux/features/api/mainApi";
import {setCart} from "./redux/features/cartSlice";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = localStorage.getItem("authData");
    if (data) {
      const authData = JSON.parse(data);
      if (authData && authData.token) {
        dispatch(setCredentials(authData));
      }
    }
  }, [dispatch]);
  const isAuth = useAppSelector((state) => state.auth.token);
  const userId = useAppSelector((state) => state.auth.id);
  const {data, isLoading} = useGetCartQuery(userId);
  useEffect(() => {
    if (data) {
      dispatch(setCart({products: data.products, cartId: data.id}))
    }
  }, [data])


  const routes = useRoutes(!!isAuth);
  return (
      <MainLayout>
        <CustomizedSnackbar/>
        {routes}
      </MainLayout>
  );
};

export default App;
