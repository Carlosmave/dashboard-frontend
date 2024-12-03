import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMainCard {
    title: string;
    children: ReactNode;
}

export interface IRangeSlider {
    lowerBound: number;
    upperBound: number;
    setUpperBound: Dispatch<SetStateAction<number>>;
    setLowerBound: Dispatch<SetStateAction<number>>;
}

export interface IMainLayout {
    children: ReactNode;
}
