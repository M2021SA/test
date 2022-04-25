import React, {Fragment } from 'react'
import '../CoursesCard/CoursesCard.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api";
const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)

export default function Django (){

  const [courseData , setCourseData ] = useState([]);
 // fetch course when page load 
useEffect(() =>{
  try{
      axios.get(baseUrl+'/course/?result=Django ',
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
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
            {courseData && courseData.map((course)=>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3 ms-5' key={course.id}>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={course.image} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                        {course.brief}
                        </Card.Text>
                      </div>
                      <div className="flex-item">
                        <Link to={'/detail/' +course.id}><Button variant="warning">Start learning </Button>  </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
