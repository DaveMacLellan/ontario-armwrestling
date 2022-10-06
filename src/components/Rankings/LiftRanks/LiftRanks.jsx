import "./LiftRanks.css"
import db from "../../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import LiftRankingTable from "./LiftRankingTable"

export default function LiftRanks(){
    const [liftRanks, setLiftRanks] = useState([])
 
    useEffect(() => {
        const partsRef = collection(db, 'Rankings');
        const getLiftRanks = async () => {
            const data = await getDocs(partsRef);
            setLiftRanks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        
        getLiftRanks()
        
    }, []);

        
    return(
        <div className="page-container" id="pageTop">
            <h1 className="rankings-title">Ontario Top 10 Ranks for Lifts</h1>       
            <div className="rankings-container">
                <div className="rankings-lift" id="backPressure">
                    {liftRanks[0] && <LiftRankingTable test={liftRanks[0].liftRanks.backPressure.rankings} title={"Backpressure"}  />}                        
                </div>           
                <div className="rankings-lift" id="cupping">
                    {liftRanks[0] && <LiftRankingTable test={liftRanks[0].liftRanks.cupping.rankings} title={"Cupping"}/>}
                </div>
                <div className="rankings-lift" id="pronation">
                    {liftRanks[0] && <LiftRankingTable test={liftRanks[0].liftRanks.pronation.rankings} title={"Pronation"}/>}
                </div>
            </div>
        </div>
    )
}