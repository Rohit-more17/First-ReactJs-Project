// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card  from './components/Card';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {

  const[mode , setMode] = useState("light")

  const toggleMode =() => {
    if(mode === "dark")
    {
      setMode ('light')
      document.body.style.backgroundColor = 'white' ;
    }
    else
    {
      setMode  ('dark')
      document.body.style.backgroundColor = "#2F4F4F";
    }
  }

  return (
    <>
      <Navbar titleName="Rohit" about="THis" mode={mode} toggleMode = {toggleMode}/>

      <br />
      <div className="container">
        <Card titleName="My Card" mode={mode}></Card>
      </div>
      <br />

      <div className="container">
        <TextForm heading="UPPERCASE" mode={mode}></TextForm>
      </div>

      
        
    </>
  );
}



export default App;
