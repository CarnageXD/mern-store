import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { useRoutes } from "./routes/routes";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { setCredentials } from "./redux/features/authSlice";
import CustomizedSnackbar from "./components/Snackbar";

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

  const routes = useRoutes(!!isAuth);
  return (
    <MainLayout>
      <CustomizedSnackbar />
      {routes}
    </MainLayout>
  );
};

export default App;
