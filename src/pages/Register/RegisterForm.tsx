import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useCreateUserMutation } from '../../app/services/authenticationServerApi';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    loginInput: {
        marginTop: 8,
        marginBottom: 8,
        '& > label': {
            top: '23px',
            left: 0,
            color: '#9e9e9e',
            '&[data-shrink="false"]': {
                top: '5px'
            }
        },
        '& > div > input': {
            padding: '30.5px 14px 11.5px !important'
        },
        '& legend': {
            display: 'none'
        },
        '& fieldset': {
            top: 0
        }
    }
}));

export const RegisterForm = ({ ...others }) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    const [register, { isLoading, isError, isSuccess, error }] = useCreateUserMutation();

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    variety: '',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                    variety: Yup.string().required('Variety is required')
                })}
                onSubmit={(values) => {
                    register(values).then(function (result: any) {
                        if (result && result.data) {
                            navigate('/login');
                        }
                    })
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {' '}
                                    {errors.email}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth error={Boolean(touched.password && errors.password)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(touched.variety && errors.variety)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Variety</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.variety}
                                name="variety"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.variety && errors.variety && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {' '}
                                    {errors.variety}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {error && (
                            <Box
                                sx={{
                                    mt: 3
                                }}
                            >
                                <FormHelperText error>{error?.data?.message}</FormHelperText>
                            </Box>
                        )}

                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <Button
                                disableElevation
                                disabled={isLoading}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Sign up
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

