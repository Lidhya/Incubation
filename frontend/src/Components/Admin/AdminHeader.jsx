import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../../Store/UserContext'


function AdminHeader() {
  const navigate=useNavigate()
  const {setAdminDetails,removeCookie}=useContext(UserContext)


  const handleClick=()=>{
    document.getElementById('navbar-default').classList.toggle('hidden')
  }

  const handleLogout=()=>{
    localStorage.removeItem('admin')
    setAdminDetails(null); 
    removeCookie("jwt");
    navigate('/admin/login');
  }

  return (
    
<nav className="bg-white w-full fixed top-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">INCUBATION ADMIN</span>
    </a>
    <button data-collapse-toggle="navbar-default" onClick={handleClick} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col items-center p-2 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/admin" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-gray-400" aria-current="page">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/records" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Record Track</Link>
        </li>
        <li>
          <Link to="/admin/booking" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Slot Booking</Link>
        </li>
        <li>
          <Link to="/admin/users" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
        </li>
        <li>
          <p  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-regular fa-bell"></i></p>
        </li>
        <li>
          <button onClick={handleLogout} className="text-white px-2 py-1 text-lg font-semibold rounded-md  hover:bg-blue-700 bg-blue-500">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default AdminHeader