import React, { Component } from 'react'
import { Container, Image, Button, Carousel, Table } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container className='homePageImage'>
              <div className='block'>
                <div className='lastNextEvents'>
                  <div className='lastEvent'>
                    <a>
                      <div className='lastEventHeading'>
                        <div className='lastEventTitle'>Last Event</div>
                        <div className='eventTitle'>
                          BAL 201
                        </div>                      
                      </div>
                      <div className='lastEventImage'>
                        <img className='eventImg' src='data:image/png;base64,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'></img>
                      </div>                    
                    </a>
                  </div>
                  <div className='nextEvent'>
                    <a>
                      <div className='nextEventImage'>
                        <img className='eventImg' src='data:image/png;base64,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'></img>
                      </div>
                      <div className='nextEventHeading'>                      
                        <div className='nextEventTitle'>Next Event</div>
                        <div className='eventTitle'>
                          BAL 202
                        </div>
                      </div>                    
                    </a>
                  </div>
                </div>
              </div>
              
                
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
