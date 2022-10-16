import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import Modal from 'react-modal'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'30rem',
    height:'20rem',
      backgroundColor:'#CECECE',
      border:'none'
    },
    overlay:{
      backgroundColor:'rgba(255,255,255,0.2)',
    },
  };

function ApplicantList() {
    Modal.setAppElement('#root')
    const [modal,setModal]=useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(()=>{
        Axios.get('http://localhost:4000/admin/applications').then((response)=>{
            if(response.data)
            {

            }else{
                setErrorMessage('Something went wrong')
            }
        })
    })


    return (
        <div>
             <Modal  isOpen={modal} onRequestClose={()=>{setModal(false)}}  style={customStyles}>
  <p className='text-end'><i onClick={()=>{setModal(false)}} className="fa-solid fa-x  "></i></p>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Select a company</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a company</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    </Modal>
            <section className='mt-24'>
                <div className="flex justify-center flex-col items-center">
                    <div className="p-3 mt-3 mb-5 " >
                        <h4 className=" text-start text-xl text-purple-600 font-bold uppercase">new <span className='text-white'>applicant list</span> </h4>
                        <Table className=" text-sm text-left text-gray-500 dark:text-gray-400 " >
                            <Thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <Tr>
                                    <Th scope="col" className='py-3 px-7'>S.no</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Name</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Details</Th>
                                    <Th scope="col" className='py-3 px-7'></Th>
                                    <Th scope="col" className='py-3 px-7'></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'><button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={()=>{setModal(true)}}>Open</button></Td>
                                    <Td className='py-3 px-7'>
                                        <button className="px-2 py-1 text-white font-medium rounded bg-yellow-500" >Pending</button>
                                    </Td>
                                </Tr>
                                <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'><button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={()=>{setModal(true)}}>Open</button></Td>
                                    <Td className='py-3 px-7'>
                                        <button className="px-2 py-1 text-white font-medium rounded bg-yellow-500" >Pending</button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>

                    <div className="p-3 mt-3 mb-5 " >
                    <h4 className=" text-start text-xl text-purple-600 font-bold uppercase">Pending <span className='text-white'>applicant list</span> </h4>
                        <Table className=" text-sm text-left text-gray-500 dark:text-gray-400 " >
                            <Thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <Tr>
                                    <Th scope="col" className='py-3 px-7'>S.no</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Name</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Details</Th>
                                    <Th scope="col" className='py-3 px-7'></Th>
                                    <Th scope="col" className='py-3 px-7'></Th>
                                    <Th scope="col" className='py-3 px-7'></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjsdfgfdszxcvmnbksgs</Td>
                                    <Td className='py-3 px-7'><button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={()=>{setModal(true)}}>Open</button></Td>
                                    <Td className='py-3 px-7 '><p className='border-green-100 border rounded px-2 py-1'> Approve</p></Td>
                                    <Td className='py-3 px-7'>
                                        <button className="px-2 py-1 text-white font-medium rounded bg-red-600" >Decline</button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApplicantList