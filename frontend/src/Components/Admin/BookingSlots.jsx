import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '17rem',
    height: '12rem',
    backgroundColor: '#CECECE',
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
};

function BookingSlots() {
  Modal.setAppElement('#root')
  const [modal, setModal] = useState(false)
  const A = [], B = [], C = [], D = [], E = [], F = []
  for (let i = 1; i <= 10; i++) {
    A.push({ slot: 'A' + i, isBooked: false })
    B.push({ slot: 'B' + i, isBooked: false })
    C.push({ slot: 'C' + i, isBooked: false })
    D.push({ slot: 'D' + i, isBooked: false })
    E.push({ slot: 'E' + i, isBooked: false })
    F.push({ slot: 'F' + i, isBooked: false })
  }
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center  mt-24 '>
        <h1 className='text-3xl text-purple-600 font-bold'>Booking <span className='text-white'>slots</span></h1>
        <h3 className='text-xl text-center'>select the below slots to register the company</h3>
      </div>
      <Modal isOpen={modal} onRequestClose={() => { setModal(false) }} style={customStyles}>
        <p className='text-end'><i onClick={() => { setModal(false) }} className="fa-solid fa-x  "></i></p>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Select a company</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a company</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </Modal>

      <div className='h-full'>
        <div className='flex  flex-col justify-center items-center m-5'>
          <div className="flex flex-wrap flex-row justify-center items-center gap-4 border-b-2 border-500 pb-5">
            <Slots values={A} setModal={setModal} />
          </div>

          <div className='flex flex-row flex-wrap justify-center items-center'>
            <div className="grid grid-cols-2 gap-4 mt-5 px-3 border-r-2 border-500">
              <Slots values={B} setModal={setModal} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={C} setModal={setModal} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={D} setModal={setModal} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={E} setModal={setModal} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={F} setModal={setModal} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BookingSlots

const Slots = ({ values, setModal }) => {
  const [val, setVal] = useState(values)
  return (
    <>
      {val.map(slotObj => {
        if (slotObj.isBooked) return <div key={slotObj.slot} onClick={() => { console.log(slotObj.slot); }} className='w-16 h-16 bg-gray-500'>{slotObj.slot}</div>;
        else return <div key={slotObj.slot}
          onClick={(e) => {
            setModal(true).then(() => {
              setVal(val.filter((current) => {
                if (current.slot === slotObj.slot) {
                  current.isBooked = true
                }
                return current
              }))
            })
          }}
          className='w-16 h-16 bg-yellow-500 hover:bg-yellow-600'>{slotObj.slot}</div>;
      })}
    </>
  );
}
