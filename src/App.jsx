import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleBtnClick = (val) => {
    if (val === 'C') {
      setInput('');
      setResult('');
    } else if (val === '=') {
      try {
        // Evaluates dynamic mathematical expressions
        const calcResult = Function(`'use strict'; return (${input})`)();
        setResult(calcResult.toString());
      } catch (err) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + val);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '320px', margin: '0 auto' }}>
      <h2>AWS Dynamic Calculator</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>AWS Sandbox Connected</p>
      
      <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <input 
          type="text" 
          value={input} 
          readOnly 
          placeholder="0" 
          style={{ width: '100%', fontSize: '20px', textAlign: 'right', padding: '8px', boxSizing: 'border-box' }} 
        />
        <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'right', minHeight: '35px', margin: '10px 0', color: '#0070f3' }}>
          {result}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {buttons.map((btn) => (
            <button 
              key={btn} 
              onClick={() => handleBtnClick(btn)} 
              style={{ 
                padding: '15px', 
                fontSize: '18px', 
                cursor: 'pointer',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: btn === '=' ? '#0070f3' : btn === 'C' ? '#ff4d4f' : '#fff',
                color: (btn === '=' || btn === 'C') ? '#fff' : '#000'
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;