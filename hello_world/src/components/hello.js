// This is a basic react code that is written using .js instead of .jsx which stands for javaScript XML
// import react
import React, { createElement } from "react"

// function hello(){
//     return(
//         <div>
//             <h1>React with .js extension says HELLO</h1>
//         </div>
//     )
// } Lets create the page using react create element component

const hello = () => {
    return React.createElement('div', null, createElement("h1", null, "this is react create element method"))
}
// In the above, the createElement takes a minimum of 3 argument, first is the html tag, the second is the property which is written in an object format. for instance lets create a function to handle that

const newHello = () => {
    return(
        React.createElement(
            "div",
            {id: "special", className: "specialClass"},
            React.createElement(
                'h4',
                null,
                "this is a test case with element h4"
            )
        )
    )
}

export {hello, newHello}