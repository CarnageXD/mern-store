import React from 'react';
import {Box, Typography} from "@mui/material";
import Orders from "../components/Orders/Orders";
import {useAppSelector} from "../hooks/redux-hooks";

const ProfilePage = () => {
    const userName = useAppSelector(state => state.auth.name)
    return (
        <Box mt={4} mb={4}>
            <Typography sx={{fontSize: {xs: "1.5rem", md: "2rem"}}} variant={"h3"}>Hello, {userName}</Typography>
            <Orders/>
        </Box>
    );
};

export default ProfilePage;