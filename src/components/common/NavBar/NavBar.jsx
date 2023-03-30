import * as React from "react";
import Link from "next/link";

const NavBar = ({ user, onLogout }) => (
  <div className="container">
    <nav>
      <ul>
        <li>
          <Link href="/">
            <strong>Shirts v Skins</strong>
          </Link>
        </li>
      </ul>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout} type="button">
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  </div>
);

export default NavBar;
