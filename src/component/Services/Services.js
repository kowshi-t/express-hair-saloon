import React from 'react'
import './Service.css'
import Header from '../Header/Header'

function Services() {
  return (
    <>
        <Header />
        <Row className="row-services">
        <Col className="col-lg-6">
          <div className="left_data">
            <div className="services-content">
            <h3>Booking details</h3>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6">
          <div className="right_data_services">
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Services