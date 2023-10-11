import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchEngine from './SearchEngine';

import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className="App">
      <div className="outerWrapper">
        <SearchEngine city = "New York"/>
      </div>
      <footer className="text-center">
      <a href="https://github.com/Dabi-ayu/react-appfix" rel='noopener noreferrer'>open source code</a> <span>by Dabi</span>
    </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
