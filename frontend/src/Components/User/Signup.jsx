import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'


function Signup() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name) {
                setErrorMessage("Name is required");
            } else if (name.length < 3) {
                setErrorMessage("Name must be atleast 3 characters");
            } else if (!name.match(/^[A-Za-z][A-Za-z ]*$/)) {
                setErrorMessage("Enter a valid name");
            } else if (!phone) {
                setErrorMessage("Phone is required");
            } else if (phone.match(/[^0-9]/g)) {
                setErrorMessage("Enter a valid Phone number");
            } else if (phone.length !== 10) {
                setErrorMessage("Phone must be 10 characters");
            } else if (!email) {
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
                const { data } = await Axios.post('http://localhost:4000/signup', {
                    name: name,
                    phone: phone,
                    email: email,
                    password: password
                });
                if (data) {
                    if (data?.user) {
                        navigate("/login");           
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
                <form className="space-y-6 " >

                    <div className='flex items-baseline justify-between'>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Account signup</h5>
                        <i onClick={() => navigate('/')} className="fa-solid fa-x"></i>
                    </div>
                    
                    {errorMessage && <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
                    
                    <div>
                        <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" required />
                    </div>
                    <div>
                        <label for="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="tel" name="phone" onChange={(e) => { setPhone(e.target.value) }} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your phone number" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <button onClick={(e) => handleSubmit(e)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-400">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup