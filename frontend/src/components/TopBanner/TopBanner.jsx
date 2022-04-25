import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import { Link } from 'react-router-dom'

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle" style={{fontSize:"2.5em"}}>Not sure where to look ?</h1>
                  <h1 className="topSuptitle" style={{fontSize:"2.2em"}}>Go courses is your way</h1>
                  <p className="paragrph">its ok if you feel lost, we are here to help you find your way and learn fast & easy!</p>
                  <Link to="/OurPathsPage"><Button data-testid="getStarted" variant="warning">Get Started</Button> </Link>
                  <Link to="/LoginPage" > <Button data-testid="login" variant="warning">Login</Button></Link>
                </Col>
              </Row>
            </Container>

          </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner
