import React, { Component, Fragment } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import "../OurPaths/OurPaths.css"
import { Link } from 'react-router-dom'
import frontIMG from '../../asset/images/frontend_.jpg'
import backtIMG from '../../asset/images/back.jpg'
import devtIMG from '../../asset/images/devOps.jpg'

export class OurPaths extends Component {
    render() {
        return (
            <Fragment>
                <Container className="contStyle">
                    <h1 className='pathMainTitle text-center'>PATHS</h1>
                    <p className='text-center px-2'>Learning to code means more than just memorizing syntax. Instead, Here you will learn how to think like a real programmer. our paths are</p>
                    <div className='row text-center pathsCardRow px-5'>
                        <div className='col-12 col-lg-4 mb-4'>
                            <Card className='pathsCard1'>
                                <Card.Img variant="top" src={frontIMG} />
                                <Card.Body className='flex-wrap'>
                                    <div className="flex-container">
                                        <div className="flex-item fill">
                                            <Card.Title>Front-end Development</Card.Title>
                                            <Card.Text>
                                                Get started as a front-end web developer , by learning the front-end programming which are HTML, CSS, JavaScript, jQuery, and Bootstrap!
                                            </Card.Text>
                                        </div>
                                        <div className="flex-item">
                                            <Link to="/FrontEndpage"><Button variant="warning">Learn more</Button> </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-lg-4 mb-4'>
                            <Card className='pathsCard1'>
                                <Card.Img variant="top" src={backtIMG} />
                                <Card.Body className='flex-wrap'>
                                    <div className="flex-container">
                                        <div className="flex-item fill">
                                            <Card.Title>Back-end Development</Card.Title>
                                            <Card.Text >
                                                Boost your Python, Django and Backend Development Skills! learn Django Forms, Django Templates and more!
                                            </Card.Text>
                                        </div>
                                        <div className="flex-item">
                                            <Link to="/BackEndPage"><Button variant="warning">Learn more</Button> </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-lg-4 mb-4'>
                            <Card className='pathsCard1'>
                                <Card.Img variant="top" src={devtIMG} />
                                <Card.Body className='flex-wrap'>
                                    <div className="flex-container">
                                        <div className="flex-item fill">
                                            <Card.Title>DevOps Development</Card.Title>
                                            <Card.Text >
                                                Become a DevOps Master learning Jenkins & integrations with powerful tools like Docker, Ansible, Nginx & more!
                                            </Card.Text>
                                        </div>
                                        <div className="flex-item">
                                            <Link to="/DevOpsPage"><Button variant="warning">Learn more</Button> </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default OurPaths
