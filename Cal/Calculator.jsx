import React, { useState } from 'react';

function Calculator() {
    const [expression, setExpression] = useState('');

    const handleClick = (value) => {
        if (value == 'AC') {
            setExpression('');
        }
        else if (value == 'DEL') {
            setExpression(prev => prev.slice(0, -1));
        }
        else if (value == '=') {
            const result = eval(expression);
            setExpression(result.toString());
        }
        else {
            setExpression(prev => prev + value);
        }
    };

    return (
        <div className="bg-purple-200 min-h-screen flex items-center justify-center">
            <div className="bg-white  shadow-xl p-6 w-72">
                <div className="bg-blue-50 mb-6 text-right text-2xl text-gray-800 p-4 shadow-inner h-16 overflow-x-auto">
                    {expression || 'ENTER NUMBERS'}
                </div>

                <div className="grid grid-cols-4 gap-3 text-gray-800 text-lg">
                    <button onClick={() => handleClick('AC')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">AC</button>
                    <button onClick={() => handleClick('DEL')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">DEL</button>
                    <button onClick={() => handleClick('%')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">%</button>
                    <button onClick={() => handleClick('/')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">/</button>

                    <button onClick={() => handleClick('7')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">7</button>
                    <button onClick={() => handleClick('8')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">8</button>
                    <button onClick={() => handleClick('9')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">9</button>
                    <button onClick={() => handleClick('*')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">*</button>

                    <button onClick={() => handleClick('4')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">4</button>
                    <button onClick={() => handleClick('5')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">5</button>
                    <button onClick={() => handleClick('6')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">6</button>
                    <button onClick={() => handleClick('-')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">-</button>

                    <button onClick={() => handleClick('1')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">1</button>
                    <button onClick={() => handleClick('2')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">2</button>
                    <button onClick={() => handleClick('3')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">3</button>
                    <button onClick={() => handleClick('+')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">+</button>

                    <button onClick={() => handleClick('.')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">.</button>
                    <button onClick={() => handleClick('0')} className="bg-gray-100  py-3 shadow hover:bg-gray-200 transition">0</button>
                    <button onClick={() => handleClick('=')} className="col-span-2 bg-pink-400  py-3 text-white text-xl shadow hover:bg-pink-500 transition">=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
