import '../Ranks.css';
import React, { useState, useEffect } from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase/firebase'
import RankWeightClasses from '../RankWeightClasses'


export default function Middleweight() {
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
        if(athletes[i].weightClass == "Middleweight" && athletes[i].leftArm > 0){
            cloneAthletesLeft[i] = athletes[i];
        }
    }
    athletes.splice(0, cloneAthletesLeft)

    for(var i in athletes){
        if(athletes[i].weightClass == "Middleweight" && athletes[i].rightArm > 0){
            cloneAthletesRight[i] = athletes[i];
        }
    }
    athletes.splice(0, cloneAthletesRight)

    const middleweightRanksLeft = cloneAthletesLeft.filter((el)=> {
        return el !== null && typeof el !== 'undefined';
    });

    middleweightRanksLeft.sort((a, b) => {
        return a.leftArm - b.leftArm;
    })

    const middleweightRanksRight = cloneAthletesRight.filter((el)=> {
        return el !== null && typeof el !== 'undefined';
    });

    middleweightRanksRight.sort((a, b) => {
        return a.rightArm - b.rightArm;
    })
    console.log(middleweightRanksRight)

    const [whichComponentToShow, setWhichComponentToShow] = useState("MiddleWeight")

    function handleClick(){
        setWhichComponentToShow("AllRanks")
    }

    if(whichComponentToShow === "MiddleWeight"){
        return(
            <Container className='rankPageImage'>
                <div>
                    <h1>Middleweight Rankings 1-10</h1>
                </div>
                <div className='cardGrid'>
                <Button className='rankButton' onClick={handleClick}>Ranks</Button>
                <br></br>
                <br></br>
                <h1>Right</h1>
                <br></br>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                {middleweightRanksRight.map((middleweightRanksRight, k) => {
                    return(
                    
                        <Col key={k} >
                        <Card className='rankCard' bg='dark' text='light' >
                            <Card.Img className='rankCardImage' src={middleweightRanksRight.profilePicture} fluid />

                            <Card.Body>
                                <Card.Title className='athleteName'>{middleweightRanksRight.name}</Card.Title>
                                <Card.Text className='rankText'>
                                    Rank: {middleweightRanksRight.rightArm}                                            
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
                    {middleweightRanksLeft.map((middleweightRanksLeft, k) => {
                        return(
                        
                            <Col key={k} >
                            <Card className='rankCard' bg='dark' text='light' >
                                <Card.Img className='rankCardImage' src={middleweightRanksLeft.profilePicture} fluid />

                                <Card.Body>
                                    <Card.Title className='athleteName'>{middleweightRanksLeft.name}</Card.Title>
                                    <Card.Text className='rankText'>
                                        Rank: {middleweightRanksLeft.leftArm}                                            
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
