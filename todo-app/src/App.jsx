import React from 'react'
import Todo from './component/todo'


const App = () => {
  return (
    <div className='bg-emerald-300 w-screen h-screen pt-20 '>
    <div className='bg-orange-300 place-self-center w-1/3 min-w-96 h-1/3 min-h-96 rounded-3xl'>
      <Todo/>
    
      
    </div>
    </div>
  )
}

export default App
