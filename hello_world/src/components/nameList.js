import React from "react";

// function nameList(){
//     let names = ['Gentle', 'Blessing', 'Emmyjay', 'Macauley']

//     return(
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }
//         </div>
//     )
// }

// The above can be futher simplified further as
function nameList(){
    const names = ['Gentle', 'Blessing', 'Emmyjay', 'Macauley']
    const nameListArray = names.map(name => <h2>{name}</h2>)
    return(<div>{nameListArray}</div>)
}

export default nameList