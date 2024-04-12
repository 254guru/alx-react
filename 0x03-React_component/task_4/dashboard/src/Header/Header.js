import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import './Header.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default App;
