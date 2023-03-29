import * as React from "react";

import LogoutButton from "../LogoutButton";

const NavBar = ({ user, onLogout }) => (
  <nav>
    <ul>
      <li>
        <strong>Shirts v Skins</strong>
      </li>
    </ul>
    <ul>
      {user ? (
        <li>
          <LogoutButton onLogout={onLogout} />
        </li>
      ) : null}
    </ul>
  </nav>
);

export default NavBar;
