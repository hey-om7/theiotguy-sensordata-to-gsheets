import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
export default function NavBaar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/icon_logo_high_res.png"
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        theIOTguy

                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
