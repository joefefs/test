import React, {useState} from 'react'
import HelloWorld from './HelloWorld'
function App() {
  const [ color, setColor ] = useState('black')
  const myFunc = () => {
    
      color === 'black' ? (setColor('red')) : (setColor('black'))
    
  }
  return (
    <div className="App">
      <HelloWorld color={color} myFunc={myFunc} />
    </div>
  );
}

export default App;
