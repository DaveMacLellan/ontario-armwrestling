import './OntarioEvents.css'
import React, { useEffect, useState } from 'react'
import { Button, Container, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase/firebase'

export default function OntarioEvents() {
    const events = [
        {Name: "PAL", Desc: "Canada Open/Amateur", Location: "Barrie", Directions: "https://goo.gl/maps/3pU3n8ud2Qa5HUvw8", Date: "March 26, 2022", Time: "1pm", Eventlink: "https://fb.me/e/1xWVA78EM", Image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FPALeventLogo.jpg?alt=media&token=12f2357e-7f0c-447c-85db-ef08a03fd16a"},
        {Name: "PAL", Desc: "Canada Open", Location: "Toronto", Date: "September 3, 2022", Time: "1pm", Eventlink:"https://fb.me/e/2b70lUJA2", Image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FPALeventLogo.jpg?alt=media&token=12f2357e-7f0c-447c-85db-ef08a03fd16a"},        
        {Name: "Be Strong", Desc: "ArmFest 000", Location: "TBD", Directions: "", Date: "Postponed TBD", Time: "TBD", Eventlink:"", Image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FBeStrong.jpg?alt=media&token=26a2b991-e54c-4537-8595-7a48ba294b77"}
       
    ]    
    return (
        <Container className='rankPageImage'>
            <div>
                <h1>Ontario Events</h1>
            </div>
            <div className='cardGrid'>
            <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {events.map((events, k) => {
                return(                
                    <Col key={k} >
                    <Card className='eventsCard' bg='dark' text='light' >
                        <Card.Img className='eventsCardImage' variant="top" src={events.Image} />
                        <Card.Body>
                            <Card.Title className='eventsName'>{events.Name}</Card.Title>
                            <Card.Text className='eventsText'>
                                {events.Desc}                                           
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='listItem'>Date: {events.Date} Time: {events.Time}</ListGroupItem>                            
                            <ListGroupItem className='listItem'>Location: {events.Location} </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={events.Eventlink} target="_blank">Event Link</Card.Link>
                            <Card.Link href={events.Directions} target="_blank">Directions</Card.Link>
                         </Card.Body>
                    </Card>
                    <br></br>
                    </Col>                                        
               );                            
            })}
            </Row>            
            </div>  
        </Container>            
    )
}

