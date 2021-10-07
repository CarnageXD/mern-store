import React from 'react';
import {Box, Typography} from "@mui/material";
import Orders from "../components/Orders/Orders";

const ProfilePage = () => {
    return (
        <Box mt={4} mb={4}>
            <Typography sx={{fontSize: {xs: "1.5rem", md: "2rem"}}} variant={"h3"}>Hello, Bogdan</Typography>
            <Orders/>
        </Box>
    );
};

export default ProfilePage;