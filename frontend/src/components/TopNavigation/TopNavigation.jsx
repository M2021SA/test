
import React, { Fragment } from 'react'
import { Container, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import '../TopNavigation/TopNavigation.css'
import { NavLink ,Link} from 'react-router-dom'
import logo from '../../asset/images/isLogo.png'

export default function TopNavigation() {

  const formValuesStauts=localStorage.getItem('loginstatus');

  
    return (
      <Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className='px-2'>
            <Navbar.Brand to="#home" ><img  className="logo" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavLink to="/" className="active">Home</NavLink>
                <NavLink to="/AboutPage" className="active">About</NavLink>
                <NavLink  to="/OurPathsPage" className="active">Paths</NavLink>
                <NavDropdown  className='drobStyle' title="Courses" id="collasible-nav-dropdown" style={{ marginLeft: "7px" }}>
                  <NavDropdown.Item as={Link} to="/HTMLpage">HTML</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/CSSpage">CSS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/JavaScriptpage">JavaScript </NavDropdown.Item>
                  <NavDropdown.Item  as={Link} to="/PythonPage">Python</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/DjangoPage">Django</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/NginxPage" >Nginx </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/DockerPage">Docker </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/KubernetesPage">Kubernetes </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/JenKinsPage" >JenKins</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AnsiblePage">Ansible </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AllCoursesPage">All Courses </NavDropdown.Item>
                </NavDropdown>
                <NavLink as={Link} to="/ContactusPage" className="active">Contact</NavLink>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  </Form.Group>
                </Form>
                <NavDropdown className='drobStyle' title="User" id="collasible-nav-dropdown" style={{ marginLeft: "7px" }}>
                {formValuesStauts!=='true' &&
                  <>
                <NavDropdown.Item as={Link} to="/LoginPage">Login </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/SignupPage">Signup</NavDropdown.Item>
                  </> }
                  {formValuesStauts==='true' &&
                  <>
                  <NavDropdown.Item as={Link} to="/ProfilePage">Profile </NavDropdown.Item>
                </>}
                  <NavDropdown.Item as={Link}to="/Logout">Logout </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }



