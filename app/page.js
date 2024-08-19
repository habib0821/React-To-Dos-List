"use client"
import React, { useState } from 'react'

const page = () => {


    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);


    // SUBMIT BUTTON PROGRAM
    let submitHandler = (e) => {
      e.preventDefault();
      setmainTask([...mainTask, { title, desc }]);
      settitle("");
      setdesc("");
      console.log(mainTask);
    }

    // DELETE BUTTON PROGRAM
    let deleteHandler = (i) => {
      let copyTask = [...mainTask];
      copyTask.splice(i, 1);
      setmainTask(copyTask);
    }

    // RENDER TASK PROGRAM
    let renderTask = <h2 className='font-bold text-left'>No Task Available</h2>
    if (mainTask.length > 0) {
      renderTask = mainTask.map((t, i)=>{
      return(
          <li key={i} className='flex text-left justify-around py-4'>
            <h2 className='font-bold text-left'>{i+1}. {t.title}</h2>
            <h2>{t.desc}</h2>
            <button onClick={()=>{
              deleteHandler(i);
            }} className='done px-5 py-2 bg-green-800 text-white font-bold rounded-lg'>Done</button>
          </li>
      )
    })
    }


  return (
    <>
      <div>
        <nav className='text-white text-2xl font-bold flex justify-center items-center px-4 py-8'>
          <h1>Habib's Todos List</h1>
        </nav>
        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center py-5 gap-4'>
          <input type='text' placeholder='Enter Title Here' className='text-2xl px-6 py-2 rounded-lg' value={title} onChange={(e) => {
            settitle(e.target.value)
          }} />
          <input type='text' placeholder='Enter Description Here' className='text-2xl px-6 py-2 rounded-lg' value={desc} onChange={(e) => {
            setdesc(e.target.value)
          }} />
          <button className='add text-white text-xl font-bold px-6 py-2 rounded-lg'>Add Task</button>
        </form>

        <hr />

        <div className='task_section w-full flex flex-col justify-center items-center'>
          <div className='tasks h-auto w-auto py-8 px-8 my-5 rounded-lg'>
            <ul>
              {renderTask}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default page