import { FC, ReactNode, useEffect } from "react"
import { Link } from "react-router-dom"
import Chart from "../components/chart"
import { getStatistics } from "../services/network/axios.service";

interface IDashboard {}

const Dashboard: FC<IDashboard> = (/*props*/) : ReactNode => {

   //const {} = props
   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getStatistics();
            console.log(response)
            //setData(response.data);
        } catch (err) {
            //setError(err.message);
        } finally {
            //setLoading(false);
        }
    };

    fetchData();
}, []);


  return (
    <div className="w-full">
       <div className="flex w-full justify-between p-8">
        <button className="btn btn-disabled btn-ghost">Dashboard</button>
        <Link className="btn btn-active btn-secondary" to="/settings">Settings</Link>
       </div>
       <div className="flex w-full p-8">
        <Chart />
      </div>
    </div>
   
      
  )
}

export default Dashboard