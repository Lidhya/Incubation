import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../Components/Admin/AdminHeader'
import Users from '../Components/Admin/Users'
import { UserContext } from '../Store/UserContext'

function UsersAdmin() {
  const {adminDetails}=useContext(UserContext)
  const navigate=useNavigate()

useEffect(() => {
  if(adminDetails){
    navigate('/admin/users')
  }else{
    navigate('/admin/login')
  }
}, [])

  return (
    <>
    <AdminHeader/>
    <Users/>
    </>
  )
}

export default UsersAdmin