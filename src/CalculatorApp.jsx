import React, { useState } from 'react';

const CalculatorApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null); // New state to store the result

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
    setResult(null); // Clear the result as well
  };

  const handleEqual = () => {
    try {
      if (inputValue === '') {
        setResult('Error');
      } else {
        const calculatedResult = eval(inputValue); // BODMAS rule is handled by eval
        setResult(calculatedResult);
      }
    } catch (error) {
      setResult('Error');
    }
  };
  const styles = {
    button: {
      padding: '15px 20px',
      fontSize: '18px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Calculator</h1>
      <input
        type="text"
        value={inputValue}
        readOnly
        style={{ width: '200px', height: '30px', textAlign: 'right', marginBottom: '20px' }}
      />
      <br />
      {result !== null && (
        <div style={{ marginTop: '10px', fontSize: '24px' }}>
          Result: {result}
        </div>
      )}
     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
  <button style={styles.button} onClick={() => handleButtonClick('7')}>7</button>
  <button style={styles.button} onClick={() => handleButtonClick('8')}>8</button>
  <button style={styles.button} onClick={() => handleButtonClick('9')}>9</button>
  <button style={styles.button} onClick={() => handleButtonClick('/')}>/</button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
  <button style={styles.button} onClick={() => handleButtonClick('4')}>4</button>
  <button style={styles.button} onClick={() => handleButtonClick('5')}>5</button>
  <button style={styles.button} onClick={() => handleButtonClick('6')}>6</button>
  <button style={styles.button} onClick={() => handleButtonClick('*')}>*</button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
  <button style={styles.button} onClick={() => handleButtonClick('1')}>1</button>
  <button style={styles.button} onClick={() => handleButtonClick('2')}>2</button>
  <button style={styles.button} onClick={() => handleButtonClick('3')}>3</button>
  <button style={styles.button} onClick={() => handleButtonClick('-')}>-</button>
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button style={styles.button} onClick={() => handleButtonClick('0')}>0</button>
  <button style={styles.button} onClick={handleClear}>C</button>
  <button style={styles.button} onClick={handleEqual}>=</button>
  <button style={styles.button} onClick={() => handleButtonClick('+')}>+</button>
</div>

    </div>
  );
};

export default CalculatorApp;
