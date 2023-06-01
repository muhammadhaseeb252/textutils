import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      //change background color
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');

      //change title
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Try It';
      // }, 3000);
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <BrowserRouter>

      <Navbar title='Textutils' hometext='Home' abouttext='About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading='Enter text to analyze:' mode={mode} showAlert={showAlert}/>}/>
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
