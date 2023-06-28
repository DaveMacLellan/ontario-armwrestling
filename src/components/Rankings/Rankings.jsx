import "./Rankings.css"
import db from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import RankingTable from "./RankingTable"

export default function Rankings(){
    const [ranks, setRanks] = useState([])
 
    useEffect(() => {
        const partsRef = collection(db, 'Rankings');
        const getRanks = async () => {
            const data = await getDocs(partsRef);
            setRanks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        
        getRanks()
    }, []);

    function scrollTo(id) {
        document.getElementById(id).scrollIntoView()
    }

    return(
        <div className="page-container" id="pageTop">
            <h1 className="rankings-title">Ontario Top 10 Ranks</h1>
            <div className="jumpTo-ranks">
                <p onClick={() => scrollTo('super-right')}>243+ Class</p>
                <p onClick={() => scrollTo('heavy-right')}>242 Class</p>
                <p onClick={() => scrollTo('220-right')}>220 Class</p>                
                <p onClick={() => scrollTo('lightheavy-right')}>198 Class</p>
                <p onClick={() => scrollTo('middle-right')}>176 Class</p>
                <p onClick={() => scrollTo('light-right')}>154 Class</p>
                <p onClick={() => scrollTo('overall-right')}>Womans</p>
            </div>
            <div className="rankings-container">
                <div className="rankings-super-right" id="super-right" >                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.super.right}  title={"243+lbs Right"} name={"super"}  />}
                </div>
                <div className="rankings-super-left" id="super-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.super.left} title={"243+lbs Left"} name={"super"} />}
                </div>
                <div className="break"></div>
                <div className="rankings-heavy-right" id="heavy-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.heavy.right} title={"220-242lbs Right"} name={"heavy"} />}
                </div>
                <div className="rankings-heavy-left" id="heavy-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.heavy.left} title={"220-242lbs Left"} name={"heavy"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-220-right" id="220-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks["220"].right} title={"199-219lbs Right"} name={"220"} />}
                </div>
                <div className="rankings-220-left" id="220-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks["220"].left} title={"199-219lbs Left"} name={"220"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-lightheavy-right" id="lightheavy-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.lightHeavy.right} title={"176-198lbs Right"} name={"lightHeavy"}/>}
                </div>
                <div className="rankings-lightheavy-left" id="lightheavy-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.lightHeavy.left} title={"176-198lbs Left"} name={"lightHeavy"}/>}
                </div>
                <div className="break"></div>  
                <div className="rankings-middle-right" id="middle-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.middle.right} title={"154-176lbs Right"} name={"middle"}/>}
                </div>
                <div className="rankings-middle-left" id="middle-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.middle.left} title={"154-176lbs Left"} name={"middle"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-light-right" id="light-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.light.right} title={"0-154lbs Right"} name={"light"}/>}
                </div>
                <div className="rankings-light-left" id="light-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.light.left} title={"0-154lbs Left"} name={"light"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-light-right" id="overall-right">                    
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.womansOverall.right} title={"Womans Overall RIGHT"} name={"womansOverall"}/>}
                </div>
                <div className="rankings-light-left" id="overall-left">
                    {ranks[1] && <RankingTable test={ranks[1].pullerRanks.womansOverall.left} title={"Womans Overall LEFT"} name={"womansOverall"}/>}
                </div>
            </div>
            <div className="jumpBack-container">
                <p onClick={() => scrollTo('pageTop')}>Back to Top</p>
            </div>
        </div>
    )
}