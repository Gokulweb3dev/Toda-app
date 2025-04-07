import React from 'react'
import tic from '../assets/tick.png'
import ntic from '../assets/not_tick.png'


const Todolist = () => {
  return (
    <div className='flex py-1 items-center'>
      <img className='w-6' src={tic}/>
      <p className='pl-4'>how to work</p>
    </div>
  )
}

export default Todolist
