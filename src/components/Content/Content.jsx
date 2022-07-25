import "./Content.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

export default function Content(props){
    function openEvent(url) {
        window.open(url, '_blank')
    }

    //Name of content creator, might not be needed
    //<p className="social-info-name">{props.name}</p>
    
    return(
        <div className="social-container">
            <div className="social-image">
                <img className="image" src={props.logo} alt="logo"/>
            </div>
            <div className="social-info">                
                <div className="social-info-links">
                    <FontAwesomeIcon icon={faInstagramSquare} className="social-instagram" onClick={() => openEvent(props.instagram)}/>
                    <FontAwesomeIcon icon={faYoutube} className="social-youtube" onClick={() => openEvent(props.youtube)}/>
                </div>                 
            </div>
        </div>        
    )
}