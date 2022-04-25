import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Features/Features.css"

function Features() {
  return (
   <Container className="theFeatures">
        <h2 className="text-center text-uppercase ">Why <span> Go Courses</span> ?</h2>
       <Row className="text-center  ">
           <Col>
           <h4 className="my-3">Easy and fun</h4>
                    <p className="text-muted">Provides education content in a simple, fun and high quality.</p>
           </Col>
           <Col>
           <h4 className="my-3">Diverse education conten</h4>
                    <p className="text-muted">provides the most important topics in web dovelopment.</p>
           </Col>
           <Col>
           <h4 className="my-3">Learn the latest technologies</h4>
                    <p className="text-muted">New content for the latest technologies required in your work.</p>
           </Col>
       </Row>
   </Container>
  )
}

export default Features

