import React, { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import '../components/CoursesCard/CoursesCard.css'
import EditCourse from '../components/Profile/EditCourse'
import TopPage from './TopPage';
export default function EditCoursePage() {
  return (
    

        <Fragment>
         <TopNavigation/>
          <TopPage pagetitle=" Edit Course "/>
        <EditCourse/>
         <Footer/>
       
     </Fragment>
    )
  }

