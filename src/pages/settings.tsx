import { FC, ReactNode, useEffect } from "react"
import { Link } from "react-router-dom"
import useDemoConfig from "../utils/useDemoConfig";
import { useChartStore } from "../providers/chart-provider";

interface ISettings {}

const Settings: FC<ISettings> = (/*props*/) : ReactNode => {

  const { numSeries, setNumSeries } = useChartStore()

   const { data, randomizeData } = useDemoConfig({
    series: numSeries,
    dataType: "time",
  });

  const { setSeries } = useChartStore()

  useEffect(() => {
    setSeries(data);
  }, [data, setSeries]);

  const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setNumSeries(value);
    }
  };
 
  return (
    <div className="w-full">
    <div className="flex w-full justify-between p-8">
       <Link className="btn btn-active btn-secondary" to="/">Dashboard</Link>
       <button className="btn btn-disabled btn-ghost">Settings</button>
    </div>
    <div className="flex w-full p-8">
        <input
          type="number"
          value={numSeries}
          onChange={handleSeriesChange}
          className="input input-bordered"
          min="1"
        />
      </div>
    <div className="flex w-full p-8">
        <button className="btn btn-primary" onClick={randomizeData}>Randomize Data</button>
    </div>
 </div>
      
  )
}

export default Settings