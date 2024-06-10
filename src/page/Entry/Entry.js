import React, { useState } from 'react';
import './Entry.css';
import LoginForm from '../../component/LoginForm';
import ResetLogin from '../../component/ResetLogin';

const Entry = () => {

  const [email, setEmail] = useState("");
  const [password,  setPassword] = useState("");
  const [frmType, setFrmType] = useState("Login");
  console.log(frmType)
  const handleOnChange = e => {
    const {name, value} = e.target;

    switch (name){
        case "email":
            setEmail(value);
            break;

        case "password":
            setPassword(value);
            break;

        default:
            break;
    }
    console.log(name, value);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  const frmChangeFuc = frm =>{
    if(frm === "Reset"){
        setFrmType("Reset");
    }else if(frm === "Login"){
        setFrmType("Login");
    }
    console.log(frm)
  }

  return (
    <div className='entry-page bg-info'>
        <div className='lgn'>
            {frmType === "Login" ? <LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                email={email}
                password={password}
                frmChangeFuc={frmChangeFuc}/> : 
                <ResetLogin 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                email={email}
                frmChangeFuc={frmChangeFuc}/>}
        </div>
    </div>
  )
}

export default Entry