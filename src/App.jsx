import { useState } from 'react';

import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Results from './components/Results.jsx';

function App() {
  const [input, setInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1 ,
  });

  const inputIsValid = input.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setInput(previousInput => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <Input
        input = {input}
        onChangeInput={handleInputChange} />
        {!inputIsValid && <p className='center'>Duration must be greater than 0</p>}
        {inputIsValid && <Results
        input = {input}
      />}
    </>
  )
}

export default App
