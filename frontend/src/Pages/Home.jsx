import React,{useContext} from 'react'
import Application from '../Components/User/Application'
import Header from '../Components/User/Header'
import HomeContent from '../Components/User/HomeContent'
import { UserContext } from '../Store/UserContext'

function Home() {
const {userDetails}=useContext(UserContext)
  return (
    <>
    <Header/>
   {userDetails? <Application/>: <HomeContent/>} 
    </>
  )
}

export default Home