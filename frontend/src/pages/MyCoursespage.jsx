import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import Mycourses from '../components/Profile/Mycourses';



export class MyCoursespage extends Component {

  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="My Courses" />

        <Mycourses/>
        <Footer />


      </Fragment>


    )
  }
}

export default MyCoursespage
