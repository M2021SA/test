import React, { Component, Fragment } from 'react'
import HTML from '../components/CoursesCard/HTML'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import '../components/CoursesCard/CoursesCard.css'


export class HTMLpage extends Component {
  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <div className='divtopStyle'>
          <div className="text-center">
            <h1 className='pathMainTitle'> Learn better , Do better , Be better </h1>
            <p> Here you shall learn html foundation and be able to start your first html project. </p>
            <hr />
          </div>
        </div>
        <HTML />
        <Footer />

      </Fragment>
    )
  }
}

export default HTMLpage
