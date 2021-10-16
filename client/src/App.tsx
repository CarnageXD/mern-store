import React from "react";
import MainLayout from "./layouts/MainLayout";
import CustomizedSnackbar from "./components/Snackbar";
import InitializeApp from "./utils/InitializeApp";

const App = () => {
    return (
        <MainLayout>
            <CustomizedSnackbar/>
            <InitializeApp/>
        </MainLayout>
    );
};

export default App;
