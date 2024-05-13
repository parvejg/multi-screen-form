import logo from './logo.svg';
import './App.css';
import { NameForm } from './Components/Screen1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmailPage } from './Components/Screen2';

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={NameForm} path="/" />
        <Route Component={EmailPage} path='/email-page' />
      </Routes>
    </Router>
  );
}

export default App;
