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
                <p onClick={() => scrollTo('super-right')}>Super Heavyweight</p>
                <p onClick={() => scrollTo('heavy-right')}>Heavyweight</p>
                <p onClick={() => scrollTo('lightheavy-right')}>Light Heavyweight</p>
                <p onClick={() => scrollTo('middle-right')}>Middle Weight</p>
                <p onClick={() => scrollTo('light-right')}>Light Weight</p>
                <p onClick={() => scrollTo('overall-right')}>Womans Overall</p>
            </div>
            <div className="rankings-container">
                <div className="rankings-super-right" >                    
                    {ranks[0] && <RankingTable id={"super-right"} test={ranks[0].pullerRanks.super.right}  title={"Super Heavyweight RIGHT(242+lbs)"} name={"super"}  />}
                </div>
                <div className="rankings-super-left" id="super-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.super.left} title={"Super Heavyweight LEFT(242+lbs)"} name={"super"} />}
                </div>
                <div className="break"></div>  
                <div className="rankings-heavy-right" id="heavy-right">                    
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.heavy.right} title={"Heavyweight RIGHT(198-242lbs)"} name={"heavy"} />}
                </div>
                <div className="rankings-heavy-left" id="heavy-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.heavy.left} title={"Heavyweight LEFT(198-242lbs)"} name={"heavy"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-lightheavy-right" >                    
                    {ranks[0] && <RankingTable id={"lightheavy-right"} test={ranks[0].pullerRanks.lightHeavy.right} title={"Light Heavyweight RIGHT(176-198lbs)"} name={"lightHeavy"}/>}
                </div>
                <div className="rankings-lightheavy-left" id="lightheavy-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.lightHeavy.left} title={"Light Heavyweight LEFT(176-198lbs)"} name={"lightHeavy"}/>}
                </div>
                <div className="break"></div>  
                <div className="rankings-middle-right" id="middle-right">                    
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.middle.right} title={"Middleweight RIGHT(154-176lbs)"} name={"middle"}/>}
                </div>
                <div className="rankings-middle-left" id="middle-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.middle.left} title={"Middleweight LEFT(154-176lbs)"} name={"middle"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-light-right" id="light-right">                    
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.light.right} title={"Lightweight RIGHT(0-154lbs)"} name={"light"}/>}
                </div>
                <div className="rankings-light-left" id="light-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.light.left} title={"Lightweight LEFT(0-154lbs)"} name={"light"}/>}
                </div>
                <div className="break"></div>
                <div className="rankings-light-right" id="overall-right">                    
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.womansOverall.right} title={"Womans Overall RIGHT"} name={"womansOverall"}/>}
                </div>
                <div className="rankings-light-left" id="overall-left">
                    {ranks[0] && <RankingTable test={ranks[0].pullerRanks.womansOverall.left} title={"Womans Overall LEFT"} name={"womansOverall"}/>}
                </div>
            </div>
            <div className="jumpBack-container">
                <p onClick={() => scrollTo('pageTop')}>Back to Top</p>
            </div>
        </div>
    )
}