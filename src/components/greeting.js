import React from "react";

function Greeting(props) {
  console.log('Props:', props);

  const style = {
    color: props.faveColor
  };

  return <h1 style={style} >Hello {props.name}!</h1>;
}

export default Greeting;
