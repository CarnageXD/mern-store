import React, {ReactNode} from "react";
import {Box, Container, CssBaseline} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type MainLayoutType = {
    children?: ReactNode;
};

const MainLayout: React.FC<MainLayoutType> = ({children}) => {
    return (
        <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
            <CssBaseline/>
            <Header/>
            <Container sx={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center"}}
                       maxWidth={"lg"}>
                {children}
            </Container>
            <Footer/>
        </Box>
    );
};

export default MainLayout;
