import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

interface ISettings {}

const Settings: FC<ISettings> = (/*props*/) : ReactNode => {

   //const {} = props

  return (
    <div className="flex w-full justify-between p-8">
      <Link className="btn btn-active btn-secondary" to="/">Dashboard</Link>
      <button className="btn btn-disabled btn-ghost">Settings</button>
    </div>
      
  )
}

export default Settings