import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function Users() {
    const [users,setUsers]=useState([])
    const [status,setStatus]=useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(()=>{
        Axios.get('http://localhost:4000/admin/users').then(({data})=>{
             if(data.users){
            setUsers(data.users)
        }else{
            setErrorMessage(data.err)
        }
        }) 
    },[status])

    function handleBlock(userId){
        Axios.get(`http://localhost:4000/admin/block/${userId}`).then(({data})=>{
            if(data.users){
           setStatus(data.users)
           console.log(data.users);
       }else{
           setErrorMessage(data.err)
       }
       }) 
    }

    function handleUnblock(userId){
        Axios.get(`http://localhost:4000/admin/unblock/${userId}`).then(({data})=>{
            if(data.users){
          setStatus(data.users)
       }else{
           setErrorMessage(data.err)
       }
       }) 
    }

  return (
    <section className='mt-24'>

                <div className="flex justify-center flex-col items-center">
                    <div className="p-3 mt-3 mb-5 " >
       {errorMessage && <div className="p-4 mb-4 text-sm text-center text-red-800 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}

                    <h4 className=" text-start text-xl text-purple-600 font-bold uppercase">Users<span className='text-white'> detail</span> </h4>
                        <Table className=" text-sm text-left text-gray-500 dark:text-gray-400 " >
                            <Thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <Tr>
                                    <Th scope="col" className='py-3 px-7'>S.no</Th>
                                    <Th scope="col" className='py-3 px-7'>Name</Th>
                                    <Th scope="col" className='py-3 px-7'>Email Address</Th>
                                    <Th scope="col" className='py-3 px-7'>Phone</Th>
                                    <Th scope="col" className='py-3 px-7'>Registration</Th>
                                    <Th scope="col" className='py-3 px-7'>Options</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users &&
                                    users.map((user,index)=>{
                                 return   <Tr key={user._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>{index+1}</Td>
                                    <Td className='py-3 px-7'>{user.name}</Td>
                                    <Td className='py-3 px-7'>{user.email}</Td>
                                    <Td className='py-3 px-7'>{user.phone}</Td>
                                    <Td className='py-3 px-7'>{user.isRegistered? 'Registered':'Not registered'}</Td>
                                    <Td className='py-3 px-7'>
        {/* <Link to="/admin/edit-user" className="m-1"><i className="fa-regular fa-xl fa-pen-to-square"></i></Link> */}
       {user.isBlocked? 
        <button onClick={()=>handleUnblock(user._id)}  className="py-1 px-2 bg-green-600 rounded text-white m-1" >Unblock</button> :
       <button onClick={()=>handleBlock(user._id)}  className="py-1 px-2 bg-red-600 rounded text-white m-1" >Block</button>
       }
                                    </Td>
                                </Tr>
                                    })
                                }
                               
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </section>
  )
}

export default Users