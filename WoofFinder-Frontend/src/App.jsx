import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./assets/styles/App.css";
import Adopt from "./pages/Adopt/Adopt";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import Registro from "./pages/Registro/Registro";

function App() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      setClosing(true);
    };

    window.addEventListener("unload", handleBeforeUnload);

    return () => {
      window.removeEventListener("unload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (closing) {
      localStorage.clear();
    }
  }, [closing]);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="adopta" element={<Adopt />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
