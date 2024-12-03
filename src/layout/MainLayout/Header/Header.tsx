import { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ProfileSection } from './ProfileSection';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.grow} />
            <ProfileSection />
        </Fragment>
    );
};
