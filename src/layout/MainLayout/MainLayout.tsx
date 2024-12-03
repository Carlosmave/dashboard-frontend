import { makeStyles } from '@material-ui/styles';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { Header } from './Header';
import { IMainLayout } from '../../interfaces';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        backgroundColor: '#ffffff'
    },
    content: {
        backgroundColor: '#e3f2fd',
        width: '100%',
        minHeight: 'calc(100vh - 88px)',
        flexGrow: 1,
        padding: '20px',
        marginTop: '88px',
        marginRight: '20px',
        borderRadius: '12px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginLeft: 0,
    },
}));

export const MainLayout = ({ children }: IMainLayout) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar>
                    <Header />
                </Toolbar>
            </AppBar>
            <main
                className={classes.content}
            >
                <div>{children}</div>
            </main>
        </div>
    );
};
