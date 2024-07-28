import { FC, ReactNode, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useDemoConfig from "../utils/useDemoConfig";
import { useChartStore } from "../providers/chart-provider";
import DateRangeSelector from "../components/range-selector";
import { DateRange } from "../types";

interface ISettings {}

const Settings: FC<ISettings> = (/*props*/) : ReactNode => {

  const { numSeries, } = useChartStore()

   const { data, randomizeData } = useDemoConfig({
    series: numSeries,
    dataType: "time",
  });

  const { setSeries } = useChartStore()

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [range, setRange] = useState<DateRange>(DateRange.ARBITRARY);


  useEffect(() => {
    setSeries(data);
  }, [data, setSeries]);

  // const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseInt(event.target.value, 10);
  //   if (!isNaN(value)) {
  //     setNumSeries(value);
  //   }
  // };

  const handleRangeChange = (range: DateRange) => {
    setRange(range);
    //console.log(range);
  }
 
  return (
    <div className="w-full">
    <div className="flex w-full justify-between p-8">
       <Link className="btn btn-active btn-secondary" to="/dashboard">Dashboard</Link>
       <button className="btn btn-disabled btn-ghost">Settings</button>
    </div>
    <div className="flex flex-col gap-2 w-full p-8">
        <DateRangeSelector
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        range={range}
        onRangeChange={handleRangeChange}
        />
      </div>
    <div className="flex w-full p-8">
        <button className="btn btn-primary" onClick={randomizeData}>Randomize Data</button>
    </div>
 </div>
      
  )
}

export default Settings