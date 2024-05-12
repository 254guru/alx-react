import { AppContext } from "../App/AppContext";
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import './Footer.css';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;
