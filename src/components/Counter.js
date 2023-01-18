import React from 'react'

// Counter Component with seprate methods for value increment and decrement
// function Counter() {
//   return (
//     <div>
//       <div className="counter">
//          <b>{props.value}</b>
//          <div className="counter-controls">
//            <button className="button is-danger is-small" onClick= { () => props.onDecrement(props.value)}>-</button>
//            <button className="button is-success is-small" onClick={ () => props.onIncrement(props.value)}>+</button>
//          </div>
//        </div>
//     </div>
//   )
// }

// Counter Component with single onChange method for increment and decrement of value.
function Counter(props) {
    return (
        <div>
            <div className="counter">
                <b>{props.value}</b>
                <div className="counter-controls">
                    <button className="button is-danger is-small" onClick={() => props.onChange(props.value - 1)}>-</button>
                    <button className="button is-success is-small" onClick={() => props.onChange(props.value + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter