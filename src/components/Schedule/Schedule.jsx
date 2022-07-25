import "./Schedule.css"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function Schedule(props) {
    return(
        <div className="schedule-container">
            <h1 className="schedule-title">Name's Schedule</h1>
            <Calendar className="schedule-calendar"
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}