import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import iotguylogo from "./icon_logo_high_res.png";
export default function NavBaar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={iotguylogo}
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
