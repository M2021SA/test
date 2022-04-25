import React from 'react'
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Login/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api";

const token = JSON.stringify(localStorage.getItem('token'));
localStorage.getItem('loginstatus');

export default function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const submitForm = () =>{
        let form_data = new FormData();
        form_data.append('username',formValues.email);
        form_data.append('password', formValues.password);
       
          axios.post(baseUrl+'/user-login', form_data,
          {
            headers: {
                'Authorization': `Token ${token}` 
              }
        }
          
       
        ).then((response) =>{
            console.log(response.data);
               if(response.status===200) {
                  localStorage.setItem('loginstatus',true)
                   localStorage.setItem('userId',response.data.user_id)
                  localStorage.setItem('token',response.data.token)
                   window.location.href='/ProfilePage';
               } else {
                seterrorMsg('Invalid Email or Password');
               }
            })
            .catch(err => {
                seterrorMsg('Somthing wrong , try with another email');

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
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!formValues.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format!";
        }
        if (!formValues.password) {
            errors.passowrd = "password is required!";
        } else if (values.password.length < 4) {
            errors.passowrd = "password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.passowrd = "password cannot exceed more than 10 characters";
        }
        return errors;

    }


    return (
        <>
            <div className='container-lg text-center'>
                <div className='LoginPage'>
                    <div className='LoginForm'>
                    {errorMsg && <p className="alert alert-danger" role="alert">{errorMsg}</p>}
                        <Form onSubmit={handleSubmit}>
                            <h1> Login to <span> Go Courses </span> </h1>
                            <div className='FormStyle'>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        data-testid="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <p className='errorM'> {formErrors.email} </p>
                            </div>
                            <div className='FormStyle'>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        data-testid="password"
                                        name="password"
                                        placeholder="password"
                                        value={formValues.passowrd}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <p data-testid="error-msg" className='errorM'>  {formErrors.passowrd}</p>
                            </div>
                            <Button onClick={submitForm} blocksize="lg" variant="warning" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p> Doesn't have an account ?</p>
                        <p><Link to={"/SignupPage"}> Click here</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
