import React, { useState } from "react";
import axios from 'axios';

function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  const enviar = (e) => {
    e.preventDefault();
    const options ={
      url: 'http://localhost:3000/login',
      methohod: 'POST',
      headers: {
        'Accept': 'http://localhost:3001',
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        senha: senha
      }
    }

    axios.post(options).then((response) => {

    if (response.data.message) {
      setLoginStatus(response.data.message);
    } else {
      setLoginStatus(response.data[0].email);
    }
  
  }).catch((error) => {
    console.log(error);
  }); 
};
  return (
    <div className="login-form-wrap">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" 
               name="email" 
               placeholder="Email" 
               autoComplete="on"
               required
               onChange={(e) => {setEmail(e.target.value)}}
               />
        <input type="password" 
               id="ipassword"
               name="senha" 
               placeholder="Password" 
               current-password="on"
               required
               onChange={(e) => {setSenha(e.target.value)}}
               />
        <button type="submit" 
                className='btn-login'
                onClick={enviar}
        >Login</button>
        <h1 
        style={{fontSize: '15px', textAlign:'center', marginTop:'20px'}}
        >{loginStatus}</h1>
      </form>
    </div>
  )
};

  export default App;