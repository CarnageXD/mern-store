import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {IToggleAuth, LoginData} from "../../types/Auth/auth";
import {useUserLoginMutation} from '../../redux/features/api/mainApi'
import {useState} from "react";
import {setCredentials} from "../../redux/features/authSlice";
import {useAppDispatch} from "../../hooks/redux-hooks";

const SignIn:React.FC<IToggleAuth> = ({toggle}) => {
    const [loginUser, {isLoading}] = useUserLoginMutation()
    const [userData, setUserData] = useState<LoginData>({} as LoginData)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleLogin = async () => {
       const data = await loginUser({
            email: userData.email,
            password: userData.password
        }).unwrap()
        console.log(data)
        dispatch(setCredentials(data))
        localStorage.setItem('authData', JSON.stringify(data))
    }
    if (isLoading) return <h1>Loading...</h1>
    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "gray"}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={handleChange}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={handleChange}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link sx={{cursor: "pointer"}} onClick={toggle} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}

export default SignIn