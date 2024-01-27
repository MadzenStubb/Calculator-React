import React from 'react'
import '../StyleSheets/ClearButton.css'

const ClearButton = (props) => {

  return (
    <button className="clear-button" onClick={props.handleClick}>
        {props.children}
    </button>
  )
}

export default ClearButton