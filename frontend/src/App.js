import './App.css';
import { About } from './components/About';
import { Main } from './components/Main';
import { Message } from './components/Message';

function App() {
  return (
    <div className='App'>
      <Main />
      <About />
      <Message />
    </div>
  );
}

export default App;
