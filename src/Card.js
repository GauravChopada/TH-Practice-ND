import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <div className='content'>
    <strong>Name: </strong>
      {props.user.name}
        </div>
        <div className='content'>

    <strong>Company: </strong>
      {props.user.company}
        </div>
        <div className='content'>

    <strong>Email: </strong>
      {props.user.email}
        </div>
        <div className='content'>

    <strong>More Info: </strong>
      {props.user.about}
        </div>
    </div>
  )
}

export default Card
