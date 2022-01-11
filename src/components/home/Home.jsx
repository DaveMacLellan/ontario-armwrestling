import React, { Component } from 'react'
import { Container, Image, Button, Carousel, Table } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container className='homePageImage' > 
                <h1>Upcoming Events</h1>
                <div className='mainCarousel'>
                <Carousel className='eventsCarousel'>
                <Carousel.Item className='eventsCarouselItem' interval={3000}>
                  <a href="https://fb.me/e/1xWVA78EM">
                  <img                    
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FPALeventLogoLong.jpg?alt=media&token=b665f86c-9f6e-4d65-b715-cb46ed97510d"
                    alt="First slide"
                  />
                  </a>
                  <Carousel.Caption>
                    <h3>Canada Open/Amatuer</h3>
                    <p>Date: March 26, 2022</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='eventsCarouselItem' interval={3000} >
                  <a href="https://fb.me/e/2b70lUJA2">
                  <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FPALeventLogoLong.jpg?alt=media&token=b665f86c-9f6e-4d65-b715-cb46ed97510d"
                    alt="Second slide"
                  />
                  </a>
                  <Carousel.Caption>
                    <h3>Canada Open</h3>
                    <p>Date: September 3, 2022</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='eventsCarouselItem' interval={3000} >
                  <a>
                  <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/ontario-armwrestling.appspot.com/o/Promotions%2FBeStronglong.jpg?alt=media&token=70fbf805-d166-40a7-9cbf-05d7b7046b7a"
                    alt="Third slide"
                  />
                  </a>
                  <Carousel.Caption>
                    <h3>ArmFest 000</h3>
                    <p>Postponed TBD</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
                </div>
                
            </Container>
            
        )
    }
}
