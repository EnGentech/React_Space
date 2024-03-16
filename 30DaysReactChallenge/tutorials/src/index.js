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

const app = (
  <div>
    {names}
    {address}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
