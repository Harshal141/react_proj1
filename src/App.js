import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Form from './components/Form';
import Navbar from './components/Navbar';

// importing router
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// set interval function
// setInterval(()=>{<code>},<time>)

function App() {
  // Dark mode function
  const toggle = () =>{
    if(dark === "light"){
      setDark("dark")
      // document.title='Dark'
      showAlert("Dark mode Enbled","success")
      document.body.style.backgroundColor="#333333"
      document.body.style.color="#fff"
    }
    else{
      setDark("light")
      document.body.style.backgroundColor="#fff"
      document.body.style.color="black"
      showAlert("Light mode Enbled","success")
    }
  }

  // Alert
  const [alert,setAlert] = useState(null)
  // function to change object of alert (using setAlert)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    const alertRemove =()=>{
      setAlert(null)
    }
    setTimeout(alertRemove,2000)
  }

  // Dark Mode
  const [dark,setDark] = useState("light");
  return (
   <>

<Navbar title = {"Rect-Test"} mode = {dark} toggle={toggle}/>

<Form show={showAlert} mode = {dark}/>

{/* <BrowserRouter> */}
{/* <Navbar title = {"Rect-Test"} mode = {dark} toggle={toggle}/>
<div className="container my-3"><Alert alert={alert}/></div>
  <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/" element={<Form show={showAlert} mode = {dark}/>} />
  </Routes>
</BrowserRouter> */}

  </>
  );
}

export default App;
