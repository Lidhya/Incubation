import React,{useContext, useEffect} from 'react'
import Login from '../Components/User/Login'
import { useNavigate} from 'react-router-dom'
import { UserContext } from '../Store/UserContext'


function LoginPage() {
  const navigate=useNavigate()
  const {userDetails}=useContext(UserContext)

  useEffect(()=>{
    if(userDetails){
        navigate('/')
    }
},[])

  return (
   <>
   <Login />
   </>
  )
}

export default LoginPage