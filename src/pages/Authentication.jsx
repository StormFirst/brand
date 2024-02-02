import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Authentication() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="h-[100vh]">
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default Authentication;
