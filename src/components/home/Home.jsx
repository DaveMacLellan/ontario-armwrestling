import React, { Component } from 'react'
import { Container, Image, Button, Carousel, Table } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container className='homePageImage'>
                           
                
                <h1>Upcoming Events</h1>
                <div className='mainCarousel'>
                <Carousel >
                <Carousel.Item interval={2000} >
                  <img
                    className="d-block w-100"
                    src="https://www.walunderground.com/images/uploads/1126/fs1_homepage_week_one__hero@1x.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} >
                  <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/l1Ml3HtC2lI/maxresdefault.jpg"
                    alt="Second slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} >
                  <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/vmNrCbALBp8/maxresdefault.jpg"
                    alt="Third slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
                </div>
                
            </Container>
            
        )
    }
}
