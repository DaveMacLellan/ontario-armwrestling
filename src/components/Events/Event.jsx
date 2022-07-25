import "./Event.css"

export default function Event(props) {
    //<p className="event-details-info">{props.info}</p>
    function openEvent(url) {
        window.open(url, '_blank')
    }

    return(
        <div className="event-container" onClick={() => openEvent(props.eventUrl)}>
            <img className="event-image" src={props.eventImage} alt="event action"/>
            <div className="event-details-container">
                <p className="event-details-name">{props.name}</p>
                <div className="event-details-dt-container">
                    <p className="event-details-date">Date: {props.date}</p>
                    <p className="event-details-time">Time: {props.time}</p>
                </div>
                <p className="event-details-address">Address: {props.address}</p>
            </div>
        </div>
    )
}