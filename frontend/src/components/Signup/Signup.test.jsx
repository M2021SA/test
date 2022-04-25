import {render, screen , fireEvent, waitFor, getByTestId} from '@testing-library/react'
import Signup from './Signup'

describe('Login', () => {
test('test email input' , async() => {
  render(<Signup/>)
//   screen.debug()
  screen.getByTestId('email')
//   await waitFor(() => fireEvent.)
fireEvent.change(screen.getByTestId('email'), {target: {value: 'aml@gmail.com'}})
expect(screen.getByTestId('email')).toHaveAttribute('value', 'aml@gmail.com')


});

test('test the password' , async() => {
  render(<Signup/>)
  const passwordField = screen.getByTestId("password");
  expect(passwordField).toBeInTheDocument();
});


test('test the button' , async() => {
  render(<Signup/>)
  expect(screen.getByRole('button')).toBeEnabled()
});




})