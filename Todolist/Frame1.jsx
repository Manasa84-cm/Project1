import { useRef, useState } from 'react';
import Task from './Task';

const Frame1 = () => {
  const initialTasks = [
    { Name: "Pg", Status: true },
    { Name: "Git", Status: true },
    { Name: "Assignment", Status: true }
  ];

  const [taskName, setName] = useState(initialTasks);
  const ele = useRef();

  function display() {
    const newTask = {
      Name: ele.current.value,
      Status: false
    };
    setName([...taskName, newTask]);
    ele.current.value = "";
  }

  return (
    <div className='h-screen w-full bg-[#C599B6] flex justify-center items-center'>
      <div className='h-[80vh] w-[50vw] bg-[#E6B2BA] flex flex-col gap-6 px-20 pt-5 rounded-4xl '>
        <div className='w-[40vw] h-[10vh] bg-[#FAD0C4] rounded-4xl flex items-center justify-center text-3xl '>
          To-Do List
        </div>
        <div className='flex gap-5'>
          <input ref={ele} type="text" className='w-[35vw] h-[5vh] bg-[#FFF7F3] rounded-4xl text-center' />
          <button onClick={display} className='w-[5vw] h-[5vh] bg-[#B5828C] rounded-4xl hover:bg-[#7D1C4A] hover:text-[#F6F6F6]'>
            +
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          {
            taskName.map((e, index) => (
              <Task key={index} Name={e.Name} Status={e.Status} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Frame1;
