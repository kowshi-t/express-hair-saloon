import React from 'react'
import Header from '../Header/Header'
import Container from 'react-bootstrap/esm/Container'
import './Confirmation.css'

function Confirmation() {
  return (
    <>
        <Header />
        <Container>
            <div className="content">
                <h1>Thank you for your reservation!</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                   dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <h4>For further information contact us</h4>

                <img src="./contact-us.png" alt="contact-us" />

                <h6>(487) 1070 1087</h6>

                <h6>sales.salonprauge@sp.com</h6>
            </div>
        </Container>
    </>
  )
}

export default Confirmation