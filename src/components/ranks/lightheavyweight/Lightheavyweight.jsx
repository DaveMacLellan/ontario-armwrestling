import '../Ranks.css';
import React, { useState, useEffect } from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase/firebase'
import RankWeightClasses from '../RankWeightClasses'

export default function Lightheavyweight() {
    const [athletes, setAthletes] = useState([]);
    //collection ref
    const athletesRef = collection(db, 'Athletes');    
      
    useEffect(() => {
        const getAthletes = async () => {
            const data = await getDocs(athletesRef);
            setAthletes(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getAthletes()
    }, []);
    
    const cloneAthletesLeft = [];   
    const cloneAthletesRight = [];

    for(var i in athletes){
        if(athletes[i].weightClass == "Light Heavyweight" && athletes[i].leftArm > 0){
            cloneAthletesLeft[i] = athletes[i];
        }
    }
    athletes.splice(0, cloneAthletesLeft)

    for(var i in athletes){
        if(athletes[i].weightClass == "Light Heavyweight" && athletes[i].rightArm > 0){
            cloneAthletesRight[i] = athletes[i];
        }
    }
    athletes.splice(0, cloneAthletesRight)

    const lightHeavyweightRanksLeft = cloneAthletesLeft.filter((el)=> {
        return el !== null && typeof el !== 'undefined';
    });

    lightHeavyweightRanksLeft.sort((a, b) => {
        return a.leftArm - b.leftArm;
    })

    const lightHeavyweightRanksRight = cloneAthletesRight.filter((el)=> {
        return el !== null && typeof el !== 'undefined';
    });

    lightHeavyweightRanksRight.sort((a, b) => {
        return a.rightArm - b.rightArm;
    })
    console.log(lightHeavyweightRanksRight)

    const [whichComponentToShow, setWhichComponentToShow] = useState("LightHeavyWeight")

    function handleClick(){
        setWhichComponentToShow("AllRanks")
    }

    if(whichComponentToShow === "LightHeavyWeight"){
        return(
            <Container className='rankPageImage'>
                <div>
                    <h1>Light Heavyweight Rankings 1-10</h1>
                </div>
                <div className='cardGrid'>
                <Button className='rankButton' onClick={handleClick}>Ranks</Button>
                <br></br>
                <br></br>
                <h1>Right</h1>
                <br></br>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                {lightHeavyweightRanksRight.map((lightHeavyweightRanksRight, k) => {
                    return(
                    
                        <Col key={k} >
                        <Card className='rankCard' bg='dark' text='light' >
                            <Card.Img className='rankCardImage' src={lightHeavyweightRanksRight.profilePicture} fluid />

                            <Card.Body>
                                <Card.Title className='athleteName'>{lightHeavyweightRanksRight.name}</Card.Title>
                                <Card.Text className='rankText'>
                                    Rank: {lightHeavyweightRanksRight.rightArm}                                            
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                        </Col>
                                            
                    );                            
                })}
                </Row> 
                </div>
                <div className='cardGrid'>
                    
                    <h1>Left</h1>
                    <br></br>
                    <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {lightHeavyweightRanksLeft.map((lightHeavyweightRanksLeft, k) => {
                        return(
                        
                            <Col key={k} >
                            <Card className='rankCard' bg='dark' text='light' >
                                <Card.Img className='rankCardImage' src={lightHeavyweightRanksLeft.profilePicture} fluid />

                                <Card.Body>
                                    <Card.Title className='athleteName'>{lightHeavyweightRanksLeft.name}</Card.Title>
                                    <Card.Text className='rankText'>
                                        Rank: {lightHeavyweightRanksLeft.leftArm}                                            
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br></br>
                            </Col>
                                                
                        );                            
                    })}
                    </Row> 
                </div>
                <div>               
                    <Button className='rankButton' onClick={handleClick}>Ranks</Button>
                    
                </div>
                <br></br>                       
            </Container>
        )
    }
    else if(whichComponentToShow === "AllRanks"){
        return(
            <div>
                <RankWeightClasses/>
            </div>
            
        )
    }
}
