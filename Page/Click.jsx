import React, { useState } from 'react';

export default function Click() {
  const [count, setCount] = useState(0);

  function Change() {
    setCount(count + 1);
    console.log(count);
  }

  function Reset() {
    setCount(0);
    console.log(count);
  }

  return (
    <div style={{ margin: '100px',display:'flex',flexDirection:'column',gap:'20px'}}>
      <p style={{ fontSize: '20px',background:'white',color:'purple',width:'150px', textAlign:'center',height:'60px', textAlignLast:'center'}}>Click value: {count}</p>
    
      <button  style={{background:'purple', height:'50px',width:'150px'}} onClick={Change}>Click me</button>
      <button  style={{background:'purple',height:'50px',width:'150px'}} onClick={Reset}>Reset</button>
    </div>
  );
}
