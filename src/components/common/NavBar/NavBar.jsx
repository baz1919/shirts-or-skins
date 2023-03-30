import * as React from "react";
import Link from "next/link";

const NavBar = ({ user, onLogout }) => (
  <div className="container">
    <nav>
      <ul>
        <li>
          <Link href="/">
            <h2>Shirts v Skins</h2>
            {/* </strong> */}
          </Link>
        </li>
      </ul>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout} type="button" className="secondary">
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  </div>
);

export default NavBar;
