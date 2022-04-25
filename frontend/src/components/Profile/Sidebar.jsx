
import React from 'react'
import { ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../Profile/Profile.css'

export default function Sidebar() {
  return (


    
        
                        <div className='card'>
                            <h5 className='card-header textlink' > Profile</h5>
                            <ListGroup as="ul" variant="flush" >
                                
                                <ListGroup.Item as={Link} to='/MyCoursespage' className='textli'> My Courses </ListGroup.Item>
                                <ListGroup.Item as={Link} to='/AddCoursePage' className='textli'> Add Course </ListGroup.Item>
                               
                                <ListGroup.Item as={Link}  to='/ProfileSettingPage' className='textli'> 
                                    Profile Setting 
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to='/Logout' className='textli'> Logout</ListGroup.Item>
                            </ListGroup>
                         </div>

    )
}

    
  
