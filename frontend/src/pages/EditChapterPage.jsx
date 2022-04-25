import React, { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import '../components/CoursesCard/CoursesCard.css'

import TopPage from './TopPage';
import EditChapter from '../components/Profile/EditChapter'
export default function EditChapterPage() {
  return (
    

        <Fragment>
         <TopNavigation/>
          <TopPage pagetitle=" Edit Chapter "/>
        <EditChapter/>
         <Footer/>
       
     </Fragment>
    )
  }