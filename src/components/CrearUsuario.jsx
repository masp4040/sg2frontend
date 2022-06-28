import React, { useState } from 'react'
import imagen from "../img/logo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const URI="http://localhost:4000/usuarios"

function CrearUsuario() {

  const[correo,setCorreo]=useState("");
  const[password,setPassword]=useState("");

  const navigate=useNavigate();

  const Registrar=async(e)=>{
    e.preventDefault();
    await axios.post(URI,{
      correo: correo,
      password:password,
    })
    toast('Registro Guardado exitosamente', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
    
    
    navigate("/");

  
  
  }



  return (
    <div className="text-center ">
      <main className="form-signin w-100 m-auto">
        <form className="form-signin card   " onSubmit={Registrar} >
          <img
            className="mb-3"
            src={imagen}
            alt=""
            width="300"
            height="90"
          ></img>
          <h1 className="h3 mb-3 fw-normal">Formulario de Registro</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="correo" required
              placeholder="name@example.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              
            />
            <label htmlFor="floatingInput">Correo</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

         
          <button onClick={Registrar} className="w-100 btn btn-lg mt-3 btn-danger ">
            Registrarse
          </button>

          
          <p className="mt-5 mb-3 text-muted">&copy; FSTADSI–2022</p>
        </form>
      </main>
    </div>
  )
}

export default CrearUsuario