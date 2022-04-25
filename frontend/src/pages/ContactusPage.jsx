import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Contactus from '../components/Contactus/Contactus';
import Footer from  "../components/Footer/Footer";

export class ContactusPage extends Component {
  
  render() {
    return (

        <Fragment>
            <TopNavigation/>
            <TopPage pagetitle="Contact us"/>
            <Contactus/> 
            <Footer/>
        </Fragment>
    )
  } 
  
}


export default ContactusPage
