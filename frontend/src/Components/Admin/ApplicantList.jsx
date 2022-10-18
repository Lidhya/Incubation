import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import Modal from 'react-modal'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { ApplicationContext } from '../../Store/ApplicatonContext';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40rem',
        height: '36rem',
        backgroundColor: '#CECECE',
        border: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
};

function ApplicantList() {
    Modal.setAppElement('#root')
    const [modal, setModal] = useState(false)
    const { applications, setApplications } = useContext(ApplicationContext)
    const [forms, setForms]=useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [modalItem, setModalItem] = useState({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:4000/admin/applications').then((response) => {
            if (response.data) {
                const { data } = response
                setApplications(data)
                setForms(data)
            } else {
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            console.log(err);
            setErrorMessage('Something went wrong')
        })
    }, [status])

    function handlePending(item, e) {
        e.preventDefault()
        Axios.get(`http://localhost:4000/admin/pending/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }

        }).catch((err) => {
            setErrorMessage(err)

        })
    }

    function handleApprove(item){
        Axios.get(`http://localhost:4000/admin/approve/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            setErrorMessage(err)

        })
    }

    function handleDeclined(item){
        Axios.get(`http://localhost:4000/admin/decline/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            setErrorMessage(err)

        })
    }

    function openModal(item) {
        setModalItem(item)
        setModal(true)
    }


    return (
        <div>
            <Modal isOpen={modal} onRequestClose={() => { setModal(false) }} style={customStyles}>
                <p className='text-end'><i onClick={() => { setModal(false) }} className="fa-solid fa-x  "></i></p>
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Details of {modalItem.company_name}</label>
                <div className='flex flex-col justify-start border-gray-400'>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Customer Name: </p>
                        <p>-  {modalItem.name} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Email: </p>
                        <p>-  {modalItem.email} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Phone: </p>
                        <p>- {modalItem.phone} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Place: </p>
                        <p>- {modalItem.city}, {modalItem.state} </p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Team and background: </p>
                        <p>- {modalItem.team_and_bg}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Company and products: </p>
                        <p>- {modalItem.company_and_products}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Problem to be solved: </p>
                        <p>- {modalItem.problem}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Unique solution: </p>
                        <p>- {modalItem.solution}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Value proposition: </p>
                        <p>- {modalItem.value_proposition}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Competitors and advantage: </p>
                        <p>- {modalItem.competitive_advantage}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Revenue model: </p>
                        <p>- {modalItem.revenue_model}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Market size of the product: </p>
                        <p>- {modalItem.market_size}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Plan for marketing: </p>
                        <p>- {modalItem.market_plan}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Type of Incubation needed: </p>
                        <p>- {modalItem.incubation_type}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Bussiness proposal: </p>
                        <p>- {modalItem.proposal}</p>
                    </div>
                </div>
            </Modal>
            <section className='mt-24'>
                <div className="flex justify-center flex-col items-center">
                    {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}
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
                                { 
                                forms.map((obj, index) => {
                                    if(!obj.isPending){
                                    return <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={obj._id}>
                                        <Td className='py-3 px-7'>{index + 1}</Td>
                                        <Td className='py-3 px-7'>{obj.company_name}</Td>
                                        <Td className='py-3 px-7'>Products and services: {obj.company_and_products}</Td>
                                        <Td className='py-3 px-7'><button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={() => openModal(obj)}>Open</button></Td>
                                        <Td className='py-3 px-7'>
                                            <button onClick={(e) => handlePending(obj, e)} className="px-2 py-1 text-white font-medium rounded bg-yellow-500" >Pending</button>
                                        </Td>
                                    </Tr> }
                                    })                                             
                                        // return   <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        //        <Td colSpan="6" className="text-center py-3 px-7">No data available</Td>
                                        //    </Tr>                               
                                }

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
                               { forms.map((obj, index) => {
                                    if(obj.isPending){               
                                 return  ( <Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={obj._id}>
                                        <Td className='py-3 px-7'>{index + 1}</Td>
                                        <Td className='py-3 px-7'>{obj.company_name}</Td>
                                        <Td className='py-3 px-7'>Products and services: {obj.company_and_products}</Td>
                                        <Td className='py-3 px-7'><button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={() => { openModal(obj) }}>Open</button></Td>
                                      {obj.isDeclined? <Td className='py-3 px-7 '><p className=' text-red-500  rounded px-2 py-1'>DECLINED</p></Td> :(obj.isApproved?
                                      <Td className='py-3 px-7 '><p className=' text-green-500 rounded px-2 py-1'> Approved</p></Td>:
                                      <Td className='py-3 px-7 '><button onClick={()=>{handleApprove(obj)}} className='border-green-100 border rounded px-2 py-1'> Approve</button></Td>
                                      )}
                                      
                                      {obj.isDeclined? <Td className='py-3 px-7 '><p  className='  text-red-500 rounded px-2 py-1'> DECLINED</p></Td>:
                                      (obj.isApproved? <Td className='py-3 px-7 '><p className=' text-green-500 rounded px-2 py-1'> Approved</p></Td>:
                                      <Td className='py-3 px-7'><button onClick={()=>{handleDeclined(obj)}} className="px-2 py-1 text-white font-medium rounded bg-red-600" >Decline</button></Td>                           
                                      )
                                      } 
                                    </Tr>)
                               
                                }
                                // else{
                                //     return  (<Tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                //         <Td colSpan="6" className="text-center py-3 px-7">No data available</Td>
                                //     </Tr>)
                                // }
                                    })
                                     }
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApplicantList