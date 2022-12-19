import React from 'react'

const Welcome = (props) => {
  return (
    <>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <img src={props.src} alt={props.name} />
    </>
  )
}

export default Welcome