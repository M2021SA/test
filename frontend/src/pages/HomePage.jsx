import React, { Component, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from  "../components/TopNavigation/TopNavigation";
import Footer from  "../components/Footer/Footer";
import OurPaths from  "../components/OurPaths/OurPaths";
import About from  "../components/About/About";




export class HomePage extends Component {
    
    
    render() {
        return (
            <Fragment>
               
                <TopNavigation />
                <TopBanner />
                <OurPaths />
               
                {/* <Frontend/> */}
                <About />
                <Footer />
                

            </Fragment>
        )
    }
}

export default HomePage
