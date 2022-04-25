import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { Row, Button, Form, FloatingLabel } from 'react-bootstrap'
import '../Profile/Profile.css'
import Sidebar from './Sidebar';
import axios from 'axios';
import Swal from 'sweetalert2'
const baseUrl = "http://127.0.0.1:8000/api";
const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)


export default function AddCourse() {
    const initialValues = { category: "", user: "", name: "", brief: "", image: "" };
    const [courseData, setCourseData] = useState(initialValues)
    const userId=localStorage.getItem('userId');
    const [category, setCategory] = useState([]);
  
   

   // <ToastContainer theme="light" /> // for the pop.up window
       //fetch category 
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
        form_data.append('image', courseData.image);
      
        
          axios.post(baseUrl+'/course/',form_data,
          
          
        //    {
        //     'category':courseData.category,
        //     'user': 1,
        //     'name':courseData.name,
        //     'brief':courseData.brief,
        //     'image':courseData.image,
        //     'status' :'',
        // }, 
        
        {headers:{
            'content-type':'multipart/form-data',
            'Authorization': `Token ${token}`
        }
        
    }
        
        ).then((response) =>{
              // window.location.href='/AddCoursePage'; //to reload the page when the course added
              
              
                if (response.status===201){
      
                 Swal.fire(
                     'Good job!',
                     'Course has been added successfully',
                     'success'
                   )
                 }
             
             //window.location.reload(); //to reload the page when the course added
                 
             })

        .catch(err => {
            Swal.fire(
                'error!',
                'Please try again and make sure to fill all the fields',
                'error'
            )
          });

           

      };
     
      localStorage.getItem('courseDataStauts');

  


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
                                <h5 className='card-header' >Add Course </h5>
                                <div className='card-body'>
                               
                            
                            
                                    <>
                                        <Form >
                                            <Form.Select className="mb-3" aria-label="Default select example" onChange={handleChange} name='category' required >
                                                {category.map((category,index) =>{
                                                    return <option key={index} value={category.id} > {category.title} </option>
                                                })}
                                                
                                            </Form.Select>
                                           
                                            <FloatingLabel controlId="floatingTextarea" label="Course title" className="mb-3">
                                                <Form.Control name='name' as="textarea" placeholder="Leave a course decription here" onChange={handleChange} required />
                                            </FloatingLabel>

                                            <FloatingLabel controlId="floatingTextarea2" label="Leave a course decription here">
                                                <Form.Control
                                                    name='brief'
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    onChange={handleChange}
                                                    style={{ height: '100px' }}
                                                    
                                                />


                                            </FloatingLabel>
                                           
                                            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">

                                                <Form.Control name='image' type="file" multiple onChange={handleFileChange} required />
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
