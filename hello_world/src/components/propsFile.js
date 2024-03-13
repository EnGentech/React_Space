import React, { Component } from "react";

// In this file, we are looking at how to reuse code in react using the props keyword with parameter passing into its function, note that without passing the parameters, the code could be reuseable by simply repeating the exact content. in this case we are looking foward to create a react application that can greet as different names as possible passed to its function

const checkout = (props) => {
    const {name, nickName} = props
    return (
        <div>
            <h1>Special Greetings to you {name} a.k.a {nickName}
            </h1>
            {props.children}
            {/* if the component was a class component, you will access the values using this e.g. this.props.name instead of props.name */}
        </div>
    )
}

// you can do same for class component in the render function just like below

// example of class component
// class example extends Component{
//     render(){
//        const {name, age} = this.props
//     return (
//         <h2>My name is {name} of {age}years old</h2>
//     ) 
//     }
    
// }

export default checkout
