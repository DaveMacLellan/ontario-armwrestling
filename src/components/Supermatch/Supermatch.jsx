import "./Supermatch.css"
//import devon from "../../images/devon.jpg"
//import todd from "../../images/todd.jpg"

export default function Supermatch() {
    return (
        <div className="supermatch-page">
            <h1 className="supermatch-title">Upcoming Supermatches</h1> 
            <div className="supermatch-container">
                <div className="supermatch-athlete-card-container">
                    <div className="supermatch-athlete-card-left">
                        <img className="supermatch-athlete-card-left-image" src="" alt="athlete"/>
                    </div>
                    <div className="center-container">
                        <div className="center-brand">
                            <h1>BRAND</h1>
                            <h3>Logo</h3>
                            <h3>TEXT</h3>
                        </div>
                        <div className="supermatch-athlete-stats">
                            <p>35 <span className="supermatch-athlete-stats-category">AGE</span> 32</p>
                            <p>5'11" <span className="supermatch-athlete-stats-category">HEIGHT</span> 6'2"</p>
                            <p>185 <span className="supermatch-athlete-stats-category">WEIGHT</span> 210</p>
                            <p>35 <span className="supermatch-athlete-stats-category">WRIST</span> 32</p>
                            <p>35 <span className="supermatch-athlete-stats-category">FOREARM</span> 32</p>
                            <p>35 <span className="supermatch-athlete-stats-category">BICEP</span> 32</p>
                        </div>
                    </div>            
                    <div className="supermatch-athlete-card-right">
                        <img className="supermatch-athlete-card-right-image" src="" alt="athlete"/>
                    </div>
                </div>

                <div className="supermatch-athlete-card-container-nonMain">
                    <div className="supermatch-athlete-card-left">
                        <img className="supermatch-athlete-card-left-image" src="" alt="athlete"/>
                    </div>
                    <div className="center-container-nonMain">
                        <div className="supermatch-athlete-stats">
                            <p>STATS</p>
                            <p>35 <span className="supermatch-athlete-stats-category">AGE</span> 32</p>
                            <p>5'11" <span className="supermatch-athlete-stats-category">HEIGHT</span> 6'2"</p>
                            <p>185 <span className="supermatch-athlete-stats-category">WEIGHT</span> 210</p>
                            <p>35 <span className="supermatch-athlete-stats-category">WRIST</span> 32</p>
                            <p>35 <span className="supermatch-athlete-stats-category">FOREARM</span> 32</p>
                            <p>35 <span className="supermatch-athlete-stats-category">BICEP</span> 32</p>
                        </div>
                    </div>
                    <div className="supermatch-athlete-card-right">
                        <img className="supermatch-athlete-card-right-image" src="" alt="athlete"/>
                    </div>
                </div>
                
            </div>            
        </div>        
    )
}