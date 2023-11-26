import "./App.css";
import { About } from "./components/About";
import { Main } from "./components/Main";
import { Message } from "./components/Message";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./components/Loading";
import { Selection } from './Selection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/main' Component={Main} />  
          <Route path='/message' Component={Message} />
          <Route path='/selection' Component={Selection} /> 
          {/* <Route path='/about' Component={About} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
