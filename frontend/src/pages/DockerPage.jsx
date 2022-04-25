import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Docker from '../components/CoursesCard/Docker'
import '../components/CoursesCard/CoursesCard.css'

export class DockerPage extends Component {
  render() {
    return (

        <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
        <div className="text-center">
          
          <h1 className='pathMainTitle'> Developers Love Docker </h1>
          <p> Build safer, share wider, run faster. </p>
          <hr/>
          </div>
          </div>
         <Docker/>
         <Footer/>
       
     </Fragment>
    )
  }
}
      

export default DockerPage