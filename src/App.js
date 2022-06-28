import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

//importamos los componentes

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAuth from "./layout/LayoutAuth";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import CrearUsuario from "./components/CrearUsuario";
import { Fragment } from "react";
//import Lo from './components/Lo';
//import Dashboard from './components/Dashboard';
//import Sidebars from './components/Sidebars';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutAuth />}></Route>
            <Route path="/dasboard" element={<LayoutPrincipal />}></Route>
            <Route path="/crearUsuario" element={<CrearUsuario />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </Fragment>
  );
}

export default App;
