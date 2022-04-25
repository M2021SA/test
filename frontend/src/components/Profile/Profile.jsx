import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import '../Profile/Profile.css'
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import p1 from '../../asset/images/pro4.jpg'

const baseUrl = "http://127.0.0.1:8000/api";
const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)


    
export default function Profile() {
    
      
        const [userData, setUserData] = useState([]);
       
    const userId=localStorage.getItem('userId');
    console.log(userId);
       
      // fetch usre name when page load 
      useEffect(() => {
        try {
            axios.get(baseUrl + '/user/' + userId  ,
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
           
            
            ).then((response) => {
    
                setUserData(response.data);
                
            });
        } catch (error) {
            console.log(error);
    
        }
    }, [])
        
    return (
        <Fragment>
             <div className="Pro-bg">
            <div className='container mt-2'>
            <Row>
                <aside className='col-md-3'>
                <Sidebar/>
                </aside>
                <section className='col-md-9'>
                   <Container className='md-20 mt-10'>
                
                       
                     
                       <Container className='md-15  bbt'>

                       <h1 className='hellomsg'>Hello <span>{userData.username}</span> </h1>
                       <h3 className='wel2' >Are you ready to be ON THE NEXT ?</h3>
                       <p className='wel3'> We are happy that you became part of <span>Go Courses </span>, we have collected the best materials for you to start your learning journey. you can help us by adding what you think is helpful. here is your profile page you have all control to add new courses, edit and delete them , what are you wating for ? start help other to find the best resourse to learn and devlopment </p>
                       {/* <h6><i className="bi bi-plus-square"></i>  Add new courses</h6>
                       <h6><i className="bi bi-pencil"></i>  Edit existing course</h6>
                       <h6><i className="bi bi-play-btn-fill"></i>  Add chapter to existing course</h6>
                       <h6><i className="bi bi-pencil-square"></i>  Edit the chapter </h6>
                       <h6><i className="bi bi-x-circle-fill"></i>  delete the chapter </h6>
                       <h6><i className="bi bi-trash"></i>  delete the course  </h6> */}
                       <img  className="img" src={p1} alt="" ></img>
                       </Container>

                       
                   </Container>
                </section>
            </Row>
            </div>
            </div>
        </Fragment>
    )
}
