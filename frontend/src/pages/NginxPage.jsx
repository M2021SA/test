import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Nginx from '../components/CoursesCard/Nginx'
import '../components/CoursesCard/CoursesCard.css'

export class NginxPage extends Component {
  render() {
    return (

        <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
        <div className="text-center">
          
          <h1 className='pathMainTitle'> Ready to set up Nginx ? </h1>
          <p> Start Setting Up NGINX as a Web Server and Reverse Proxy. </p>
          <hr/>
          </div>
          </div>
         <Nginx/>
         <Footer/>
       
     </Fragment>
    )
  }
}
     
export default NginxPage