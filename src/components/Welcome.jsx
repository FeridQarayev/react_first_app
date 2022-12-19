import React from 'react'

const Welcome = (props) => {
  return (
    <>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <img src={props.img} alt={props.name} />
    </>
  )
}

export default Welcome