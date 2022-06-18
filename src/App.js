
import './App.css';
import Navbar from './components/Navbar.js'
import Text from './components/Text.js'
import React,{useState} from 'react';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import About from './components/About';


function App() {

  const [mode, setmode] = useState("light")
  
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({msg: message, 
      type: type})
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }


  const toggleStyle =()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#091e14"
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")
    }
  }


  return (
    <>
     
      <Navbar title="Text Changer" mode={mode} toggleStyle={toggleStyle} />
      <Alerts alert={alert} />
      <div className="container my-3">
        
          <Text  mode={mode} showAlert={showAlert} />
            {/* <Route path="/about" element={<About mode={mode} />} />                   */}
        
      </div>
     
    </>
   
  )
}

export default App;


