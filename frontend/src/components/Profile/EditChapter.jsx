import React ,{ Fragment } from 'react'
import { Form , Row, FloatingLabel , Button} from 'react-bootstrap'
import Sidebar from './Sidebar';
import '../Profile/Profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl = "http://127.0.0.1:8000/api";

const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)

export default function EditChapter() {
    const initialValues = { course: "",title: "", description: "", video: "", remarks: ""};
    const [chapterData, setChapterData] = useState(initialValues)
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setChapterData({ ...chapterData, [name]: value });
        console.log(chapterData);
    };

    
    const {coursedetails_id} = useParams()
    console.log(coursedetails_id)
    const submitForm = () =>{
        let form_data = new FormData();
       
        form_data.append('course', chapterData.course);
        form_data.append('title', chapterData.title);
        form_data.append('description', chapterData.description);
        form_data.append('video', chapterData.video); 
        form_data.append('remarks', chapterData.remarks);
      
        try{
          axios.put(baseUrl+'/details/'+coursedetails_id+'/',form_data,
       
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
              
            });
        }catch(error){
          console.log(error);
        

        }
      };
      //to fetch old coursedetails data 
      useEffect(() =>{
        try{
            axios.get(baseUrl+'/details/'+coursedetails_id,
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
              
              
          ).then((response) =>{
            console.log(response)  
            setChapterData(response.data);
                 
              });
          }catch(error){

            console.log(error);
          
          }
    },[])
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
                        <h5 className='card-header' >Update Chapter </h5>
                        <div className='card-body'>
                            <>
                                <Form >
                                    <FloatingLabel controlId="floatingTextarea" label="Course title" className="mb-3">
                                        <Form.Control
                                         as="textarea" 
                                         placeholder="Leave a course decription here" 
                                         name='title'
                                        value={chapterData.title}
                                        onChange={handleChange}
                                        
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingTextarea2" label="Leave a course decription here" >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            name='description' 
                                            value={chapterData.description}
                                            onChange={handleChange}
                                            
                                        />


                                   </FloatingLabel>
                                    <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                                    <Form.Label>Video</Form.Label>
                                        <Form.Control 
                                        
                                        type="url"
                                         multiple placeholder="Enter the URL of the video"
                                          name='video' 
                                          value={chapterData.video}
                                          onChange={handleChange}
                                        
                                          />
                                        
                                    </Form.Group>
                                   
                                </Form>
                                

                                <Button blocksize="lg" variant="warning" type="button" active onClick={submitForm}  > Submit </Button> 

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
