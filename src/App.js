import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import AboutUs from './components/AboutUs';
import React, {useState} from 'react' 
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
 */
function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const toggleDarkMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#323345';
      showAlert("Dark Mode has been enabled", 'success')
      
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode has been enabled", 'success')
    }
  }
  const clickHandlerLight=()=>{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Dark Mode has been enabled", 'success')
    document.title=`TextUtils - Light Mode`;
}
const clickHandlerDark=()=>{
  setMode('dark')
  document.body.style.backgroundColor='#323345';
  showAlert("Dark Mode has been enabled", 'success')
  document.title=`TextUtils - Dark Mode`;
}
  const clickHandlerGreen=()=>{
      setMode('success')
      document.body.style.backgroundColor='rgb(26 148 111)';
      showAlert("Dark Mode has been enabled", 'success')
      document.title=`TextUtils - Green Mode`;
  }
  const clickHandlerInfo=()=>{
    setMode('info')
    document.body.style.backgroundColor='rgb(28 150 164)';
    showAlert("Dark Mode has been enabled", 'success')
    document.title=`TextUtils - Blue Mode`;
}

  //toggleGreenMode

  return (
    <>
    {/*  <Router> */}
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleDarkMode={toggleDarkMode}
      clickHandlerGreen={clickHandlerGreen} clickHandlerInfo={clickHandlerInfo} clickHandlerLight={clickHandlerLight} 
      clickHandlerDark={clickHandlerDark} />
     <Alert alert={alert}/>
     <div className="container my-3">
     {/* <Routes>
       <Route exact path="/aboutUs" element={<AboutUs />}/>
       <Route exact path="/" element={<TextForm heading="Enter your text to analyze Below"  mode={mode} showAlert={showAlert}  />}/>
     </Routes> */}
     
     <TextForm heading="Enter your text to analyze Below"  mode={mode} showAlert={showAlert}  />
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
