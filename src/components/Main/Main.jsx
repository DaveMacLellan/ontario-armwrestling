import { useState } from "react"
import Schedule from "../Schedule/Schedule"

export default function Main() {
    const [comp, setComp] = useState("Schedule")
    console.log(comp)
    return(
        <div>
            {comp === "Schedule" && <Schedule />}
            {comp === "Stats" && <p>STATS</p>}
            {comp === "Main" && <p>MAIN</p>}
        </div>
    )
}