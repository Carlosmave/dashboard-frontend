import { ReactNode } from "react";

export interface IIrisDataItem {
    sepal_length: number;
    sepal_width: number;
    petal_length: number;
    petal_width: number;
}

export interface IDashboardResponse {
    iris_data: IIrisDataItem[];
    success: boolean;
}

export interface IDashboardProps {
    title: string;
    isLoading: boolean;
    data: IIrisDataItem[];
    xAxis: string;
}