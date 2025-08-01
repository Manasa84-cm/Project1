import React from 'react';

function Task(props) {


  return (
    <div className='flex justify-between border-2 px-4 py-2 rounded-4xl'>
      <div className='flex gap-5 items-center '>
        <input type="checkbox" />
        <h1 className='text-2xl text-black'>{props.Name}</h1>
      </div>
      <div id='Task'>
        <h1 className='text-2xl text-red-600 cursor-pointer'>X</h1>
      </div>
    </div>
  );
}

export default Task;
