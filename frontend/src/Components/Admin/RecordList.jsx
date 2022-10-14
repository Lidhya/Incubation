import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function RecordList() {
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
                                    <Th scope="col" className='py-3 px-7'>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjksgs</Td>
                                    <Td className='py-3 px-7'>dfghjsdfgfdszxcvmnbksgs</Td>
                                    <Td className='py-3 px-7'>
                                    <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/6"> 50%</div>
  </div>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </section>
  )
}

export default RecordList