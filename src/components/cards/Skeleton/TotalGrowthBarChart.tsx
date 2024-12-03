// @ts-nocheck
import { Card, CardContent, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';

export const TotalGrowthBarChartSkeleton = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Skeleton variant="rect" height={530} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

