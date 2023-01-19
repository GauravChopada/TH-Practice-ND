import React from 'react'

// Counter Component with seprate methods for value increment and decrement
function Counter(props) {
    return (
        <div>
            <div className="counter">
                <b>{props.object.value}</b>
                <div className="counter-controls">
                    <button className="button is-danger is-small" onClick={() => props.onDecrement(props.object)}>-</button>
                    <button className="button is-success is-small" onClick={() => props.onIncrement(props.object)}>+</button>
                </div>
            </div>
        </div>
    )
}

// Counter Component with single onChange method for increment and decrement of value.
// function Counter(props) {
//     console.log(props.object)
//     return (
//         <div>
//             <div className="counter">
//                 <b>{props.object.value}</b>
//                 <div className="counter-controls">
//                     <button className="button is-danger is-small" onClick={() => props.onChange(props.object, props.object.value - 1)}>-</button>
//                     <button className="button is-success is-small" onClick={() => props.onChange(props.object, props.object.value + 1)}>+</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Counter
