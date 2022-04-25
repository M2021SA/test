import {render, screen , fireEvent, waitFor, getByTestId} from '@testing-library/react'
import TopBanner from './TopBanner'
import { MemoryRouter as Router } from 'react-router-dom';
describe('Top Banner ', () => {

  test('Test the welcome page rendering' , async() => {
    render(
        <Router>
        <TopBanner/>
     </Router>)
    
  //   screen.debug()
    screen.getByRole('heading', { name: /Not sure where to look ?/i })

  });
  test('Test the welcome page rendering' , async() => {
    render(
        <Router>
        <TopBanner/>
     </Router>)
    
  //   screen.debug()
    screen.getByRole('heading', { name: /Go courses is your way/i })

  });

  test('Test the welcome page rendering' , async() => {
    render(
        <Router>
        <TopBanner/>
     </Router>)
    
  //   screen.debug()
    screen.getByText("its ok if you feel lost, we are here to help you find your way and learn fast & easy!")
  });





    test('test the get started button' , async() => {
      render(
        <Router>
         <TopBanner/>
      </Router>)
      expect(screen.getByTestId('getStarted')).toBeEnabled()
    });
    
    test('test the get Login button' , async() => {
        render(
          <Router>
           <TopBanner/>
        </Router>)
        expect(screen.getByTestId('login')).toBeEnabled()
      });
    
})
