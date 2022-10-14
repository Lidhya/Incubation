import React,{useState, useContext, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { UserContext } from '../../Store/UserContext'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const {setAdminDetails,adminDetails}=useContext(UserContext)
    const navigate=useNavigate()

    useEffect(() => {
      if(adminDetails){
        navigate('/admin')
      }
    }, [])
    

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
           if (!email) {
              setErrorMessage("Email is required");
          } else if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
              setErrorMessage("Enter a valid email");
          } else if (!password) {
              setErrorMessage("Password is required");
          } else if (password.length < 4) {
              setErrorMessage("Password must be atleast 4 characters");
          } else if (password.length > 20) {
              setErrorMessage("Password must be less than 20 characters");
          } else {
              const { data } = await Axios.post('http://localhost:4000/admin/login', {
                  email: email,
                  password: password
              });
              if (data) {
                  if (data?.admin) {
                    localStorage.setItem('admin', JSON.stringify(data.admin))
                    setAdminDetails(data.admin)
                      navigate("/admin");           
                  } else {
                      setErrorMessage(data)
                  }
              }else{
                  setErrorMessage('Something went wrong')
              }
          }
      } catch (error) {
          console.log(error.message);
      }
  }
  return (
    <div className='flex h-screen justify-center items-center '>
    <div className="p-4 w-full max-w-sm text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md sm:p-6 md:p-8 rounded-2xl mx-3">
    <form className="space-y-10" >
        <div className='flex items-baseline justify-between'>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Admin Login</h5>
        <i onClick={()=>navigate('/')} className="fa-solid fa-x"></i>
       </div> 
       {errorMessage && <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}
       <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>

        <button  onClick={(e) => handleSubmit(e)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
    </form>
</div>
</div>
  )
}

export default AdminLogin