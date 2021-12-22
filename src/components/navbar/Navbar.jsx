import './Navbar.css';
import React, { Component } from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import Home from "../home/Home"
import Ranks from "../ranks/Ranks"
import RankWeightClasses from "../ranks/RankWeightClasses"
import Clubs from "../clubs/Clubs"
import OntarioEvents from '../events/ontario/OntarioEvents';
import SocialMedia from '../socialMedia/SocialMedia';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                <Navbar expand="md" id="MainNav" id="NavbarMain">
                    <Container>
                    <Navbar.Brand as={Link} to={"/home"} id="BrandText">                      
                        Ontario Armwrestling
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/home"} id='NavbarLinks'>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/ranks"} id='NavbarLinks'>Ranks</Nav.Link>
                        <Nav.Link as={Link} to={"/clubs"} id='NavbarLinks'>Clubs</Nav.Link>
                        <NavDropdown title="Events" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/ontarioevents"} id='NavbarLinksDrop'>Ontario</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id='NavbarLinksDrop'>Canada</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/socialmedia"} id='NavbarLinks'>Social Media</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>                
                </div>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home/>
                        </Route>                        
                        <Route path="/ranks">
                            <RankWeightClasses/>
                        </Route>
                        <Route path="/clubs">
                            <Clubs/>
                        </Route>
                        <Route path="/ontarioevents">
                            <OntarioEvents/>
                        </Route>
                        <Route path="/socialmedia">
                            <SocialMedia/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>            
        );
    }
}
