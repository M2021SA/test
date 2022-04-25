import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import '../components/CoursesCard/CoursesCard.css'
import Ansible from '../components/CoursesCard/Ansible'

export class AnsiblePage extends Component {
  render() {
    return (


        <Fragment>
        <TopNavigation/>
        <div className='divtopStyle'>
       <div className="text-center">
         
         <h1 className='pathMainTitle'> Do You Wanna Learn Ansible ? </h1>
         <p> Great! here you will learn more and more about Ansible  </p>
         <hr/>
         </div>
         </div>
        <Ansible/>
        <Footer/>
      
    </Fragment>
   )
 }
}
    
export default AnsiblePage