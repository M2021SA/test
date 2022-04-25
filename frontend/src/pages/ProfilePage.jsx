import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import Profile from '../components/Profile/Profile';



export class ProfilePage extends Component {

  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="Profile page" />

        <Profile/>
        <Footer />


      </Fragment>


    )
  }
}

export default ProfilePage
