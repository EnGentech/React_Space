import React, { Component } from 'react'

class conditionalStructuring extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userLoggedIn: false
      }
    }
    // The first method is using the if else statement
    //   render() {
    //     if (this.state.userLoggedIn){
    //         return <div>Welcome Gentle</div>
    //     } else {
    //         return <div>Welcome Guest</div>
    //     }
    //   }

    //   lets try the  variable element method, its almost the same as before with the difference of storing the message in a variable

    //   render(){
    //     let message
    //     if (this.state.userLoggedIn){
    //         message = <div>Welcome Gentle</div>
    //     } else {
    //         message = <div>Welcome Guest</div>
    //     }
    //     return <div>{message}</div>
    //   }

    //   third approach is the ternary operator and its the simplest of them all especially when the condition is not bulky
    // render(){
    //     return this.state.userLoggedIn ? <div>Welcome Gentle</div> : <div>Welcome Guest</div>
    // }

    // the last approach is the short circuit operator, this renders on the web page only when the userLogin is true otherwise nothing is rendered

    render(){
        return this.state.userLoggedIn && <div>Welcome Gentle</div>
    }


}
export default conditionalStructuring