import React from 'react'
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';


function Logo() {
    return (
        <Container className="logoContainer">
            <NavLink to="/mission">
                <Button></Button>
            </NavLink>
        </Container>
        
    )
}

export default Logo