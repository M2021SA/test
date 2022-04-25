
import { Modal } from 'react-bootstrap'
import '../components/CoursesCard/CoursesCard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";
const token1 = JSON.stringify(localStorage.getItem('token'));
const token = JSON.parse(token1)


function Coursedetails() {
    const [courseData, setCourseData] = useState([]);
    const [chapterData, setChapterData] = useState([]);
    const [userData, setUserData] = useState([]);
    let { course_id } = useParams();
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  // fetch course when page load 
  useEffect(() => {
    try {
        axios.get(baseUrl + '/course/' + course_id  ,
        {
            headers: {
                'Authorization': `Token ${token}`
              }
        }
         
        
        ).then((response) => {

         
            setCourseData(response.data);
            setChapterData(response.data.course_chapters);
            setUserData(response.data.user);
            
           
         

        });
    } catch (error) {
        console.log(error);

    }
},[] )
    
   
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src={courseData.image} alt="" className='img-thumbnail' />
                </div>

                <div className='col-8'>
                    <h3> {courseData.name}</h3>
                    <p>{courseData.brief}</p>
                    <p className='fw-bold'> Created by   : 
                    {/* <a href='#'> */}
                          {userData.username}
                    {/* </a> */}
                     </p>
                    {/* <Link to="#"><Button data-testid="#" variant="warning"> Add to favourite</Button> </Link> */}
 

                </div>
            </div>
            {/*Course vedio */}
            <div className="card mt-4" >  {/*need styling */}
                <div className="card-header">
                    <h4>Course videos</h4>
                </div>
                <ul className="list-group list-group-flush">
                {chapterData.map((coursedetails, index) =>
                    <li key={index} className="list-group-item">{coursedetails.title} <button className=' btn-danger float-end' onClick={handleShow}><i className="bi bi-youtube "></i> </button>

                        {/*vedio modal start*/}

                        <Modal dialogClassName="my-modal" show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{coursedetails.title}</Modal.Title>

                            </Modal.Header>
                            <Modal.Body>
                                <div className="ratio ratio-16x9">
                                    <iframe width="560" height="315" src={coursedetails.video}
                                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>

                            </Modal.Footer>
                        </Modal>

                       
                        {/*vedio modal end*/}
                    </li>
                )}

               

                </ul>
            </div>
        </div >
    );
}

export default Coursedetails