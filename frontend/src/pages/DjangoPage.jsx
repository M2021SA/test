import React, { Component , Fragment} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Django from '../components/CoursesCard/Django'
import '../components/CoursesCard/CoursesCard.css'

export class DjangoPage extends Component {
  render() {
    return (

        <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
         <div className="text-center" > 
         <h1 className='pathMainTitle'> There's Nothing Better Getting Better  </h1>
         <p> Level up your skills and learn about using Django python from scratch !</p>
         <hr/>
         </div>
         </div>
         <Django/>
        
         <Footer/>
       
     </Fragment>
    )
  }
}
      
export default DjangoPage