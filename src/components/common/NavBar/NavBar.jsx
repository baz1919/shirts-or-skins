import * as React from "react";

import LogoutButton from "../LogoutButton";

const NavBar = ({ user, onLogout }) => (
  <div className="flex flex-row p-3 h-20 min-h-20 bg-gradient-to-l from-slate-800 to-neutral-800 justify-between items-center">
    <div className="flex items-center justify-center">
      <h1 className="text-slate-200 font-semibold">Shirts v Skins</h1>
    </div>
    {user ? <LogoutButton onLogout={onLogout} /> : null}
  </div>
);

export default NavBar;
