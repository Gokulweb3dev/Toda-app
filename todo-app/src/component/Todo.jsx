import React from 'react'
import icon from '../assets/todo_icon.png'
import Todolist from './Todolist'


const Todo = () => {
  return (
    <div className='flex flex-col p-4'>
        <div className='place-self-center p-2 mb-4 font-bold text-2xl flex items-center'>
            <img className='w-7 h-7' src={icon}></img>
            <h1> TODO LIST</h1>
        </div>
        <div className=' flex w-full rounded-2xl bg-slate-100 h-8 mb-6'>
            <input className='flex-1 border-0 outline-none bg-transparent pl-5' />
            <button className='bg-sky-300 w-16 rounded-2xl'>ADD</button>
        </div>
        <div className='px-5'>
            <Todolist />
            <Todolist />
            <Todolist />
        </div>
    
      
    </div>
  )
}

export default Todo
