import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = ({IsLogin,setIsLogin}) => {

    const navigate = useNavigate();

    const logoutHandle = () => {
        localStorage.removeItem('role');
        setIsLogin(false);
        navigate('/');
    }

  return (
    <div>
        <nav className='border bg-green-200 h-[40px]'>
            <ul className='flex mt-2 justify-center items-center gap-5'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>

                {/* <Link to={'/cart'}><li>Cart</li></Link> */}

                {
                    IsLogin ? 
                        (<li onClick={logoutHandle}>Logout</li>) :
                            (<Link to={'/login'}><li>Login</li></Link>)
                }
            </ul>
        </nav>
    </div>
  )
}

export default Header