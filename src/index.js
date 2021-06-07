import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState,useEffect} from 'react';

// const [date, setdate] = useState('')
// const [time, settime] = useState('')
// useEffect(() => {
//     setdate(new Date().toLocaleDateString());
//     settime(new Date().toLocaleTimeString())
// },[])

const styleHeading={
  backgroundColor:"red",
  color:"white",
  textAlign:'center',
  padding:"10px 0px",
}

ReactDOM.render(<>
        <h1 style={styleHeading}>My name is jitendra singh</h1>
        <p style={{
          backgroundColor:"",fill:"pink",
        }}>Today's Date is:{new Date().toLocaleDateString()}</p>
        <p>Current time is:{new Date().toLocaleTimeString()}</p>
    </>,
  document.getElementById('root')
);

reportWebVitals();
