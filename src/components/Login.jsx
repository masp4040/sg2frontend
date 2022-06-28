import React from "react";
import imagen from "../img/logo.png";
import axios from "axios";
import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URI = "http://localhost:4000/api/usuarios";

const Login = () => {
  const [usuarios, setUsuarios] = useState({
    correo: "",
    password: "",
  });

  // const [correo, setCorreo] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   setErrMsg('');
  // }, [usuarios.correo,usuarios.password]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...usuarios, [name]: value };
    setUsuarios(newDatos);
  };

  // const manejadorBoton=()=>{

  //  try {
  //   axios.post(URI,usuarios)
  //   .then(response=>{
  //     if(response.status==="ok"){
  // console.log(response.data.message)
  //     }else{
  //       setUsuarios({
  //         error:true,
  //         errorMsg:response.data.message

  //       })
  //     }
  //   })

  //  } catch (error) {

  //  }

  // }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuarios.correo || !usuarios.password) {
      toast("no deje espacios en blanco", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      let res = await axios.post(URI, usuarios);
      console.log(res.data);
      navigate("/dasboard");
      toast("Usuario autenticado exitosamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // useEffect(() => {
  //   getUsuarios();
  // }, []);

  // //procedimiento para crear credencial
  // const getUsuarios = async () => {
  //   const res = await axios.get(URI);
  //   setUsuarios(res.data);

  // };

  // //procedimiento para eliminar credencial
  // const deleteUsuario = async (id) => {
  //   await axios.delete(`${URI}${id}`);
  //   getUsuarios();
  // };

  return (
    <section className="text-center ">
      <form
        className="form-signin card  mb-3 w-30 "
        method="post"
        onSubmit={handleSubmit}
      >
        <img className="mb-3" src={imagen} alt="" width="300" height="90"></img>
        <h1 className="h3 mb-3 fw-normal">Inicio de Sesion</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleInputChange}
            value={usuarios.correo}
            name="correo"
          />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleInputChange}
            value={usuarios.password}
            name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          onClick={handleSubmit}
          href="/dasboard"
          className="w-100 btn btn-lg btn-primary mb-3"
          type="submit"
        >
          Ingresar
        </button>
        <a href="/crearUsuario" className="w-100 btn btn-lg mt-3 btn-danger ">
          Registrarse
        </a>

        {usuarios.error === true && (
          <div className="alert alert-danger" role="alert">
            {usuarios.errorMsg}
          </div>
        )}
        <p className="mt-5 mb-3 text-muted">&copy; FSTADSI–2022</p>
      </form>
    </section>
  );
};

export default Login;
