import "./Events.css"
import Event from "./Event.jsx"
import db from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const partsRef = collection(db, 'Events'); 
        const getEvents = async () => {
            const data = await getDocs(partsRef);
            setEvents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getEvents()
    }, []);

    
    const eventList = events.map(event => 
        <Event 
            key={event.id} 
            name={event.Name} 
            address={event.Address}
            info={event.Info}
            date={event.Date}
            time={event.Time}
            eventImage={event.eventImage}
            eventUrl={event.url}
        />).sort(function(a,b){
            return new Date(a.props.date) - new Date(b.props.date)
        })
    
    return(
        <div className="events-page">
            <h1 className="events-title">Upcoming Events</h1>        
            <div className="events-container">            
                {eventList}
            </div>
        </div>        
    )
}