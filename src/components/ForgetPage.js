import axios from 'axios'
import React, { useState } from 'react'

const ForgetPage = () => {

    const [email,setEmail] = useState({
        email:''
    })

    const handleChange = (e) => {
        setEmail(prev => ({
            [e.target.name]:e.target.value
        }))
    }

    const sendMail = async() => {
        let res = await axios.post('https://examination.onrender.com/users/ForgotPassword',email);
        console.log('res in forget page', res)
    }

  return (
    <div>

        <label htmlFor="email">Email:</label>
        <input type="email" name='email' id='email' onChange={handleChange}/>

        <button onClick={sendMail}>Send Mail</button>
    </div>
  )
}

export default ForgetPage