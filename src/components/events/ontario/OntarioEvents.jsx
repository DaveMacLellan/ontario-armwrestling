import './OntarioEvents.css'
import React, { useEffect, useState } from 'react'
import { Button, Container, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase/firebase'

export default function OntarioEvents() {
    const events = [
        {Name: "BAL", Desc: "100", Location: "Toronto", Directions: "", Date: "Sep1", Time: "1pm", Image: "https://www.walunderground.com/img/wal-logo@2x.png"},
        {Name: "PAL TEST", Desc: "Canada Open/Amateur", Location: "Barrie", Directions: "https://goo.gl/maps/SdrNmpRcdsPrx1y3A", Date: "Sep3", Time: "3pm", Eventlink: "https://fb.me/e/1xWVA78EM", Image: "https://www.walunderground.com/img/wal-logo@2x.png"},
        {Name: "Be Strong", Desc: "ArmFest 000", Location: "Ottawa", Directions: "", Date: "Sep3", Time: "12pm", Image: "https://www.walunderground.com/img/wal-logo@2x.png"}
       
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
                        <Card.Img variant="top" src="https://www.walunderground.com/img/wal-logo@2x.png" />
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

