import './Superheavyweight.css';
import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Image, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import RankWeightClasses from '../RankWeightClasses'

export default function Superheavyweight() {
    const cardInfo = [
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 1", title: "Super Heavyweight", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"Rank: 2", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 3", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"Rank: 4", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 5", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"Rank: 6", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 7", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"Rank: 8", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 9", title: "Name", text: "Weight:"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"Rank: 10", title: "Name", text: "Weight:"}
    ];

    const [visible, setVisisble] = useState(true);
    const [whichComponentToShow, setWhichComponentToShow] = useState("SuperHeavyWeight")

    function handleClick(){
        setWhichComponentToShow("AllRanks")
    }

    if(whichComponentToShow === "SuperHeavyWeight"){
        return(
            <Container className='rankPageImage'>
                <div>
                    <h1>Super Heavyweight Rankings 1-10</h1>
                </div>
                <div className='cardGrid'>
                <Button className='rankButton' onClick={handleClick}>Ranks</Button>
                <br></br>
                <br></br>
                    <Row xs={1} md={5} lg={5}>
                        {cardInfo.map((cardInfo, k) => (
                            <Col key={k} >
                                <Card className='rankCard' bg='dark' text='light' >
                                    <Card.Img className='rankCardImage' src={cardInfo.image} fluid />
    
                                    <Card.Body>
                                        <Card.Title>{cardInfo.title}</Card.Title>
                                        <Card.Text >
                                            {cardInfo.Rank}
                                            <br></br>
                                            {cardInfo.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br></br>
                            </Col>
                        ))}
                    </Row>
                    <Button className='rankButton' onClick={handleClick}>Ranks</Button>
                </div>                        
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
