import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
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
