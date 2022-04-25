import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "../About/About.css"
import pic from '../../asset/images/logo1.png'


export class About extends Component {

  render() {

    return (
      <Fragment>
        <Container className='px-3'>
          <div className='Platform-desc fluid' style={{ marginBottom: "10rem" }}>
            <Row>
              <Col sm={12} lg={12} md={12}>
                <h2 className="text-center text-uppercase p-3" style={{ fontSize: "1.4em" }}>About <span> Go Courses</span> ? </h2>
                <Container fluid={true} className='Aboutus' />
                <div className='fs-4 mb-15 pt-15  fst-italic text-center' >
                  Go Courses Is a platform that help Tamkeen new devolpers finding all the learning materials in one place rather than looking into more places.</div>
              </Col>
            </Row>
          </div>
        </Container>


        &nbsp;

        <Container>
          <Row>
            <div className='row px-5'>
              <div className='col-12 col-lg-6 text-center'> <img className="aboutImage" src={pic} alt=""/> </div>
              <div className='col-12 col-lg-6 mt-4'>
                <div className="moti">
                  <h2 className="text-center text-uppercase ">Why <span> Go Courses</span> ?</h2>
                  <h4>Easy and fun</h4>
                  <p  className='fs-4 mb-20 pt-20  fst-italic text-muted'>Provides education content in a simple, fun and high quality.</p>
                  <h4>Diverse education conten</h4>
                  <p className='fs-4 mb-20 pt-20  fst-italic text-muted'>provides the most important topics in web dovelopment.</p>
                  <h4>Learn the latest technologies</h4>
                  <p  className='fs-4 mb-20 pt-20  fst-italic text-muted'>New content for the latest technologies required in your work.</p>
                </div>
              </div>
            </div>



            

          
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
