import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import CSS from '../components/CoursesCard/CSS'

export class CSSpage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
        <div className="text-center">
          
          <h1 className='pathMainTitle'> Design Great sites </h1>
          <p> Here you shall learn CSS foundation and be able to start design your first project. </p>
          <hr/>
          </div>
          </div>
         <CSS/>
         <Footer/>
       
     </Fragment>
    )
  }
}

export default CSSpage
