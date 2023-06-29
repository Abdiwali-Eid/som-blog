import logo from './logo.svg';
import './App.css';
import Home from  './components/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
     <Home/>
      <p><faCoffee/></p>
    </div>
  );
}

export default App;
