import {render, screen , fireEvent, waitFor, getByTestId} from '@testing-library/react'
import Contactus from './Contactus'

describe('Contactus', () => {
test('test name input' , async() => {
  render(<Contactus/>)
//   screen.debug()
  screen.getByTestId('name')
  
});
test('test email input' , async() => {
    render(<Contactus/>)
  //   screen.debug()
    screen.getByTestId('email')
    
  });

  test('test message input' , async() => {
    render(<Contactus/>)
  //   screen.debug()
    screen.getByTestId('message')
    
  });
  
  test('test message input' , async() => {
    render(<Contactus/>)
  //   screen.debug()
    screen.getByTestId('message')
    expect(screen.getByRole('button')).toBeEnabled()

});

})