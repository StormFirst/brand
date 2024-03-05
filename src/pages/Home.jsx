import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../api/firebase";

function Home() {
  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        className="bg-rose-500 p-2 rounded-md text-white font-semibold mt-3"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}

export default Home;
