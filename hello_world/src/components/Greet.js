import React from "react"

// function Greet(){
//     return <h1>Greetings EnGentech</h1>
// }
// Lets use the es6 arrow function format

// this method uses a strict naming convention for exporting and when importing this, the name should be in a curly braces like import { Greet } from "component/greet"
export const Greet = () => <h1>Hello EnGentech</h1>


// this does not use use strict naming convention
export default Greet