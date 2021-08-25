// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card  from './components/Card';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const[mode , setMode] = useState("light")

  const [alert, setAlert] = useState(null)

const showAlert =(message , type) =>{

  setAlert({
    msg : message ,
    type : type 
  })

  setTimeout(()=>{

    setAlert(null);

  } ,1000)

} 

  const toggleMode =() => {
    if(mode === "dark")
    {
      setMode ('light')
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light Mode Enabled" , "success")
    }
    else
    {
      setMode  ('dark')
      document.body.style.backgroundColor = "#2F4F4F";
      showAlert("DARK Mode Enabled" , "danger")
    }
  }

  return (
    <>
      <Navbar titleName="Rohit" about="THis" mode={mode} toggleMode = {toggleMode}/>

      <Alert alert= {alert}></Alert>

      <br />
      <div className="container">
        <Card titleName="My Card" mode={mode}></Card>
      </div>
      <br />

      <div className="container">
        <TextForm heading="UPPERCASE" mode={mode}> showAlert={showAlert}</TextForm>
      </div>

      
        
    </>
  );
}



export default App;
