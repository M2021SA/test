import React, { Fragment } from 'react'
import { useState } from 'react'
import { Row, Button, Form, FloatingLabel } from 'react-bootstrap'
import '../Profile/Profile.css'
import Sidebar from './Sidebar';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2'


const baseUrl = "http://127.0.0.1:8000/api";
const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)


export default function AddChapter() {
    const initialValues = { title: "", description: "", video: "", remarks: ""};
    const [chapterData, setChapterData] = useState(initialValues)
    const courseId=localStorage.getItem('courseId');
    console.log(courseId);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setChapterData({ ...chapterData, [name]: value });
        console.log(chapterData);
    };

  
    const {course_id} = useParams()
    const submitForm = () =>{
        let form_data = new FormData();
       
        form_data.append('course', course_id);
        form_data.append('title', chapterData.title);
        form_data.append('description', chapterData.description);
        form_data.append('video', chapterData.video); 
        form_data.append('remarks', chapterData.remarks);
      
        
          axios.post(baseUrl+'/coursedetails/',form_data,
          
        //    {
        //     'category':chapterData.category,
        //     'user': 1,
        //     'name':chapterData.name,
        //     'brief':chapterData.brief,
        //     'image':chapterData.image,
        //     'status' :'',
        // }, 
        
        {headers:{
            'content-type':'multipart/form-data',
            'Authorization': `Token ${token}`
        }}
        
        ).then((response) =>{
            if (response.status===201){
     
                Swal.fire(
                    'Great!',
                    'chapter has been added successfully',
                    'success'
                  )
     
            }
               //window.location.href='/AddChapterPage/'+course_id; //to reload the page when the chapter added

               
            })
            .catch(err => {
                Swal.fire(
                    'error!',
                    'Please try again and make sure to fill all the fields',
                    'error'
                )
              });
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
                                <h5 className='card-header' >Add Chapter </h5>
                                <div className='card-body'>
                                    <>
                                        <Form >
                                            <FloatingLabel controlId="floatingTextarea" label="Course title" className="mb-3">
                                                <Form.Control as="textarea" placeholder="Leave a course decription here" name='title' onChange={handleChange}/>
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingTextarea2" label="Leave a course decription here" >
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '100px' }}
                                                    name='description' 
                                                    onChange={handleChange}
                                                   
                                                />


                                           </FloatingLabel>
                                            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                                            <Form.Label>Video</Form.Label>
                                                <Form.Control  type="url" multiple placeholder="Enter the URL of the video" name='video' onChange={handleChange}/>
                                                
                                            </Form.Group>
                                           
                                        </Form>
                                        

                                        <Button blocksize="lg" variant="warning" type="button" active onClick={submitForm}  >
                                             Submit
                                            
                                              </Button> 

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

  