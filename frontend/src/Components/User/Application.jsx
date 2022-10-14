import React,{useContext} from 'react'
import { UserContext } from '../../Store/UserContext'


function Application() {
  const {userDetails}=useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()
    
  }
  console.log(userDetails);
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center mt-20 mb-10 '>
      <h1 className='text-3xl text-purple-600 font-bold'>Welcome <span className='text-white'>{userDetails}</span></h1>
      <h3 className='text-xl'>Fill the below form to register your company</h3>
    </div>
    <div className=' flex justify-center my-8'>      
<form className='w-3/5'>

<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative mb-6 w-full group">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input type="text" id="name" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required=""/>
  </div>
  <div className="relative mb-6 w-full group">
    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
    <input type="text" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="address" required=""/>
  </div>
    <div className="relative mb-6 w-full group">
    <label for="City" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
    <input type="text" id="city" name='city' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="city" required=""/>
  </div>
  <div className="relative mb-6 w-full group">
    <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
    <input type="text" id="state" name='state' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="state" required=""/>
  </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative mb-6 w-full group">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
    <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email address" required=""/>
  </div>
    <div className="relative mb-6 w-full group">
    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone no.</label>
    <input type="tel" id="phone" name='phone' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="phone" required=""/>
  </div>
  <div className="relative mb-6 w-full group">
    <label for="company name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
    <input type="text" id="company_name" name='company_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="company name" required=""/>
  </div>
  <div className="relative mb-6 w-full group">
    <img src="" alt="" />
    <input type="file" id="company_logo" name='company_logo' className="shadow-sm border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company logo" required=""/>
  </div>
  </div>

  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe your team and backgroung</label>
    <input type="text" id="team_and_bg" name='team_and_bg' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe your company and products</label>
    <input type="text" id="company_and_products" name='company_and_products' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the problem your are trying to solve</label>
    <input type="text" id="problem" name='problem' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is unique about your solution?</label>
    <input type="text" id="solution" name='solution' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your value proposition for the customer?</label>
    <input type="text" id="value_proposition" name='value_proposition' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Who are your competitors and what is your competative advantage?</label>
    <input type="text" id="competitive_advantage" name='competitive_advantage' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Explain your revenue model</label>
    <input type="text" id="revenue_model" name='revenue_model' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is the potential market size of the product</label>
    <input type="text" id="market_size" name='market_size' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How do you market or plan to market your products and services?</label>
    <input type="text" id="market_plan" name='market_plan' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
 
  {/* radio */}
  <div className="mb-6">
  <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type of Incubation needed</label>
  <div className="flex items-center mb-4 ml-2">
    <input id="default-radio-1" type="radio" value="physical" name="incubation_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
</div>
<div className="flex items-center ml-2">
    <input id="default-radio-2" type="radio" value="virtual" name="incubation_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Virtual Incubation</label>
</div>
  </div>

  <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload a detailed bussiness proposal</label>
    <input type="text" id="proposal" name='proposal' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
  <button onClick={(e)=>handleSubmit(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>

    </div>
    </>
  )
}

export default Application