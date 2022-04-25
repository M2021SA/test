import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import JavaScript from '../components/CoursesCard/JavaScript'

export class JavaScriptpage extends Component {
 
  render() {
    return (
     <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
        <div className="text-center">
          
          <h1 className='pathMainTitle'> Ready to try JavaScript ? </h1>
          <p> Here you shall learn CSS foundation and be able to start design your first project. </p>
          <hr/>
          </div>
          </div>
         <JavaScript/>
         <Footer/>
       
     </Fragment>
    )
  }
}

export default JavaScriptpage
