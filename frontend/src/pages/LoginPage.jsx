import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Login from '../components/Login/Login';
import Footer from "../components/Footer/Footer";

export class LoginPage extends Component {
   
    render() {
        return (

            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="Login" />
                <Login />
                <Footer />
            </Fragment>
        )
    }

}

export default LoginPage