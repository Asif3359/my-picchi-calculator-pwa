import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentOperation, setCurrentOperation] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [decimalPressed, setDecimalPressed] = useState(false);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || displayValue === '-0') {
      setDisplayValue(number.toString());
    } else if (decimalPressed) {
      setDisplayValue(displayValue + number.toString());
    } else {
      setDisplayValue(displayValue + number.toString());
    }
  };

  const handleOperatorClick = (newOperator) => {
    if (operator === null) {
      setStoredValue(parseFloat(displayValue));
      setDisplayValue('');
      setOperator(newOperator);
      setDecimalPressed(false);
      setCurrentOperation(` ${displayValue} ${newOperator}`);
    } else {
      calculateResult();
      setOperator(newOperator);
      setDecimalPressed(false);
      setCurrentOperation(` ${displayValue} ${newOperator}`);
    }
  };

  const handleDecimalClick = () => {
    if (!decimalPressed) {
      setDisplayValue(displayValue + '.');
      setDecimalPressed(true);
    }
  };

  const calculateResult = () => {
    const currentValue = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((storedValue + currentValue).toString());
      setStoredValue(storedValue + currentValue);
    } else if (operator === '-') {
      setDisplayValue((storedValue - currentValue).toString());
      setStoredValue(storedValue - currentValue);
    } else if (operator === '*') {
      setDisplayValue((storedValue * currentValue).toString());
      setStoredValue(storedValue * currentValue);
    } else if (operator === '/') {
      if (currentValue === 0) {
        setDisplayValue('Error');
        setStoredValue(null);
        setOperator(null);
        setCurrentOperation('');
      } else {
        setDisplayValue((storedValue / currentValue).toString());
        setStoredValue(storedValue / currentValue);
      }
    }
  };

  const handleEqualsClick = () => {
    calculateResult();
    setOperator(null);
    setDecimalPressed(false);
    setCurrentOperation('');
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
    setDecimalPressed(false);
    setCurrentOperation('');
  };

  return (
    <div className=' rounded-xl border-2 border-gray-800 w-full  h-fit p-4'>
      
      <div className="calculator">
         <h1 className=' font-semibold'>Calculator</h1>
        <div className="display flex justify-start items-center bg-gray-200 rounded-lg my-2 p-2">
            {currentOperation} {displayValue} 
        </div>
        <div className="buttons  flex justify-between items-start gap-1">
          <div className='grid grid-cols-3 gap-1 w-3/4 '>
                {
                    [ 9, 8, 7, 6, 5, 4, 3, 2, 1,0].map((number) => (
                        <button className='btn btn-accent w-full  text-white' key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                        </button>
                    ))
                }
                    <button className='btn btn-accent w-full  text-white'onClick={() => handleDecimalClick()}>.</button>
                    <button className='btn btn-accent w-full   text-white'onClick={() => handleEqualsClick()}>=</button>
          </div>
          <div className=' grid gap-1 w-1/4'>
            <button className='btn btn-accent w-full col-span-2  text-white'onClick={() => handleOperatorClick('+')}>+</button>
            <button className='btn btn-accent w-full col-span-2 text-white'onClick={() => handleOperatorClick('-')}>-</button>
            <button className='btn btn-accent w-full  text-white'onClick={() => handleOperatorClick('*')}>*</button>

            <button className='btn btn-accent w-full  text-white'onClick={() => handleOperatorClick('/')}>/</button>
            <button className='btn btn-accent w-full col-span-2  text-white'onClick={() => handleClearClick()}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;