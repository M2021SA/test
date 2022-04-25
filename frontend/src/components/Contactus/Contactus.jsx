import React, { Fragment } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import "../Contactus/Contactus.css"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactus () {
    const [disable, setDisable] = React.useState(false);

   // <ToastContainer theme="light" />
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e6w10vf', 'template_oyn0n1j', e.target, 'WwV0kIvbudQ0HTBPi')
      .then((result) => {
        
        console.log(result.data);
        if (result.status===200){
          
            toast.success("Thanks for your feedback , we will contact you soon");
            setDisable(false)
            }
            
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const isDisabled = (e) => {
      
    setDisable(false)
   
  }
        return (

            <Fragment>
                <div className='container-lg'>
                    <div className="Contactbg">
                        <div className="text-center row gx-5 justify-content-center">
                            <Row className='col-lg-8 col-xl-6"'>
                                <Col>
                                    <h4>GOT A QUESTION ?</h4>
                                    <h1>Contact <span> Go Courses</span></h1>
                                    <p>We are here to help you and answer any question you might have, we'd love to hear from you</p>
                                    <Form ref={form} onSubmit={sendEmail}>
                                        <Form.Group className='form-floating mb-3' >
                                            <Form.Control name='from_name' type="Text" data-testid="name" placeholder="Enter your Name " required
                                             />
                                            <Form.Label >Enter your name</Form.Label>
                                        </Form.Group>
                                        <Form.Group className='form-floating mb-3'>
                                            <Form.Control name='email' type="email" data-testid="email" placeholder="Enter your Email  " required
                                            
                                            />
                                            <Form.Label >Email address</Form.Label>
                                        </Form.Group>
                                        <FloatingLabel controlId="floatingTextarea" label="Write your message here" className="mb-3">
                                            <Form.Control name='message' className='textArea' as="textarea" placeholder="Leave a comment here" data-testid="message" required
                                             

                                            />
                                        </FloatingLabel>
                                        <Button  variant="warning" type="submit" disabled={disable} onSubmit={isDisabled} >
                                        <ToastContainer />
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }



