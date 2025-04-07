import React from 'react'
import icon from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='flex flex-col px-4'>
        <div className='place-self-center p-2 mb-4 font-bold text-2xl flex items-center'>
            <img className='w-7 h-7' src={icon}></img>
            <h1> TODO LIST</h1>
        </div>
        <div className=' flex w-full rounded-2xl bg-slate-100 h-8'>
            <input className='flex-1 border-0 outline-none bg-transparent pl-5' />
            <button className='bg-sky-300 w-16 rounded-2xl'>ADD</button>
        </div>
    
      
    </div>
  )
}

export default Todo
