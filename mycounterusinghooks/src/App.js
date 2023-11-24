import { useState } from 'react';
import './App.css';

function App() {

  //let counter = 10;
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if( counter !== 20 )
      setCounter(counter+1);
    else{
      console.log("You reached the maximum limit");
      setCounter(20);
    }    

    console.log("Value Added", counter)
  }

  const removeValue = () => {
    if(counter !== 0)
      setCounter(counter-1);
    else{
      console.log("You reached the minimum limit");
      setCounter(0);
    }      
    console.log("Value Removed", counter)
  }

  return (
   <div id="root" className="myDiv">
      <h1>Welcome to My Counter App</h1>
      <h1>Counter Value = {counter}</h1>

      <button 
      onClick={addValue}
      >Add Value : {counter}</button>

      <button
      onClick={removeValue}>Remove Value : {counter}</button>
      
    </div>
  );
}

export default App;
