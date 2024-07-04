import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./page/Accueil";
import Administrateur from "./page/Administrateur";
import Login from "./page/Login";
import Navbar from "./composants/Navbar";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />}>
            Accueil
          </Route>
          <Route path="/Administrateur" element={<Administrateur />}>
            Administrateur
          </Route>
          <Route path="/Login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
