import React,{useContext} from 'react'
import Application from '../Components/User/Application'
import Header from '../Components/User/Header'
import HomeContent from '../Components/User/HomeContent'
import Success from '../Components/User/Success'
import { UserContext } from '../Store/UserContext'

function Home() {
const {userDetails}=useContext(UserContext)
  return (
    <>
    <Header/>
   {userDetails? (userDetails.isRegistered? <Success/> :<Application/>) : <HomeContent/>} 
    </>
  )
}

export default Home