import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./api/firebase";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
    });
    return unsubsribe;
  }, []);

  return <>{user ? <Home /> : <Authentication />}</>;
}

export default App;
