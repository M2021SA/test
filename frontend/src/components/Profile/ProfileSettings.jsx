
import { useState, useEffect } from 'react';
import "../Login/Login.css"
import axios from 'axios';
import React, { Fragment } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import '../Profile/Profile.css'
import Sidebar from './Sidebar';
import Swal from 'sweetalert2'
const baseUrl = "http://127.0.0.1:8000/api";

const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)

export default function ProfileSettings() {
    const initialValues = { oldpass: "", newpass: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const submitForm = () =>{
        let form_data = new FormData();
        form_data.append('old_password',formValues.oldpass);
        form_data.append('new_password', formValues.newpass);
       
          axios.put(baseUrl+'/change-password/', form_data,
          {
            headers: {
                'Authorization': `Token ${token}` 
              }
        }
          
        //   {
        //     'email': formValues.email,
        //     'password':formValues.password,
            
            
        // }
        ).then((response) =>{
           
            console.log(response.data);

            if (response.status===200){
               
                Swal.fire(
                    'Great!',
                    'Password updated successfully',
                    'success'
                  )}
              
            })
        .catch(err => {
           
            Swal.fire(
                'password not changed!',
                'make sure your old password is correct and try again',
                'error'
            )
          });

      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    
    

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);



    const validate = (values) => {
        const errors = {};
      

        
        if (!formValues.oldpass) {
            errors.oldpass = "password is required!";
        } else if (values.oldpass.length < 4) {
            errors.oldpass = "password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.oldpass = "password cannot exceed more than 10 characters";
        }
        if (!formValues.newpass) {
            errors.newpass = "password is required!";
        } else if (values.newpass.length < 4) {
            errors.newpass = "password must be more than 4 characters";
        } else if (values.newpass.length > 10) {
            errors.newpass = "password cannot exceed more than 10 characters";
        }
        return errors;

    }


    return (
        <>
    
        <Fragment>
            <div className='Pro-bg'>
            <div className='container mt-4'>
                <Row>
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                        <div className='card card2'>
                       <h5 className='card-header' > Change Password</h5>
                       <div className='card-body'>
                      
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="oldPassword">
                                <Form.Label column sm="2">
                                    Old Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control
                                        type="text"
                                        data-testid="email"
                                        name="oldpass"
                                        placeholder="Enter your old password"
                                        value={formValues.oldpass}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="newPassword">
                                <Form.Label column sm="2">
                                    New Password
                                </Form.Label>
                                <Col sm="10">
                            
                                    <Form.Control
                                    type="text"
                                   
                                    name="newpass"
                                    placeholder="Enter your new password"
                                    value={formValues.newpass}
                                    onChange={handleChange}
                                />
                                </Col>
                            </Form.Group>
                            <hr/>
                            <Button blocksize="lg" variant="warning" type="submit" active onClick={submitForm} >Change </Button>
                        </Form>
                        </div>
                        </div>
                    </section>
                </Row>
            </div>
            </div>
        </Fragment>
        </>
    )
}
