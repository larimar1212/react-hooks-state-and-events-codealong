import React, {useState} from "react";

function Toggle() { // create function
  const [isOn, setIsOn] = useState(false) // setter function defines default mode to false

  let handleClick = () => {
    setIsOn((isOn) => !isOn) // once clicked, the button will change to true 
  }
// isON is false, background color = white 

const color = isOn? "red" : 'white'

  return (
    <button style={{background:color}}
     onClick={handleClick}>{isOn? "ON": 'OFF'} 

    </button>
  )
}


export default Toggle;
