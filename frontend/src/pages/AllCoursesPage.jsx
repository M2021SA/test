import React, { Component, Fragment } from 'react'
import AllCourses from '../components/CoursesCard/AllCourses'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import '../components/CoursesCard/CoursesCard.css'


export class AllCoursesPage extends Component {
  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <div className='divtopStyle'>
          <div className="text-center">
            <h1 className='pathMainTitle'> Discover all Courses </h1>
            <p> Here you will find all courses combined, start discovering yourself. </p>
            <hr />
          </div>
        </div>
        <AllCourses />
        <Footer />

      </Fragment>
    )
  }
}

export default AllCoursesPage
