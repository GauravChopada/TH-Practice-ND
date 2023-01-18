import React, { useState } from 'react';
import Counter from './components/Counter';
import Total from './components/Total';
import './App.css';

function App() {

  //state data for 4 counters
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  //totalValue variable keeps total of all values from data array
  let totalValue = 0;

  return (<div>
    {

      data.map((counter) => {
        //adds value of current counter into totalValue variable.
        totalValue += counter.value;

        //this method takes old value as input, increments it and reflects changes in array.
        // const onIncrement = (value) => {
        //   const newArray = [...data];
        //   newArray[newArray.indexOf(counter)].value = value + 1;
        //   setData(newArray)
        // }

        //this method takes old value as input, decrements it and reflects changes in array.
        // const onDecrement = (value) => {
        //   const newArray = [...data];
        //   newArray[newArray.indexOf(counter)].value = value - 1;
        //   setData(newArray)
        // }

        //this method takes new value as input, sets new value for object and reflects changes in array.
        const onChange = (value) => {
          const newArray = [...data];
          newArray[newArray.indexOf(counter)].value = value;
          setData(newArray)
        }

        return (
          <Counter key={counter.id} value={counter.value}
            // onIncrement={onIncrement}
            // onDecrement={onDecrement}
            onChange={onChange}
          />
        )
      })}

    {/* total component which shows value of totalValue */}
    <Total value={totalValue} />

  </div>);
}
export default App;