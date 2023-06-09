import { Route, Routes } from "react-router";
import "./assets/styles/App.css";

import Adopt from "./pages/Adopt/Adopt";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="adopta" element={<Adopt />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
