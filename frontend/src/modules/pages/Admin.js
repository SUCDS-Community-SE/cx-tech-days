import React, { useContext } from "react";
import { AuthContext } from "../../App";

export default function Admin() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
