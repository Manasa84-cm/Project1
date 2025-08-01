import React, { useState, useRef } from 'react';

export default function EvenOddTable() {
  const inputRef = useRef(null);
  const [isEven, setIsEven] = useState(null); // true/false/null

  const checkNumber = () => {
    const value = parseInt(inputRef.current.value);
    if (isNaN(value)) {
      setIsEven(null);
    } else {
      setIsEven(value % 2 === 0);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Even or Odd Checker</h2>
      <input
        type="number"
        ref={inputRef}
        placeholder="Enter a number"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br /><br />
      <button
        onClick={checkNumber}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Here
      </button>

      <br /><br />

      {isEven !== null && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          {/* Table for Even */}
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Even</td>
                <td>{isEven ? 'True' : 'False'}</td>
              </tr>
            </tbody>
          </table>

          {/* Table for Odd */}
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Odd</td>
                <td>{!isEven ? 'True' : 'False'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {isEven === null && (
        <p style={{ color: 'red', marginTop: '20px' }}>Please enter a valid number</p>
      )}
    </div>
  );
}
