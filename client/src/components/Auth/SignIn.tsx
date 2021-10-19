import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {IToggleAuth, LoginData} from "../../types/Auth/auth";
import {useUserLoginMutation} from "../../redux/features/api/mainApi";
import {setCredentials} from "../../redux/features/authSlice";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setErrorSnackbar, setSuccessSnackbar} from "../../redux/features/snackbarSlice";
import {CircularProgress} from "@mui/material";
import {useForm} from 'react-hook-form'

const SignIn: React.FC<IToggleAuth> = ({toggle}) => {
    const [loginUser, {isLoading}] = useUserLoginMutation();
    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm<LoginData>()

    const handleLogin = async (data: LoginData) => {
        await loginUser({...data}).unwrap().then((payload) => {
            console.log(payload)
            dispatch(setCredentials(payload));
            localStorage.setItem("authData", JSON.stringify(payload));
            dispatch(setSuccessSnackbar('Welcome back!'));
        }).catch(e => {
            dispatch(setErrorSnackbar('Check your credentials and try again'))
        })

    };
    if (isLoading) return <CircularProgress color="primary"/>;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: "gray"}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit((data) => handleLogin(data))}
                    sx={{mt: 1}}>
                    <TextField
                        {...register("email", {required: "Fill this input, please"})}
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoFocus
                    />
                    {errors.email && <Typography variant="caption" color="salmon">{errors.email.message}</Typography>}
                    <TextField
                        {...register("password",
                            {
                                required: "Fill this input, please",
                                minLength: {value: 6, message: "Password length is too short"}
                            })}
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                    />
                    {errors.password &&
                    <Typography variant="caption" color="salmon">{errors.password?.message}</Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
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
};

export default SignIn;
