import {render, screen , fireEvent, waitFor, getByTestId} from '@testing-library/react'
import Login from './Login'
import { MemoryRouter as Router } from 'react-router-dom';
describe('Login', () => {

  test('tees the Login sentince ' , async() => {
    render(
      <Router>
       <Login/>
    </Router>)
  //   screen.debug()
    screen.getByRole('heading', { name: /Login to Go Courses/i })
  
  
  
  });


    test('test email input' , async() => {
      render(
        <Router>
         <Login/>)
      </Router>)
    //   screen.debug()
      screen.getByTestId('email')
    //   await waitFor(() => fireEvent.)
    fireEvent.change(screen.getByTestId('email'), {target: {value: 'aml@gmail.com'}})
    expect(screen.getByTestId('email')).toHaveAttribute('value', 'aml@gmail.com')
    
    
    });
    
    test('test the password' , async() => {
      render(
      
        <Router>
         <Login/>)
      </Router>
     )
      const passwordField = screen.getByTestId("password");
      expect(passwordField).toBeInTheDocument();
    });
     

    test('test the button' , async() => {
      render(
        <Router>
         <Login/>)
      </Router>)
      expect(screen.getByRole('button')).toBeEnabled()
    });
})