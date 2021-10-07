import React from 'react';
import {Box, Typography} from "@mui/material";
import Orders from "../components/Orders/Orders";
import OrdersSummaryCard from "../components/Card/OrdersSummaryCard";

const ProfilePage = () => {
    return (
        <Box mt={4} mb={4}>
            <Typography variant={"h3"}>Hello, Bogdan</Typography>
            <Orders/>
        </Box>
    );
};

export default ProfilePage;