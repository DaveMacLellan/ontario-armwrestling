import './Navbar.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    function toggleMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    /*

    <Link className="link" to="/supermatch" onClick={() => toggleMenu()}>Supermatches</Link>  

    <Link to="/profile/dave" className="profile-link">
                <div className="profile-container">
                    <p className="profile-icon">L</p>
                    <p className="profile-greeting">Login</p>
                </div>
            </Link>  

    */

    return (
        <div className="topnav" id="myTopnav">
            <div className="nav-title-container">
                <h2 className="nav-title">Ontario Armwrestling</h2>
                <FontAwesomeIcon className="icon" id="hamburg" icon={faBars} onClick={() => toggleMenu()}/>
                <FontAwesomeIcon className="iconX"  id="x" icon={faTimes}  onClick={() => toggleMenu()}/>
            </div>
            <div className="nav-links" id="myLinks">
                <Link className="link" to="/home" onClick={() => toggleMenu()}>Home</Link>                
                <Link className="link" to="/events" onClick={() => toggleMenu()}>Events</Link>
                <div className="dropdown">
                    <button className="dropbtn">Rankings</button>
                    <div className="dropdown-content" id="myDropdown">
                        <Link className="link" to="/rankings/topten" onClick={() => toggleMenu()}>Top 10 Ranks</Link>
                        <Link className="link" to="/rankings/lifts" onClick={() => toggleMenu()}>Lift Rankings</Link>
                    </div>
                </div>                                
                <Link className="link" to="/content" onClick={() => toggleMenu()}>Content</Link>
                <Link className="link" to="/clubs" onClick={() => toggleMenu()}>Clubs</Link> 
            </div>
                      
        </div>    
    )
}