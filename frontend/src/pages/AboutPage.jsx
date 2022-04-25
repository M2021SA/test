import React, { Component, Fragment } from 'react';
import About from '../components/About/About';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'



export class AboutPage extends Component {

 
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="About us" />

        <About />
        <Footer />


      </Fragment>


    )
  }
}

export default AboutPage
