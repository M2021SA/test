import React ,{ Fragment } from 'react'
import { Container, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Profile/Profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api";

export default function Mycourses() {

    const [courseData , setCourseData ] = useState([]);

    const userId=localStorage.getItem('userId');
    const token1 = JSON.stringify(localStorage.getItem('token'));
    const token = JSON.parse(token1)
    console.log(userId);
    // fetch course when page load 
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/user-courses/'+userId,
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
              
          ).then((response) =>{
                 
            setCourseData(response.data);
                 
              });
          }catch(error){
            console.log(error);
          
          }
    },[])
     // Delete course
     const Swal = require('sweetalert2');
     const handelDeleteClick = (course_id) => {
         Swal.fire({
             title: 'Confirm!',
             text: 'Are you sure you want to delete this course',
             icon: 'warning',
             confirmButtonText: 'Conitnue',
             showCancelButton: true,
           }).then((result)=>{
               if(result.isConfirmed){
                   try{
                       axios.delete(baseUrl + '/course/' + course_id,
                       {
                        headers: {
                            'Authorization': `Token ${token}`
                          }
                    }
                       
                       
                       )
                       .then((response)=>{
                           window.location.reload();
                       });
                   }catch(error){
                       Swal.fire('error ','course has not been deleted !!');
                   }
               } else{
                 Swal.fire('error ','course has not been deleted !!');
               }
         })
      }
    

  return (

            <Fragment>
                 <div className='Pro-bg'>
                <Container className='mt-4'>
                    <Row>
                        <aside className='col-md-3'>
                           <Sidebar/>
                            
                        </aside>
                        <section className='col-md-9' >
                          <div className='card'>
                              <h5 className='card-header' > My Courses</h5>
                              <div className='card-body'>
                                  <table className='table table-bordered' >
                                     <thead> 
                                         <tr> 
                                             <th>
                                                 name
                                             </th>
                                             <th>
                                                 Course Image
                                             </th>
                                             <th>
                                                 Action
                                             </th>
                                         </tr>
                                         </thead> 
                                         <tbody>
                                             {courseData.map((course)=> 
                                         <tr key={course.id}>
                                             <td > <Link to={'/AllchapterPage/'+ +course.id}>{course.name}</Link></td>
                                             <td> <img src={course.image} width='100' className='rounded' alt={course.name}/> </td>
                                             <td> 
                                             <Link to={'/EditCoursePage/' +course.id} className='btn btn-warning btn btn-active ms-2'> Edit Course</Link>
                                             <Link to={'/AddChapterPage/' +course.id} className='btn btn-warning btn btn-active ms-2'> Add Chapter</Link>
                                             <Button onClick={()=> handelDeleteClick(course.id)}  blocksize="lg" variant="danger" type="submit" active ><i className="bi bi-trash3"></i> </Button> 
                                             </td>
                                             
                                             </tr>
                                             )}
                                         </tbody>
                                  </table>
                              </div>
                              
                          </div>
                      </section>
                    </Row>
                    
                      
                </Container>
                </div>
            </Fragment>
        )
    }
    