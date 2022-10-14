import React,{useContext, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { UserContext } from '../Store/UserContext'
import Signup from '../Components/User/Signup'

function SignupPage() {
  const navigate=useNavigate()
  const {userDetails}=useContext(UserContext)

  useEffect(()=>{
    if(userDetails){
        navigate('/')
    }
},[])

  return (
   <>
   <Signup/>
   </>
  )
}

export default SignupPage