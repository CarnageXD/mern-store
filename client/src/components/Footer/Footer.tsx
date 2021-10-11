import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Facebook, Instagram, Pinterest, Telegram, Twitter, YouTube} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "#efefef"}} p={4}>
            <Container maxWidth={"md"} sx={{justifyContent: "center"}}>
                <Grid container justifyContent={"space-between"} width={"100%"} spacing={4}>
                    <Grid item color={"#777"}>
                        <Typography variant={"h5"} color={"black"}>Help & Information</Typography>
                        <Typography variant={"subtitle1"}>Help</Typography>
                        <Typography variant={"subtitle1"}>Track order</Typography>
                        <Typography variant={"subtitle1"}>Delivery & returns</Typography>
                    </Grid>
                    <Grid item color={"#777"}>
                        <Typography gutterBottom variant={"h5"} color={"black"}>Subscribe us</Typography>
                        <Instagram/>
                        <Telegram/>
                        <Facebook/>
                        <YouTube/>
                        <Pinterest/>
                        <Twitter/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;