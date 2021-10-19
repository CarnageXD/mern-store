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
import {IToggleAuth, RegisterData} from "../../types/Auth/auth";
import {useUserRegisterMutation} from "../../redux/features/api/mainApi";
import {useDispatch} from "react-redux";
import {setErrorSnackbar, setSuccessSnackbar} from "../../redux/features/snackbarSlice";
import {CircularProgress} from "@mui/material";
import {useForm} from "react-hook-form";

const SignUp: React.FC<IToggleAuth> = ({toggle}) => {
    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterData>()
    const [registerUser, {isLoading}] = useUserRegisterMutation();

    const handleRegister = (data: RegisterData) => {
        registerUser({
            ...data, role: "USER"
        }).unwrap().then(() => {
            toggle()
            dispatch(setSuccessSnackbar('User has been successfully created'))
        }).catch(e => dispatch(setErrorSnackbar(e.data.message)))
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
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit((data) => handleRegister(data))} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register('name',
                                    {
                                        required: "Fill this input, please",
                                        maxLength: {value: 36, message: "Max name length is 36"}
                                    })}
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                            {errors.name &&
                            <Typography variant="caption" color="salmon">{errors.name.message}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('email', {
                                    required: "Fill this input, please",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Email should have this format: example@mail.com"
                                    }
                                })}
                                fullWidth
                                id="email"
                                label="Email Address"
                            />
                            {errors.email &&
                            <Typography variant="caption" color="salmon">{errors.email.message}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('password', {
                                    required: "Fill this input, please",
                                    minLength: {value: 6, message: "Password min length should be 6 "}
                                })}
                                fullWidth
                                type="password"
                                label="Password"
                                id="password"
                            />
                            {errors.password &&
                            <Typography variant="caption" color="salmon">{errors.password.message}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link sx={{cursor: "pointer"}} onClick={toggle} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
