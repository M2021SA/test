import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Jenkins from '../components/CoursesCard/Jenkins'
import '../components/CoursesCard/CoursesCard.css'

export class JenkinsPage extends Component {
  render() {
    return (

        <Fragment>
        <TopNavigation/>
        <div className='divtopStyle'>
       <div className="text-center">
         
         <h1 className='pathMainTitle'>  Start Learn Jenkins </h1>
         <p> Take Your Tech skills To the Next Level and Build Great Things At Any Scale.</p>
         <hr/>
         </div>
         </div>
        <Jenkins/>
        <Footer/>
      
    </Fragment>
   )
 }
}
     
export default JenkinsPage