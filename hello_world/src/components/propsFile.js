import React from "react";

// In this file, we are looking at how to reuse code in react using the props keyword with parameter passing into its function, note that without passing the parameters, the code could be reuseable by simply repeating the exact content. in this case we are looking foward to create a react application that can greet as different names as possible passed to its function

const checkout = (props) => {
    return (
        <div>
            <h1>Special Greetings to you {props.name} a.k.a {props.nickName}
            </h1>
            {props.children}
            {/* if the component was a class component, you will access the values using this e.g. this.props.name instead of props.name */}
        </div>
    )
}

export default checkout