import './App.css';
import { About } from './components/About';
import { Main } from './components/Main';
import { Message } from './components/Message';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/main' Component={Main} />  
          <Route path='/message' Component={Message} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
