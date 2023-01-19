import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Total from './components/Total';
import './App.css';

function App() {

  //state listOfCounters for multiple counter objects
  let [listOfCounters, setlistOfCounters] = useState([
  ]);

  useEffect(
    () => {
      //if listOfCounters is not found in sessionStorage, initial data will be loaded in listOfCounters
      if (!sessionStorage.getItem("listOfCounters")) {
        setlistOfCounters([
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
        ])
      } else
        //else data available in sessionStorage will be loaded in listOfCounters
        setlistOfCounters(JSON.parse(sessionStorage.getItem("listOfCounters")))
    }, []
  )

  //totalValueOfCounters variable keeps total of all values from listOfCounters array
  let totalValueOfCounters = 0;

  //this method takes counterObject as input, increments value of object, reflects changes in array, stores data in sessionStorage.
  const onIncrement = (counterObject) => {
    const newArray = [...listOfCounters];
    newArray[newArray.indexOf(counterObject)].value = counterObject.value + 1;
    setlistOfCounters(newArray)
    sessionStorage.setItem("listOfCounters", JSON.stringify(newArray))
  }

  //this method takes counterObject as input, decrements value of object, reflects changes in array, stores data in sessionStorage.
  const onDecrement = (counterObject) => {
    if (counterObject.value > 0) {
      const newArray = [...listOfCounters];
      newArray[newArray.indexOf(counterObject)].value = counterObject.value - 1;
      setlistOfCounters(newArray)
      sessionStorage.setItem("listOfCounters", JSON.stringify(newArray))
    }
  }

  //this method takes counterObject, new value as input, sets new value for object and reflects changes in array.
  const onChange = (counterObject, newValue) => {
    if (newValue >= 0) {
      const newArray = [...listOfCounters];
      newArray[newArray.indexOf(counterObject)].value = newValue;
      setlistOfCounters(newArray)
      sessionStorage.setItem("listOfCounters", JSON.stringify(newArray))
    }
  }

  return (<div className='body'>
    {

      listOfCounters.map((objectOfCounterList) => {

        //adds value of current counter into totalValueOfCounters variable.
        totalValueOfCounters += objectOfCounterList.value;

        return (
          <Counter key={objectOfCounterList.id} object={objectOfCounterList}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          // onChange={onChange}
          />
        )
      })}

    {/* total component which shows value of totalValueOfCounters */}
    <Total value={totalValueOfCounters} />

  </div>);
}

export default App;