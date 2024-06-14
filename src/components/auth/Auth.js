import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Auth = ({role}) => {

  const navigate = useNavigate();

  console.log('role', role)

  let userRole = localStorage.getItem('role');
  console.log(userRole,'userRole')

  if(!userRole){
    return <Navigate to={'/login'}/>
  }


  return (
    <div>
      <p>Auth</p>
      <div>
        {
          role.includes(userRole) && <Outlet />
        }
        
      </div>
    </div>
  )
}

export default Auth