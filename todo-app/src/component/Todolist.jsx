import React from 'react'
import tic from '../assets/tick.png'
import ntic from '../assets/not_tick.png'
import del from '../assets/delete.png'


const Todolist = (data) => {
  return (
    <div className='flex py-2 items-center'>
      <img className='w-6' src={tic}/>
      <p className='pl-4 flex-1'>{data.text}</p>
      <button onClick={()=>{data.deleteitem(data.id)}} className='w-7' ><img className='w-5' src={del} ></img></button>
    </div>
  )
}

export default Todolist
