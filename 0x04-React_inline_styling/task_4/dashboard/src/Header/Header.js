import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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

const styles = StyleSheet.create({
	"App-header": {
		fontSize: "1.4rem",
		color: "#E0354B",
		display: "flex",
		alignItems: "center",
		padding: "1.2em",
		borderBottom: "4px solid #E0354B",
	},
	
	img {
		width: "250px",
		height: "250px",
	},
});


export default Headeri;
