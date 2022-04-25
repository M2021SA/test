import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer'
import ProfileSettings from '../components/Profile/ProfileSettings';



export class ProfileSettingPage extends Component {

  
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pagetitle="Profile setting page" />

        <ProfileSettings/>
        <Footer />


      </Fragment>


    )
  }
}

export default ProfileSettingPage
