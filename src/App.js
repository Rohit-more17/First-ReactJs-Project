// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card  from './components/Card';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar titleName="Rohit" about="THis" />
<br />
      <div>
        <Navbar titleName="Apurva"></Navbar>
      </div>
      <br />
      <div className="container">
        <Card titleName="My Card"></Card>
      </div>
      <br />

      <div className="container">
        <TextForm heading="Convert To UPPERCASE"></TextForm>
      </div>

      
      
    </>
  );
}



export default App;
