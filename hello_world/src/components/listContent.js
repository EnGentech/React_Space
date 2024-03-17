import React from 'react'

function listContent() {

    const listArray = [
        {
            id: 1,
            name: "Gentle",
            age: 25
        },
        {
            id: 2,
            name: "Blessing",
            age: 27
        },
        {
            id: 3,
            name: "Emmyjay",
            age: 28
        },
        {
            id: 4,
            name: "Precious",
            age: 30
        },
        {
            id: 5,
            name: "Love",
            age: 32
        }
    ]

    let allArray = listArray.map(x => {x})

  return (
    <div>
        {allArray}
    </div>
  )
}

export default listContent