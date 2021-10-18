import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Facebook, Instagram, Telegram, Twitter, YouTube} from "@mui/icons-material";
import {useAppSelector} from "../../hooks/redux-hooks";

const Footer = () => {
    const isAuth = !!useAppSelector(state => state.auth.token)

    if (!isAuth) return null
    return (
        <Box sx={{backgroundColor: "#efefef"}}>
            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%" p={2}>
                    <Box sx={{mb: 1}} color={"#777"}>
                        <Typography
                            align="center"
                            gutterBottom
                            variant="button"
                            component="div"
                            color={"black"}
                        >
                            Follow us</Typography>
                        <a rel="noreferrer" href="https://instagram.com" target="_blank"> <Instagram/> </a>
                        <a rel="noreferrer" href="https://telegram.org" target="_blank"> <Telegram/> </a>
                        <a rel="noreferrer" href="https://facebook.com" target="_blank"> <Facebook/> </a>
                        <a rel="noreferrer" href="https://youtube.com" target="_blank"> <YouTube/> </a>
                        <a rel="noreferrer" href="https://twitter.com" target="_blank"> <Twitter/> </a>
                    </Box>
                    <Typography variant="caption">©2021, C Inc. All Rights Reserved</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;