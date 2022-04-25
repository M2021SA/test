import React, { Fragment } from 'react';
import AllChapter from '../components/Profile/AllChapter';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'



export default function AllchapterPage() {
  return (
   
        <Fragment>
          <TopNavigation />
          <TopPage pagetitle="Add chapter" />
  
          <AllChapter/>
          <Footer />
  
  
        </Fragment>
  
  
      )
    }
  
  
