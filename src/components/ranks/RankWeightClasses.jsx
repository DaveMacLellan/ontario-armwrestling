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
            {image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/ClassImages%2FLightweight.jpg?alt=media&token=8713b5c1-ed19-4120-be63-6aa6720fbc6a", title: "0-154", title2: "0-70", class: "LightWeight"},
            {image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/ClassImages%2FMiddleweight.jpg?alt=media&token=974f5c92-a465-4fa8-b575-62ccf7bfd08e", title: "154-176", title2: "71-80"},
            {image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/ClassImages%2FLightHeavyWeight.jpg?alt=media&token=5cbecf92-b257-43be-ac82-3a3ba2a1f79b", title: "176-198", title2: "81-90"},
            {image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/ClassImages%2FHeavyWeight.jpg?alt=media&token=fc741c01-9c0e-4f36-8ecc-3db5aa8ef9e6", title: "198-242", title2: "91-110"},
            {image: "https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/ClassImages%2FSupers.jpg?alt=media&token=eac106b0-4ab5-4214-b14f-80986a8c6faf", title: "242+", title2: "110+"}
        ];

        if(this.state.whichComponentToShow === "AllRanks") {
            return (
                <Container className='rankPageImage'>
                    <div>
                        <h1>Rankings</h1>
                        <p>Select a weight class!</p>
                    </div>
                <div className='cardGrid'>
                    <Row xs={1} md={1} lg={2}>                    
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
                                    <Card.Text className='cardText' fluid>{cardInfo.title}lbs</Card.Text>
                                    <Card.Text className='cardText2' fluid>{cardInfo.title2}kgs</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <br></br>
                        </Col>
                    ))}            
                    </Row>
                </div>
                <div>
                    <p>Photos by Umesh Dhurvas. Check out his work at <a href="https://www.instagram.com/be_strong__armwrestling/">Be Strong Armwrestling</a></p>
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
