import "./Layout.css"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"

export function Layout () {
    //<div className="side"><SideBar /></div>
    return (
        <div className="nav-layout-container">
            <div className="header"><NavBar /></div>            
            <div className="main-content"><Outlet /></div>
        </div>
    )
}