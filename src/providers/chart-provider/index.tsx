import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { IChartState, IChartActions } from './types'
import { ISeriesList } from '../../types/ChartData'

type IChartStore = IChartState & IChartActions

const createChartStore = () =>
  createStore<IChartStore>()((set) => ({
    series: [],
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