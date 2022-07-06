import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import Header from '../Header/Header'
import './Home.css'
import Slider from "react-slick"

function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <Header />
            <Container fluid className="home-container" id="home">
                <div className="overlay">
                    <h1>Always make room for beauty in your life</h1>
                    <p>At Prauge we are passionate about making people feel good while looking their best.
                        Attending advanced education allows us to keep up with the latest trends and provide
                        each guest with a unique & customizable result. For your convenience, Schedule your
                        reservation today!</p>
                    <Button variant="outline-light">Book now</Button>{' '}
                </div>
            </Container>

            <Container className="services" id="services">
                <h1>Services</h1>

                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <div className="card-top">
                                <img src="/makeup.png" alt="makeup img" />
                                <h1>Makeup</h1>
                            </div>

                            <div className="card-buttom">
                                <h3>We will apply your makeup to suit whatever the special occasion.</h3>
                                {/* <p className="category">{item.category}</p> */}
                                <button className="btn-style">MAKE A RESERVATION</button>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="card">
                            <div className="card-top">
                                <img src="/makeup.png" alt="makeup img" />
                                <h1>Makeup</h1>
                            </div>

                            <div className="card-buttom">
                                <h3>We will apply your makeup to suit whatever the special occasion.</h3>
                                {/* <p className="category">{item.category}</p> */}
                                <button className="btn-style">MAKE A RESERVATION</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

                {/* <Carousel>
                    <div className="cards-wrapper">
                        {
                            CarouselData.map((item) => (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.linkedImg} alt={item.title} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.des}
                                        </Card.Text>
                                        <Button variant="primary">MAKE A RESERVATION</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/hair-styling.png" />
                            <Card.Body>
                                <Card.Title>Hair Styling</Card.Title>
                                <Card.Text>
                                    Our hair stylists are some of the top hairdressers.
                                    Their diverse hair styling talents will make your first choice whether you have long or short hair.
                                </Card.Text>
                                <Button variant="primary">MAKE A RESERVATION</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/makeup.png" />
                            <Card.Body>
                                <Card.Title>Makeup</Card.Title>
                                <Card.Text>
                                    We offer makeup application services for women in Coral Gables and Brickell with a sense of style.
                                    We wll apply your makeup to suit whatever the special occasion.
                                </Card.Text>
                                <Button variant="primary">MAKE A RESERVATION</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel> */}
            </Container>

            <Container fluid className="about-us" id="about">
                <div className="overlay-about-us">
                    <h1>About us</h1>

                    <p>Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer, Prauge Salon &
                        Style Bar has been committed to “raising the bar ” since opening our doors in 2014.
                        Our mission is simple, give every guest an excellent experience by providing them
                        with a warm, inviting culture & results that surpass expectations.At Privé we are
                        passionate about making people feel good while looking their best. Attending advanced
                        education allows us to keep up with the latest trends and provide each guest with a
                        unique & customizable result. For your convenience, we are open 7 days a week & offers
                        online booking 24 hours a day.
                    </p>
                </div>

            </Container>
        </>

    )
}

export default Home