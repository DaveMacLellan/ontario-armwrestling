import "./ContentList.css"
import Content from "./Content";
import db from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function ContentList(){
    const [content, setContent] = useState([])
    
    useEffect(() => {
        const contentRef = collection(db, 'ContentCreators');
        const getContent = async () => {
            const data = await getDocs(contentRef);
            setContent(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getContent()
    }, []);

    const contentList = content.map(c => 
    <Content 
        key={c.id} 
        name={c.name} 
        youtube={c.youTube}
        instagram={c.instagram}
        logo={c.logo}
    />)
    return(
        <div className="content-page-container">
            <h1 className="content-title">Content Creators</h1>
            <div className="content-container">
                {contentList}
            </div> 
        </div>
               
    )
}