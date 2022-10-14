import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../Store/UserContext'

function Header() {
  const {userDetails,setUserDetails,removeCookie}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('user')
    setUserDetails(null); 
    removeCookie("jwt");
    navigate('/login');
  }

  return (
<nav className="fixed z-50 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-white w-screen top-0 p-3">
  <div className=" flex flex-wrap justify-between items-center">
    <div className='flex justify-evenly items-baseline'>
      <h1 className='font-bold text-xl mr-5'>INCUBATION</h1>
      {/* <p className='ml-2 text-gray-400'>Home</p>
      <p className='ml-2 text-gray-400'>Application</p> */}
      </div>
      {
      userDetails?
      <button onClick={handleLogout} className='text-white px-4 py-1 mr-2 text-lg font-bold rounded-md  bg-blue-500'>Logout</button>:
      <button onClick={()=>navigate('/login')} className='text-white px-4 py-1 text-lg font-bold rounded-md  bg-blue-500'>Login</button>
      } 
  </div>
</nav>


  )
}

export default Header