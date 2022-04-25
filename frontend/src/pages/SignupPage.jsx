
 import React, { Component , Fragment} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';

import Footer from  "../components/Footer/Footer";
import Signup from '../components/Signup/Signup';


export class SignupPage extends Component {
   
      
  render() {
    return (

        <Fragment>
        <TopNavigation/>
        <TopPage pagetitle="Sign Up"/> 
        <Signup/>
        <Footer/>
    </Fragment>
)
} 

}
    
export default SignupPage