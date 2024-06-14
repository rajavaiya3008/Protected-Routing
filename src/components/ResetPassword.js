import axios from 'axios'
import React, { useState } from 'react'

const ResetPassword = () => {

  let [password,setPassword] = useState({
    oldPassword:'',
    Password:'',
    ConfirmPassword:''
  })

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamEudGFnbGluZUBnbWFpbC5jb20iLCJfaWQiOiI2NjZiZWE0YWJhZDVmNjAwNDU2YzFiYzUiLCJpYXQiOjE3MTgzNTQ5NDEsImV4cCI6MTcxODM1ODU0MX0.3eBg1MqoIEGfyfZsx8DvVLjRWtY1bKnikiQ_uoWiRHc'
  const axiosInstance = axios.create({
    baseURL: 'https://examination.onrender.com', // Base URL for all requests
    headers: {
      'access-token': token
    }
  });
  
  const changePassword = async () => {
    try {
      const response = await axiosInstance.post('/users/ResetPassword', password);
      console.log('Response in reset password:', response);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  const changeHandle = (e) => {
    setPassword(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }


  // const changePassword = async() => {
  //   const res = await axios.post('https://examination.onrender.com/users/ResetPassword',{password},{
  //   headers: {
  //     'access-token': token
  //   }
  //   })
  //   console.log('res in reset pass', res)
  // }


  return (
    <div className='flex flex-col'>
      <p>ResetPassword</p>

      <label htmlFor="oldPassword">Old Pass:</label>
      <input type="password" name='oldPassword' id='oldPassword' onChange={changeHandle} className='border border-black'/>
      <label htmlFor="Password">New password:</label>
      <input type="password" name='Password' id='Password' onChange={changeHandle} className='border border-black'/>
      <label htmlFor="ConfirmPassword">Confirm new password:</label>
      <input type="password" name='ConfirmPassword' id='ConfirmPassword' onChange={changeHandle} className='border border-black'/>

      <button onClick={changePassword}>Submit Password</button>
    </div>
  )
}

export default ResetPassword;