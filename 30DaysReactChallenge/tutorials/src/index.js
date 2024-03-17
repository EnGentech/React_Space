import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const names = (
  <div>
    <h1>Gentle Inyang</h1>
    <h2>Blessing Emmanuel</h2>
    <h3>Emmyjah InjectedVirus</h3>
  </div>
)

const address = (
  <div>
    <p>Mission Road, Ikot Ibiok, Eket</p>
    <p>Lakpaja Street, Missisipi Abuja</p>
    <p>24 Alpha Ghost, Banana Island, Ikeja, Lagos</p>
  </div>
)

const header = {
  color: "red",
  TextDecoder: "underline",
  backgroundColor: 'green'
}

const task2Style = {
  color: "navy",
  textAlign: "center"
}

const task2 = (
  <div style={task2Style}>
    <h1>SUBCRIBE</h1>
    <p>Sign up with your email address to receive news and update</p>
    <input type="text" placeholder='first Name'></input>
    <input type="text" placeholder='last Name'></input>
    <input type="text" placeholder='email'></input>
  </div>
)

const submitButton = (
  <input type="submit" placeholder='first Name'></input>
)

const appSubmit = (
  <div style={task2Style}>
    {task2}
    {submitButton}
  </div>
)

const app = (
  <div style={header}>
    {names}
    {address}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(appSubmit, rootElement)