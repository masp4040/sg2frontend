import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from '../context/AuthProvider';
import axios from "axios";





const URI = "http://localhost:4000/api/usuarios";

const Log = () => {
    const {setAuth}=useContext(AuthContext);
  
  const errRef = useRef();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  

  useEffect(() => {
    setErrMsg('');
  }, [correo, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response=await axios.post(URI,JSON.stringify({correo,password}),
        {
            headers:{'Content-Type':'application/json'},
            withCredentials:true
        }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken=response?.data?.Token;
        setAuth({correo,password,accessToken});
        setCorreo("");
        setPassword("");
        setSuccess(true);
    } catch (err) {
        if(!err?.response.data){
            setErrMsg('No server response');
        }else if(err.response?.status===400){
            setErrMsg('Missing correo or password')
        }else if(err.response?.status===401){
            setErrMsg('Unauthorized');
        }else{
            setErrMsg('login failer');
        }
        
        
    }
    
    
  };

  return (
    <>
      {success ? (
        <section>
          <h1>you are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="correo">correo:</label>
            <input
              type="text"
              id="correo"
              
              autoComplete="off"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
              required
            />
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need ab Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>  
  )
}

export default Log;
