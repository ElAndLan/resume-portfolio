import { Outlet } from 'react-router-dom'
import './Layout.scss'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className="app_container">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
