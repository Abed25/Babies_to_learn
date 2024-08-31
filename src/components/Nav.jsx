import React from 'react'
import DynamicButton from './DynamicButton'
import "../css/nav.css"

export default function Nav() {
    const commonStyle = {
        height: "80px",
        width: "80px",
        borderRadius: "40px",
        margin: "0 40px",
        position: "relative",
        left: "38%"
    }
  return (
    <div className='nav'>
      <DynamicButton 
      innerName="NUMBERS"
      style={commonStyle}
      click={()=>{alert("Set up numbers!!")}}
      />
      <DynamicButton
      innerName="LETTERS"
      style={commonStyle}
      />

    </div>
  )
}
