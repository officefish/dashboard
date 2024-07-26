import { FC, ReactNode } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useLagRadar from "../utils/useLagRadar"
import Area from "./area";

//import useDemoConfig from "../utils/useDemoConfig";
import { useChartStore } from "../providers/chart-provider";


interface IChart {}

const Chart: FC<IChart> = (/*props*/) : ReactNode => {

    useLagRadar();
   //const {} = props

  //  const { data } = useDemoConfig({
  //   series: 10,
  //   dataType: "time",
  // });
  const { series } = useChartStore()


  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full p-8">
        <Area data={series} />
      </div>
    </div>  
   
      
  )
}

export default Chart