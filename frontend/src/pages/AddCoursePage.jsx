import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import AddCourse from '../components/Profile/AddCourse';




export class AddCoursePage extends Component {

  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="Add Course" />

        <AddCourse/>
        <Footer />


      </Fragment>


    )
  }
}

export default AddCoursePage
