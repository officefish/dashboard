import {
    ISeriesList,
  } from "../../types/ChartData"
  export interface IChartState {
    series: ISeriesList
    numSeries: number
  }
  
  export interface IChartActions {
    setSeries: (series: ISeriesList) => void
    setNumSeries: (numSeries: number) => void
  }