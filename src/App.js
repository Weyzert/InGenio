import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Professionals from "./pages/Professionals/Professionals";
import Profile from "./pages/Profile/Profile";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/profissionais"
        element={<Professionals />}
      />

      <Route
        path="/perfil/:id"
        element={<Profile />}
      />

    </Routes>

  );
}

export default App;