import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import OurPaths from '../components/OurPaths/OurPaths';

export class OurPathsPage extends Component {
  
  
  render() {
    return (
    <Fragment>
      <TopNavigation/>
      <TopPage pagetitle=" Welcome to Go Courses Paths "/>
      <OurPaths/>
      <Footer/>
    </Fragment>
    ) }
}

export default OurPathsPage;
