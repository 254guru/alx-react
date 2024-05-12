import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext";
import React, { useContext } from "react";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
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
	
	greeting: {
		marginTop: "1rem",
	}
});


export default Header;
