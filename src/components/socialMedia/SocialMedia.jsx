import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'

export default class SocialMedia extends Component {
    render() {
        return (
            <Container>
                <Button href="#" variant="secondary" size="lg" disabled>
                  Social Media
                </Button>
            </Container>
        )
    }
}
