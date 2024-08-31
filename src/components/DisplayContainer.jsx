import React from 'react'
import "../css/displayContainer.css"
export default function DisplayContainer(props) {
  const {value} = props;
  return (
    <div className='display'>
      <label>{value}</label>
    </div>
  )
}
