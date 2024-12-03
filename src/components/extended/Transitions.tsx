import { Box, Grow } from '@material-ui/core';
import { Fragment } from 'react';

export const Transitions = ({ children, ...others }: any) => {
    return (
        <Fragment>
            <Grow {...others}>
                <Box sx={{transformOrigin: '0 0 0'}}>{children}</Box>
            </Grow>
        </Fragment>
    );
};