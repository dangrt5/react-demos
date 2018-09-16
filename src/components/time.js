import React from "react";


export default props => {
  return (
    <span>{props.time.toLocaleTimeString()}</span>
  )
}
