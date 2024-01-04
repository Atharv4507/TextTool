import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import DropDown from './Components/DropDown';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Crausel from './Components/Crausel';


function App() {
  const [name, setname] = useState("Norve")
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (mess, type) => {
    setAlert({
      mess: mess,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [text2,setText2] = useState('Enable Dark Mode')
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled Succesfully", "success")
      setText2("Disable Dark Mode");

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled Succesfully", "success")
      setText2("Enable Dark Mode");
    }
  }
  return (
    <div>
      <Navbar title="React Js" mode={mode} toggleMode={toggleMode} aboutText="About Js" />
      <Alert alert={alert} toggleMode={toggleMode} mode={mode}/>
      <Crausel mode={mode}/>
      <header className="App-header" mode={mode}>
         <h1 className="stroke-blue-800 marker:first-letter text-blue-800S text-5xl">Hello, {name}</h1>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
            <Route path='/DropDown' element={<DropDown mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
