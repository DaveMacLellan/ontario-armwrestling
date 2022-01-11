import './SocialMedia.css'
import React, { Component } from 'react'
import { Container, Button, Card, CardGroup, Col, Row } from 'react-bootstrap'
import YoutubeEmbed from './YoutubeEmbed'

export default class SocialMedia extends Component {
    render() {
        return (
            <Container fluid="md">
                <h1></h1>
                <CardGroup className='smCardGroupNonPhone'>                    
                    <Card className='smCard1' >
                    <Card.Img className='smCardImage' variant="top" src="https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FTableMonkeysLogo.jpg?alt=media&token=1418e332-b113-49eb-b148-813befe8cc61" />
                        <Card.Body className='smCardBody'>
                        </Card.Body>
                    </Card>
                    <Card className='smCard2'>
                        <YoutubeEmbed className='vidEmbed' embedId='3OLHHcbjY-E'/>
                        <Card.Body className='smCardBody'>
                        <Card.Title className='smCardTitle2'>Youtube</Card.Title>
                        <Card.Text className='smCardText2'>
                            Latest video from Table Monkeys
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='smCard3'>
                        <Card.Body className='smCardBody'>
                        <Card.Title className='smCardTitle3'>Check out the other links below!</Card.Title>
                        <Card.Text className='smCardText3'>
                            <a className="smCardLink" href='https://www.instagram.com/tablemonkeys/'>Instagram</a>
                            <br></br>
                            <a className="smCardLink" href='https://www.facebook.com/TableMonkeys'>Facebook</a>
                        </Card.Text>                      
                        </Card.Body>
                    </Card>
                </CardGroup>                
                <br></br>
                <br></br>
                <CardGroup className='smCardGroupNonPhone'>                    
                    <Card className='smCard1'>
                        <Card.Img className='smCardImage' variant="top" src="https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FBeStrong.jpg?alt=media&token=26a2b991-e54c-4537-8595-7a48ba294b77" />
                        <Card.Body className='smCardBody'>
                        </Card.Body>
                    </Card>
                    <Card className='smCard2'>
                        <YoutubeEmbed embedId='837QBxHlsRw'/>
                        <Card.Body className='smCardBody'>
                        <Card.Title className='smCardTitle2'>Youtube</Card.Title>
                        <Card.Text className='smCardText2'>
                            Latest video from Be Strong Armwrestling
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='smCard3'>
                        <Card.Body className='smCardBody'>
                        <Card.Title className='smCardTitle3'>Check out the other links below!</Card.Title>
                        <Card.Text className='smCardText3'>
                            <a className="smCardLink" href='https://www.instagram.com/be_strong__armwrestling/'>Instagram</a>
                        </Card.Text>                      
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}
