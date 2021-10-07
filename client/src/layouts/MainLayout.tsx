import React, {ReactChild, ReactChildren} from 'react';
import {Box, Container} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type MainLayoutType = {
    children?: ReactChildren | ReactChild
}

const MainLayout:React.FC<MainLayoutType> = ({children}) => {
    return (
        <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
            <Header/>
            <Container sx={{flex: 1}} maxWidth={"lg"} >
                {children}
            </Container>
            <Footer/>
        </Box>
    );
};

export default MainLayout;