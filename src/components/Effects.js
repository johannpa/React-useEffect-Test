import React, {useEffect, useState} from 'react'

function Effects() {

    const [state, setState] = useState(0);
    

    useEffect(() => {
      console.log("Hi there");
    }, [state])
    

  return (
    <div>
      <button 
        onClick={() => {
            setState(state+1);
        }}
        >click Me</button>
    </div>
  )
}

export default Effects;
