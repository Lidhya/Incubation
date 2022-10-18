import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function RecordList() {
    const [errorMessage, setErrorMessage] = useState('')
  const [forms, setForms] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:4000/admin/approved').then((response) => {
        if (response.data) {
          setForms(response.data.data)
        } else {
          setErrorMessage('Something went wrong')
        }
      }).catch((err) => {
        console.log(err);
        setErrorMessage('Something went wrong')
      })
    },[])
    
  return (
            <section className='mt-24'>
                <div className="flex justify-center flex-col items-center">

                    <div className="p-3 mt-3 mb-5 " >
                    <h4 className=" text-start text-xl text-purple-600 font-bold uppercase">Records<span className='text-white'> Track</span> </h4>
                        <Table className=" text-sm text-left text-gray-500 dark:text-gray-400 " >
                            <Thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <Tr>
                                    <Th scope="col" className='py-3 px-7'>S.no</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Name</Th>
                                    <Th scope="col" className='py-3 px-7'>Company Details</Th>
                                    <Th scope="col" className='py-3 px-7'>Registration approved</Th>
                                    <Th scope="col" className='py-3 px-7'>Under process</Th>
                                    <Th scope="col" className='py-3 px-7'>Approved</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {forms.map((element,index)=>{
                                  return  <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>{index+1}</Td>
                                    <Td className='py-3 px-7'>{element.company_name}</Td>
                                    <Td className='py-3 px-7'>Products and services: {element.company_and_products}</Td>
                                    <Td colSpan='3' className='py-3 px-7'>
                                    
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    {element.isBooked? <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"  style={{width:'100%'}}>Approved</div>:
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"  style={{width:'60%'}}>Under process</div> }
                                     </div>
                                    </Td>
                                </Tr>
                                })}
                                
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </section>
  )
}

export default RecordList