import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Kubernetes from '../components/CoursesCard/Kubernetes'
import '../components/CoursesCard/CoursesCard.css'

export class KubernetesPage extends Component {
  render() {
    return (

        <Fragment>
        <TopNavigation/>
        <div className='divtopStyle'>
       <div className="text-center">
         
         <h1 className='pathMainTitle'> What can Kubernetes do for you? </h1>
         <p> Start learning Kubernetes now. </p>
         <hr/>
         </div>
         </div>
        <Kubernetes/>
        <Footer/>
      
    </Fragment>
   )
 }
}
    

export default KubernetesPage