import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const NewPassword = () => {

    const [newPassword,setNewPassword] = useState({
        Password:'',
        ConfirmPassword:''
    })

    const [searchParams,setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        setNewPassword(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    let token = searchParams.get('token');
    const axiosInstance = axios.create({
        baseURL: 'https://examination.onrender.com/users/ForgotPassword/Verify', // Base URL for all requests
        params: {
            token:token
          }
      });

    

    const changePassword = async() => {

        let url = window.location.href;
        console.log('url', url)

        let res = await axiosInstance.post(`?token=${token}`,newPassword)
        console.log('reasponse from forget pass', res)
    }




  return (
    <div>

        <label htmlFor="Password">Password:</label>
        <input type="password" name='Password' id='Password' onChange={handleChange} className='border border-black'/>

        <label htmlFor="ConfirmPassword">Conform Password:</label>
        <input type="password" name='ConfirmPassword' id='ConfirmPassword' onChange={handleChange} className='border border-black'/>

        <button onClick={changePassword}>Change Pass</button>
    </div>
  )
}

export default NewPassword