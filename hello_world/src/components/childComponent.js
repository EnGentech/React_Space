import React from 'react'

function childComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetings("Blessing")}>Greet Parent</button>
    </div>
  )
}

export default childComponent