import { Grid } from '@material-ui/core';
import { TotalGrowthBarChart } from './Charts/TotalGrowthBarChart';
import { useGetDashboardDataQuery } from '../../app/services/dashboardDataServerApi';
import { MainLayout } from '../../layout';

export const Dashboard = () => {
    const {
        data = [],
        isLoading,
        isFetching,
      } = useGetDashboardDataQuery();

    return (
        <MainLayout>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TotalGrowthBarChart title={'Sepal Length vs Sepal Width, Petal Length and Petal Width'} isLoading={isLoading || isFetching} data={data} xAxis={'sepal'} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TotalGrowthBarChart title={'Petal Length vs Sepal Width, Sepal Length and Petal Width'} isLoading={isLoading || isFetching} data={data} xAxis={'petal'} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </MainLayout>
    );
};

