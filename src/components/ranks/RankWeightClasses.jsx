import './RankWeightClasses.css';
import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Image, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import Lightweight from './lightweight/Lightweight'
import Middleweight from './middleweight/Middleweight'
import Lightheavyweight from './lightheavyweight/Lightheavyweight'
import Heavyweight from './heavyweight/Heavyweight'
import Superheavyweight from './superheavyweight/Superheavyweight'


export default class RanksComp extends Component {    

    state = {
        visible: true,
        whichComponentToShow: "AllRanks"
    };

    render() {
        const cardInfo = [
            {image: "https://www.walunderground.com/images/uploads/396/2751_c1__hero@1x__hero@1x.jpg", title: "0-154", class: "LightWeight"},
            {image: "https://i.ytimg.com/vi/KJCug5f3Asc/maxresdefault.jpg", title: "154-176"},
            {image: "https://storage.googleapis.com/afs-prod/media/media:adc590cac6ea4dabbee7ba7128b4a109/3000.jpeg", title: "176-198"},
            {image: "https://www.walunderground.com/images/uploads/1046/406_michaeltodd-devonlarratt__hero@1x.png", title: "198-242"},
            {image: "https://i.ytimg.com/vi/LhwSiZwn8eA/maxresdefault.jpg", title: "242+"}
        ];

        if(this.state.whichComponentToShow === "AllRanks") {
            return (
                <Container className='rankPageImage'>
                    <div>
                        <h1>Rankings</h1>
                        <p>Select a weight class!</p>
                    </div>
                <div className='cardGrid'>
                    <Row xs={1} md={1} lg={3}>                    
                    {cardInfo.map((cardInfo, k) => (
                        <Col key={k} >
                            <Card className='rankWeightCard' bg='dark' text='light' fluid onClick={() => { 
                                if(cardInfo.title === "0-154") {this.setState({whichComponentToShow: "LightWeight"});}
                                else if(cardInfo.title === "154-176"){this.setState({whichComponentToShow: "MiddleWeight"});}
                                else if(cardInfo.title === "176-198"){this.setState({whichComponentToShow: "LightHeavyWeight"});}
                                else if(cardInfo.title === "198-242"){this.setState({whichComponentToShow: "HeavyWeight"});}
                                else if(cardInfo.title === "242+"){this.setState({whichComponentToShow: "SuperHeavyWeight"});}
                                }}>
                                <Card.Img className='rankWeightCardImage' src={cardInfo.image} fluid />
                                <Card.ImgOverlay className='cardOverlay' fluid>
                                    <Card.Text className='cardText' fluid>{cardInfo.title}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <br></br>
                        </Col>
                    ))}            
                    </Row>
                </div>            
                </Container>
            );
        }
        else if(this.state.whichComponentToShow === "LightWeight"){
            return (
                <Lightweight/>
            )
        }
        else if(this.state.whichComponentToShow === "MiddleWeight"){
            return (
                <Middleweight/>
            )
        }
        else if(this.state.whichComponentToShow === "LightHeavyWeight"){
            return (
                <Lightheavyweight/>
            )
        }
        else if(this.state.whichComponentToShow === "HeavyWeight"){
            return (
                <Heavyweight/>
            )
        }
        else if(this.state.whichComponentToShow === "SuperHeavyWeight"){
            return (
                <Superheavyweight/>
            )
        }
    }
}
