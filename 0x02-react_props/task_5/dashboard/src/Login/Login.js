import './Login.css';
import React from "react";

function App() {
  return (
	  <div className="App">
      <div className="APP-body">
	<p>Login to access the full dashboard</p>
	  <label htmlFor="email">email</label>
	  <input name="email" type="email" id="email"></input>
	  <label htmlFor="password">password</label>
	  <input name="password" type="password" id="passsword"></input>
	  <button>OK</button>
      </div>
	  </div>
  );
}

export default App;
