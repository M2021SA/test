import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import AddChapter from '../components/Profile/AddChapter';




export class AddChapterPage extends Component {

  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="Add chapter" />

        <AddChapter/>
        <Footer />


      </Fragment>


    )
  }
}

export default AddChapterPage
