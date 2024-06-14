import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {

    const [loginData,setLoginData] = useState({
        email:'',
        password:''
    })

    const [setIsLogin] = useOutletContext();

    

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('loginData', loginData);

        const res = await axios.post('https://examination.onrender.com/users/Login',loginData);
        console.log('res', res)
        let userRole = res.data.data.role
        localStorage.setItem('role',userRole)
        setIsLogin(true);
        navigate(`/${userRole}`);


    }

  return (
    <div>

        <form className='border flex flex-col'>

            <label htmlFor="email">Enter email:</label>
            <input type="email" name="email" id="email" onChange={handleChange} className='border border-black'/>

            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' onChange={handleChange} className='border border-black'/>

            <Link to={'/forget'}>Forget password</Link>

            <button onClick={handleSubmit}>Submit</button>

        </form>

    </div>
  )
}

export default Login