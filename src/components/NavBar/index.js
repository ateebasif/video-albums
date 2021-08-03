import React from "react";
import useRedirect from "hooks/redirect";
import { signOut } from "utils/firebase/loginLogout";

function Navbar() {
  let history = useRedirect();

  return (
    <div>
      <button onClick={() => history.push("/home")}>Home</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}

export default Navbar;
