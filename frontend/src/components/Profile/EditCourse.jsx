import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { Row, Button, Form, FloatingLabel } from 'react-bootstrap'
import '../Profile/Profile.css'
import Sidebar from './Sidebar';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl = "http://127.0.0.1:8000/api";

export default function EditCourse() {
    const initialValues = { category: "", name: "", brief: "",prev_image: "", image: "" };
    const [courseData, setCourseData] = useState(initialValues)
    const userId=localStorage.getItem('userId');
    const token1 = JSON.stringify(localStorage.getItem('token'));
    const token = JSON.parse(token1)
    const [category, setCategory] = useState([]);

    const {course_id} = useParams()
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/coursecategory/',
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
              
              
          ).then((response) =>{
                 
                    setCategory(response.data);
                 
              });
          }catch(error){
            console.log(error);
          
          }
          // fetch current course data
          try{
            axios.get(baseUrl+'/user-course-detail/'+course_id+'/',
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
          ).then((response) =>{
            console.log(response)  
           
              setCourseData({
                category:response.data.category,
                name:response.data.name,
                brief:response.data.brief,
                prev_image:response.data.image,
                image:'',
            
                 
               });
            });
          }catch(error){

            console.log(error);
          
          
          }
    },[])
    // console.log(category);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
        console.log(courseData);
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setCourseData({ ...courseData, [name]: files[0] });
       
    };

    const submitForm = () =>{
        let form_data = new FormData();
       
        form_data.append('user', userId);
        form_data.append('category', courseData.category);
        form_data.append('name', courseData.name);
        form_data.append('brief', courseData.brief);
        if (courseData.image!== ''){
        form_data.append('image', courseData.image,courseData.image.name);
        }
        try{
          axios.put(baseUrl+'/user-course-detail/'+course_id+'/',form_data,
       
        {headers:{
            'content-type':'multipart/form-data',
            'Authorization': `Token ${token}`
        }}
        
        ).then((response) =>{
              
               if (response.status===200){
                
                const Swal = require('sweetalert2');
     
                Swal.fire(
                    'Good job!',
                    'Changes have been applied successfully',
                    'success'
                  )
     
            }
            //window.location.reload(); //to reload the page when the course added
                
            });
        }catch(error){
          console.log(error);
         

        }
      };


    return (
        <Fragment>
            <div className='Pro-bg'>
                <div className='container mt-4'>
                    <Row>
                        <aside className='col-md-3'>
                            <Sidebar />
                        </aside>
                        <section className='col-md-9'>
                            <div className='card'>
                                <h5 className='card-header' >Edit Course </h5>
                                <div className='card-body'>
                                    <>
                                        <Form >
                                            <Form.Select  className="mb-3" aria-label="Default select example" onChange={handleChange} name='category' value={courseData.category}>
                                                {category.map((category,index) =>{
                                                    return <option key={index} value={category.id} > {category.title} </option>
                                                })}
                                                
                                            </Form.Select>

                                            <FloatingLabel controlId="floatingTextarea" label="Course title" className="mb-3">
                                                <Form.Control  name='name' as="textarea" placeholder="Leave a course decription here" onChange={handleChange} value={courseData.name}/>
                                            </FloatingLabel>

                                            <FloatingLabel controlId="floatingTextarea2" label="Leave a course decription here">
                                                <Form.Control
                                                 
                                                    name='brief'
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    onChange={handleChange}
                                                    value={courseData.brief}
                                                    style={{ height: '100px' }}
                                                />


                                            </FloatingLabel>
                                            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">

                                                <Form.Control name='image' type="file" multiple onChange={handleFileChange}  />
                                                {courseData.prev_image && 
                                                <img src={courseData.prev_image} alt="" width='300'/>
                                                }
                                            </Form.Group>


                                        </Form>

                                        <Button blocksize="lg" variant="warning" type="submit" active onClick={submitForm} > Submit </Button>


                                    </>
                                </div>
                            </div>

                        </section>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

  