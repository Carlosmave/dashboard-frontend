// @ts-nocheck
import { Fragment, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { MainCard, RangeSlider, TotalGrowthBarChartSkeleton } from '../../../components';
import { IDashboardProps } from '../../../interfaces';

export const TotalGrowthBarChart = ({ title, isLoading, data, xAxis }: IDashboardProps) => {
    const primary = '#616161';
    const grey200 = '#616161';
    const primary200 = '#90caf9';
    const primaryDark = '#1e88e5';
    const secondaryMain = '#673ab7';
    const secondaryLight = '#ede7f6';
    const grey500 = '#9e9e9e';
    const sepalLengths = data?.map((dataItem: any) => {
        return dataItem.sepal_length
    })
    const sepalWidths = data?.map((dataItem: any) => {
        return dataItem.sepal_width
    })
    const petalLengths = data?.map((dataItem: any) => {
        return dataItem.petal_length
    })
    const petalWidths = data?.map((dataItem: any) => {
        return dataItem.petal_width
    })

    const [filteredSepalLengths, setFilteredSepalLengths] = useState(sepalLengths?.slice() ?? [])
    const [filteredSepalWidths, setFilteredSepalWidths] = useState(sepalWidths?.slice() ?? [])
    const [filteredPetalLengths, setFilteredPetalLengths] = useState(petalLengths?.slice() ?? [])
    const [filteredPetalWidths, setFilteredPetalWidths] = useState(petalWidths?.slice() ?? [])

    useEffect(() => {
        if (data) {
            setFilteredSepalLengths(sepalLengths?.slice())
            setFilteredSepalWidths(sepalWidths?.slice())
            setFilteredPetalLengths(petalLengths?.slice())
            setFilteredPetalWidths(petalWidths?.slice())
        }
    }, [data])

    const lowerBoundSepal = sepalWidths?.concat(petalLengths)?.concat(petalWidths).sort()[0]
    const upperBoundSepal = sepalWidths?.concat(petalLengths)?.concat(petalWidths).sort((a: number, b: number) => b-a)[0]
    const lowerBoundPetal = sepalWidths?.concat(sepalLengths)?.concat(petalWidths).sort()[0]
    const upperBoundPetal = sepalWidths?.concat(sepalLengths)?.concat(petalWidths).sort((a: number, b: number) => b-a)[0]

    const [lowerBound, setLowerBound] = useState(xAxis === "sepal" ? lowerBoundSepal : lowerBoundPetal)
    const [upperBound, setUpperBound] = useState(xAxis === "sepal" ? upperBoundSepal : upperBoundPetal)

    let filteredData = data?.slice()
    useEffect(() => {
        if (xAxis === "sepal") {
            filteredData = data?.filter((item: any) => item.sepal_width >= lowerBound && item.petal_length >= lowerBound && item.petal_width >= lowerBound && item.sepal_width <= upperBound && item.petal_length <= upperBound && item.petal_width <= upperBound)
        } else {
            filteredData = data?.filter((item: any) => item.sepal_width >= lowerBound && item.sepal_length >= lowerBound && item.petal_width >= lowerBound && item.sepal_width <= upperBound && item.sepal_length <= upperBound && item.petal_width <= upperBound)
        }
        let filteredSepalLengths = filteredData?.map((dataItem: any) => {
            return dataItem.sepal_length
        })
        setFilteredSepalLengths(filteredSepalLengths)
        let filteredSepalWidths = filteredData?.map((dataItem: any) => {
            return dataItem.sepal_width
        })
        setFilteredSepalWidths(filteredSepalWidths)
        let filteredPetalLengths = filteredData?.map((dataItem: any) => {
            return dataItem.petal_length
        })
        setFilteredPetalLengths(filteredPetalLengths)
        let filteredPetalWidths = filteredData?.map((dataItem: any) => {
            return dataItem.petal_width
        })
        setFilteredPetalWidths(filteredPetalWidths)
    }, [lowerBound, upperBound])


    const chartData = {
        height: 480,
        type: 'bar',
        options: {
            chart: {
                id: 'bar-chart',
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%'
                }
            },
            xaxis: {
                type: 'categories',
                categories: xAxis === "sepal" ? filteredSepalLengths : filteredPetalLengths
            },
            legend: {
                show: true,
                fontSize: '14px',
                fontFamily: `'Roboto', sans-serif`,
                position: 'bottom',
                offsetX: 20,
                labels: {
                    useSeriesColors: false
                },
                markers: {
                    width: 16,
                    height: 16,
                    radius: 5
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 8
                }
            },
            fill: {
                type: 'solid'
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true
            }
        },
        series: [
            {
                name: 'Sepal Width',
                data: filteredSepalWidths
            },
            {
                name: xAxis === "sepal" ? 'Petal Length' : 'Sepal Length',
                data: xAxis === "sepal" ? filteredPetalLengths : filteredSepalLengths
            },
            {
                name: 'Petal Width',
                data: filteredPetalWidths
            },
        ]
    };

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [isLoading]);

    return (
        <Fragment>
            {isLoading ? (
                <TotalGrowthBarChartSkeleton />
            ) : (
                <MainCard title={title}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Chart {...chartData} />
                        </Grid>
                        <Grid item xs={12}>
                        <RangeSlider 
                            lowerBound={xAxis==="sepal" ? lowerBoundSepal : lowerBoundPetal}
                            upperBound={xAxis==="sepal" ? upperBoundSepal : upperBoundPetal}
                            setLowerBound={setLowerBound}
                            setUpperBound={setUpperBound}
                        />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </Fragment>
    );
};
