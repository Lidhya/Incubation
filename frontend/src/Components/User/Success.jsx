import React from 'react'

function Success() {
    return (
        <div className='flex flex-col text-white h-screen justify-center items-center'>
          <h1 className='text-3xl text-purple-600 font-bold'>Application Submitted</h1>
          <h3 className='text-xl'>Your application for Incubation is under process</h3>
          <p>status : <span className='text-green-400'>submitted</span> </p>
        </div>
      )
}

export default Success