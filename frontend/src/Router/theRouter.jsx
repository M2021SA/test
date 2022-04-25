import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import OurPathsPage from '../pages/OurPathsPage';
import AboutPage from '../pages/AboutPage';
import ContactusPage from '../pages/ContactusPage';
import HTMLpage from '../pages/HTMLpage';
import FrontEndpage from '../pages/FrontEndpage';
import CSSpage from '../pages/CSSpage';
import JavaScriptpage from '../pages/JavaScriptpage';
import BackEndPage from '../pages/BackEndPage';
import PythonPage from '../pages/PythonPage';
import DjangoPage from '../pages/DjangoPage';
import LoginPage from '../pages/LoginPage';
import NginxPage from '../pages/NginxPage';
import DevOpsPage from '../pages/DevOpsPage';
import DockerPage from '../pages/DockerPage';
import KubernetesPage from '../pages/KubernetesPage';
import JenkinsPage from '../pages/JenkinsPage';
import AnsiblePage from '../pages/AnsiblePage';
import SignupPage from '../pages/SignupPage';
import CoursedetailsPage from '../pages/CoursedetailsPage';
import ProfilePage from '../pages/ProfilePage';
import MyCoursespage from '../pages/MyCoursespage';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import AddCoursePage from '../pages/AddCoursePage';
import AddChapterPage from '../pages/AddChapterPage';
import Logout from '../components/Profile/Logout';
import AllChapter from '../components/Profile/AllChapter';
import EditChapter from '../components/Profile/EditChapter';
import EditCoursePage from '../pages/EditCoursePage';
import AllchapterPage from '../pages/AllchapterPage';
import { AllCoursesPage } from '../pages/AllCoursesPage';
import EditChapterPage from '../pages/EditChapterPage';

export class theRouter extends Component {
  render() {
    return (
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/AboutPage" element={<AboutPage />}/>
      <Route path="/OurPathsPage" element={<OurPathsPage />}/>
      <Route path="/ContactusPage" element={<ContactusPage />}/>
      <Route path="/LoginPage" element={< LoginPage />}/>
      <Route path="/Logout" element={< Logout />}/>
      <Route path="/SignupPage" element={< SignupPage />}/>
      <Route path="/HTMLpage" element={<HTMLpage />}/>
      <Route path="/CSSpage" element={<CSSpage />}/>
      <Route path="/JavaScriptpage" element={<JavaScriptpage/>}/>
      <Route path="/FrontEndpage" element={<FrontEndpage />}/>
      <Route path="/PythonPage" element={< PythonPage />}/>
      <Route path="/DjangoPage" element={< DjangoPage />}/>
      <Route path="/BackEndPage" element={<BackEndPage/> }/>
      <Route path="/NginxPage" element={< NginxPage />}/>
      <Route path="/DockerPage" element={< DockerPage />}/>
      <Route path="/KubernetesPage" element={< KubernetesPage />}/>
      <Route path="/JenkinsPage" element={< JenkinsPage />}/>
      <Route path="/AnsiblePage" element={< AnsiblePage />}/>
      <Route path="/DevOpsPage" element={< DevOpsPage />}/>
      <Route path="/detail/:course_id" element={< CoursedetailsPage />}/>
      <Route path="/ProfilePage" element={< ProfilePage />}/>
      <Route path="/MyCoursespage" element={< MyCoursespage />}/>
      <Route path="/ProfileSettingPage" element={< ProfileSettingPage />}/>
      <Route path="/AddCoursePage" element={<AddCoursePage/>}/>
      <Route path="/AddChapterPage/:course_id" element={<AddChapterPage/>}/>
      <Route path="/AllChapter/:course_id" element={<AllChapter/>}/>
      <Route path="/EditChapter/:coursedetails_id" element={<EditChapter/>}/>
      <Route path="/EditCoursePage/:course_id" element={<EditCoursePage/>}/>
      <Route path="/AllchapterPage/:course_id" element={<AllchapterPage/>}/>
      <Route path="/AllCoursesPage" element={<AllCoursesPage/>}/>
      <Route path="/EditChapterPage/:coursedetails_id" element={<EditChapterPage/>}/>

      
    </Routes>
    )
  }
}

export default theRouter
