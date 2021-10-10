import React, {useState} from 'react';
import {Box}  from "@mui/material";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";

const AuthPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)
    const toggleRegistered = () => {
        setIsRegistered(prev => !prev)
    }
    return (
        <Box sx={{height: {xs: "100vh", md: "100%"}}} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} mb={2}>
            {isRegistered ?
                <SignIn toggle={toggleRegistered}/>
                :
                <SignUp toggle={toggleRegistered}/>
            }
        </Box>
    );
};

export default AuthPage;