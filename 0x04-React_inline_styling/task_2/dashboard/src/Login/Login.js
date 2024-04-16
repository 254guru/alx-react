import './Login.css';
import React from "react";
import { StyleSheet, css } from "aphrodite";

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

const styles = StyleSheet.create({
	"App-body": {
		fontSize: "1rem",
		paddind: "calc((1.2em) * 2),
		borderBottom: "4px solid #E0354B",
		height: "45%",
		fontFamily: "Arial, Helvetica, sans-serif",
	},
});

export default App;
