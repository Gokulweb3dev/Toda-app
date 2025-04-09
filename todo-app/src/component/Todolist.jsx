import React from 'react'
import tic from '../assets/tick.png'
import ntic from '../assets/not_tick.png'
import del from '../assets/delete.png'


const Todolist = (data) => {
  return (
    <div className='flex py-2 items-center'>
      <button onClick={()=>{data.togglelist(data.id)}}><img className='w-6' src={data.iscomplete ? tic : ntic} /></button>
      <p className={`pl-4 font-medium flex-1  ${data.iscomplete? "line-through": ""}`}>{data.text}</p>
      <button onClick={()=>{data.deleteitem(data.id)}} className='w-7' ><img className='w-5' src={del} ></img></button>
    </div>
  )
}

export default Todolist
