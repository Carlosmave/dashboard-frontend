import { Fragment, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Avatar,
    CardContent,
    Chip,
    ClickAwayListener,
    List,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Typography
} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';
import { Transitions } from '../../../../components';
// @ts-ignore
import { IconLogout, IconSettings } from '@tabler/icons';
import UserImage from './../../../../assets/images/users/user.png';
import { logout } from '../../../../app/slices/authenticationSlice';
import { useAppDispatch } from '../../../../app/hooks';
import { dashboardServerApi } from '../../../../app/services/dashboardServerApi';


const useStyles = makeStyles((theme) => ({
    navContainer: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '300px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        ['md']: {
            minWidth: '100%'
        }
    },
    headerAvatar: {
        cursor: 'pointer',
        width: '34px',
        height: '34px',
        fontSize: '1.2rem',
        margin: '8px 0 8px 8px !important'
    },
    profileChip: {
        height: '48px',
        alignItems: 'center',
        borderRadius: '27px',
        transition: 'all .2s ease-in-out',
        borderColor: '#e3f2fd',
        backgroundColor: '#e3f2fd',
        '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: '#2196f3',
            background: '#2196f3' + '!important',
            color: '#e3f2fd',
            '& svg': {
                stroke: '#e3f2fd'
            }
        }
    },
    profileLabel: {
        lineHeight: 0,
        padding: '12px'
    },
    listItem: {
        marginTop: '5px'
    },
    cardContent: {
        padding: '16px !important'
    },
}));

export const ProfileSection = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<any>(null);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(dashboardServerApi.util.resetApiState());
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <Fragment>
            <Chip
                classes={{ label: classes.profileLabel }}
                className={classes.profileChip}
                icon={
                    <Avatar
                        src={UserImage}
                        className={classes.headerAvatar}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={'#2196f3'} />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                    <CardContent className={classes.cardContent}>
                                        <List component="nav" className={classes.navContainer}>
                                            <ListItemButton
                                                className={classes.listItem}
                                                sx={{ borderRadius: '12px' }}
                                                selected={false}
                                                onClick={handleLogout}
                                            >
                                                <ListItemIcon>
                                                    <IconLogout stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                            </ListItemButton>
                                        </List>
                                    </CardContent>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Fragment>
    );
};

export default ProfileSection;
