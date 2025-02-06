import React from 'react'; //,{useState}
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
//import App from './App';
//import HomePage from './Pages/HomePages';
//import Footer from './Footer/Footer';
// import Try from './Try/Try';
import reportWebVitals from './reportWebVitals';

import Header from './Components/Header';
import Routess from './Routess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Try/> */}

       <Router>
            <Header />
            <Routess />
        </Router>
    



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
