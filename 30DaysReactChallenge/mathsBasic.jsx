import React from 'react'

import React from 'react'

function calc() {

    function add(a, b){
        const sum = a + b
        return(
            <h1>{sum}</h1>
        )
    }

  return (
    <div>
        {add()}
    </div>
  )
}

export default calc
