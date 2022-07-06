import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../Header/Header'
import './Booking.css'

function Booking() {

  return (
    <>
      <Header />
      <Row className="row-booking">
        <Col className="col-lg-6">
          <div className="left_data">
            <div className="form-container-booking">
              <Form className="form-booking">
                <div className="form-content-booking">
                  <h3>Booking details</h3>
                  <div className="form-inner-content">
                    <Form.Group className="mb-3" controlId="formService">
                      <Form.Select>
                        <option>Haircut</option>
                        <option>Hair styling</option>
                        <option>Makeup</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Control type="text" placeholder='First Name*' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Control type="text" placeholder='Last Name*' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder='Email*' />
                    </Form.Group>

                    <div class="row">
                      <Form.Group controlId="dateBook" className="mb-3 col-lg-6">
                        <Form.Control type="date" name="dateBook" placeholder="Date" />
                      </Form.Group>

                      <Form.Group controlId="timeBook" className="mb-3 col-lg-6">
                        <Form.Control type="time" name="timeBook" placeholder="Time" />
                      </Form.Group>
                    </div>
                  </div>

                  <div className="booking-payment">
                    <h3>Total: USD 25.00</h3>

                    <Button className="btn-submit" type="submit">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6">
          <div className="right_data_booking">
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Booking