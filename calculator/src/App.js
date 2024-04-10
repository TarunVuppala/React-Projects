import { useState } from 'react';
import Container from './Container';
import Buttons from './Buttons';
import Input from './Input';
import './App.css';

function App() {
  const [inputVal, setinputVal] = useState('');

  function handleButtons(btn) {
    if (btn === 'AC')
      setinputVal('');
    else if (btn === '=') {
      let res = eval(inputVal);
      res = res.toString();
      setinputVal(res);
    }
    else if (btn === 'x') {
      const newVal = inputVal.slice(0, -1);
      setinputVal(newVal);
    }
    else {
      const newVal = inputVal + btn;
      setinputVal(newVal);
    }
  }
  return (
    <>
      <Container>
        <h1>Calculator</h1>
        <Input value={inputVal} />
        <Buttons onClick={handleButtons} />
      </Container>
    </>
  );
}

export default App;
