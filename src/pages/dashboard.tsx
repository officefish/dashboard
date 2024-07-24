import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

interface IDashboard {}

const Dashboard: FC<IDashboard> = (/*props*/) : ReactNode => {

   //const {} = props

  return (
    <div className="flex w-full justify-between p-8">
      <button className="btn btn-disabled btn-ghost">Dashboard</button>
      <Link className="btn btn-active btn-secondary" to="/settings">Settings</Link>
    </div>
      
  )
}

export default Dashboard