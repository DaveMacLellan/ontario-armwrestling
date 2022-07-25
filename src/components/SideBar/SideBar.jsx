import "./SideBar.css"
import {Link} from "react-router-dom"

export default function SideBar() {
    return (
        <div className="sideBar">            
            <div className="sideBar-links">
                <Link to="/profile/dave"><h2 className="test">NAME</h2></Link>
                <Link to="/profile/dave/schedule">Schedule</Link>
                <Link to="/profile/dave/gains">Gains</Link>
                <Link to="/profile/dave/stats">Stats</Link>
            </div>
        </div>
    )
}