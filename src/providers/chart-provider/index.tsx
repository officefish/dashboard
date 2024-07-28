import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { IChartState, IChartActions } from './types'
import { ISeriesList } from '../../types/ChartData'

type IChartStore = IChartState & IChartActions

const defaultSeries = [
  {
    label: 'Series 1',
    data: [
      { primary: '2020-01-01', secondary: 10 },
      { primary: '2020-01-02', secondary: 20 },
      { primary: '2020-01-03', secondary: 30 },
    ],
  }
]

const createChartStore = () =>
  createStore<IChartStore>()((set) => ({
    series: defaultSeries,
    setSeries: (series: ISeriesList) => set(() => ({ series })),
    numSeries: 10,
    setNumSeries: (numSeries: number) => set(() => ({ numSeries })),
  }))

type ChartStore = ReturnType<typeof createChartStore>
const ChartContext = createContext<ChartStore | null>(null)

//eslint-disable-next-line react-refresh/only-export-components
export const useChartStore = () => {
  const api = useContext(ChartContext) as StoreApi<IChartStore>
  return {
    series: useStore(api, (state: IChartStore) => state.series),
    setSeries: useStore(api, (state: IChartStore) => state.setSeries),
    numSeries: useStore(api, (state: IChartStore) => state.numSeries),
    setNumSeries: useStore(api, (state: IChartStore) => state.setNumSeries),
  }
}

export const ChartProvider: FC<PropsWithChildren> = ({ children }) => {
  const userStoreRef = useRef<ChartStore>()
  if (!userStoreRef.current) {
    userStoreRef.current = createChartStore()
  }
  return (
    <ChartContext.Provider value={userStoreRef.current}>
      {children}
    </ChartContext.Provider>
  )
}