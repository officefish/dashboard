import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
import Chart from "../components/chart"

interface IDashboard {}

const Dashboard: FC<IDashboard> = (/*props*/) : ReactNode => {

   //const {} = props

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