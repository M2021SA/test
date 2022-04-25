 import React from 'react'
 
 export default function Logout() {
  localStorage.removeItem('formValuesStauts')
  localStorage.removeItem('userId')
  localStorage.removeItem('token')
  
  localStorage.removeItem('loginstatus')
    
    window.location.href='/LoginPage';
   return (
     <div>
     
    
     </div>
   )
 }
 