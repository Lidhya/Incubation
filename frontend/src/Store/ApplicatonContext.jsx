import React,{Children, createContext, useState} from 'react'

export const ApplicationContext= createContext(null)

function Applicatons({children}) {
    const [applications, setApplication] = useState([])
  return (
    <ApplicationContext.Provider value={{applications, setApplication}}>
        {children}
    </ApplicationContext.Provider>
  )
}

export default Applicatons