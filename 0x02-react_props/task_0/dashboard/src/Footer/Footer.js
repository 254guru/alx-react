import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import './Footer.css';

function App() {
  return (
    <div className="App">
      <div className="App-footer">
	  <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
