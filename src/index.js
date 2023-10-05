import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './map/App2'
import CheckImg from './checkImg/CheckImg'
import CheckImg2 from './checkImg/CheckImg2'
import reportWebVitals from './reportWebVitals';
import CheckImgWithFile from './checkImg/checkImgWithFile';
import MorqueeTag from './morqueeTag/MorqueeTag';
import UploadFile from './progreass/ProgressFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MorqueeTag /> */}
    <UploadFile />
    {/* <br />
    <CheckImgWithFile />
    <br />
    <CheckImg2 />
    <br />
    <CheckImg />
    <br />
    <App2 />
    <br />
    <App itemsPerPage={4} /> */}
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
