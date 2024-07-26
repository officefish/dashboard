export interface IDataItem {
    primary: string | number | Date | null
    secondary: number | null
    radius?: number
}

export type IDataItemList =IDataItem[]

export interface ISerie {
    label: string
    data: IDataItemList
}

export type ISeriesList = ISerie[]