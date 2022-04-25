import React, {  Fragment } from 'react';
import Coursedetails from '../components/Coursedetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';

function CoursedetailsPage() {
    return(


        <Fragment>
        <TopNavigation/>
        <TopPage pagetitle=" Welcome to Python Course "/>
        <Coursedetails/>
      </Fragment>
      ) }
  
    
export default CoursedetailsPage