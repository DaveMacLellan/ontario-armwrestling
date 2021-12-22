import './Ranks.css';
import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Image, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'


export default function RanksComp() {
    const cardInfo = [
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/49zwjBITG8.jpg", Rank:"Rank: 1st", title: "Devon Larratt", text: "Height"},
        {image: "https://www.goldsarm.com/storage/images/armwrestlers/OYuQnT1pqL.jpg", Rank:"2", title: "Michael Todd", text: "Height"},
        {image: "", title: "Ermes Gas", Rank:"3", text: "Height"},
        {image: "", title: "Levan Sang", Rank:"4", text: "Height"},
        {image: "", title: "Vitaly Lela", Rank:"5", text: "Height"},
        {image: "", title: "Alex Kurdecha", Rank:"6", text: "Height"},
        {image: "", title: "Janis Amolins", Rank:"7", text: "Height"},
        {image: "", title: "Rob Vigent", Rank:"8", text: "Height"},
        {image: "", title: "Sasho Sasho", Rank:"9", text: "Height"},
        {image: "", title: "Todd Hutchings", Rank:"10", text: "Height"}
    ];

    return(
        <Container className='rankPageImage'>
            <div className='cardGrid'>
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
            </div>            
        </Container>
    )
}
