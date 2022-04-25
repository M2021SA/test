import React, { Fragment } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Profile/Profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const baseUrl = "http://127.0.0.1:8000/api";

const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)

export default function AllChapter() {
    const [chapterData, setChapterData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { course_id } = useParams()




    // fetch course when page load 
    useEffect(() => {
        try {
            axios.get(baseUrl + '/coursedetails/' + course_id  ,
            {
                headers: {
                    'Authorization': `Token ${token}`
                  }
            }
              
            
            ).then((response) => {

                setTotalResult(response.data.length);
                setChapterData(response.data);

            });
        } catch (error) {
            console.log(error);

        }
    }, [])
    // Delete data
    const Swal = require('sweetalert2');
    const handelDeleteClick = (coursedetails_id) => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete this video',
            icon: 'warning',
            confirmButtonText: 'Conitnue',
            showCancelButton: true,
          }).then((result)=>{
              if(result.isConfirmed){
                  try{
                      axios.delete(baseUrl + '/details/' + coursedetails_id,
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
                      Swal.fire('error ','Data has not been deleted !!');
                  }
              } else{
                Swal.fire('error ','Data has not been deleted !!');
              }
        })
     }
    return (
        <Fragment>
            <div className='Pro-bg'>
                <Container className='mt-4'>
                    <Row>
                        <aside className='col-md-3'>
                            <Sidebar />

                        </aside>
                        <section className='col-md-9' >
                            <div className='card'>
                                <h5 className='card-header' > All Course Details ({totalResult}) <Link to={'/AddChapterPage/' +course_id}><Button blocksize="lg" variant="success" type="button" className='float-end' ><i className="bi bi-plus-square-fill"></i> </Button> </Link> </h5>
                                <div className='card-body'>
                                    <table className='table table-bordered' >
                                        <thead>
                                            <tr>
                                                <th> Title</th>
                                                <th> Description </th>
                                              
                                                <th> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chapterData.map((coursedetails, index) =>
                                                <tr key={index}>
                                                    <td> <Link to={'/EditChapter/'+coursedetails.id}>{coursedetails.title}</Link></td>
                                                    <td> {coursedetails.description} </td>
                                                    
                                                            <td>
                                                                
                                                                <Link to={'/EditChapterPage/'+coursedetails.id} className='btn btn-success btn btn-success active'> <i className="bi bi-pencil-square"></i></Link>
                                                                <Button
                                                                onClick={()=> handelDeleteClick(coursedetails.id)}
                                                                 className='btn btn-danger btn btn-danger active'>
                                                                      <i className="bi bi-trash3"></i>
                                                                    
                                                                      </Button>

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
