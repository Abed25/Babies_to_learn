import React from 'react'
import "../css/dynamicButton.css"

export default function DynamicButton(props) {
    const {style,innerName,click} = props;
  return (
    <button 
    className='buttons'
    onClick={click}
    style={style}>
        {innerName}
    </button>
  )
}
