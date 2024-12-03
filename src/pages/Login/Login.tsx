import { Link as RouterLink } from 'react-router-dom';
import { Divider, Grid, Stack, Typography } from '@material-ui/core';
import { LoginForm } from './LoginForm';

export const Login = () => {
    return (
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction={'row'}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                <Typography
                                                    color={'black'}
                                                    gutterBottom
                                                    variant={'h2'}
                                                >
                                                    Dashboard
                                                </Typography>
                                                <Typography variant="caption" fontSize="16px">
                                                    Enter your credentials to continue
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <LoginForm />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item container direction="column" alignItems="center" xs={12}>
                                        <Typography
                                            component={RouterLink}
                                            to="/register"
                                            variant="subtitle1"
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            Don't have an account?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}/>
            </Grid>
    );
};

export default Login;