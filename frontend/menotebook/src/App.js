// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NoteContext from './context/notes/NoteContext';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    
    <NoteState>
    <Router>
      <div>
        <Navbar/>
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path ="login" element={<Login/>}/>
      <Route path= "signup"element={<Signup/>}/> 
    </Routes>
    </div>
  </Router>
  </NoteState>
  );
}

export default App;
