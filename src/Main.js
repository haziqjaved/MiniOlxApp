import { useState,react } from "react";
import Auth from "./views/Auth";
import './App.css';
import Login from "./views/Login/login";
export default function Main(){  //history lagani h
    const [isSelect,setIsSelect] = useState(false);
    const [signup,setSignup] = useState(false);
 return(   <>
    {isSelect ? <>
    {
      signup ? <> <Auth /> </> : <> <Login /> </>
    }
    </> :  
    <>
    <div className="App">
    <h1 style={{backgroundColor:'blue'}}>Welcome to Olx App</h1>
      <div className="main-div" >
        <button type="button" className="btns btn btn-primary" onClick={() =>{
          //history.push()
          setIsSelect(true)
          setSignup(true);
          }}>SignUp</button><br /><br />

        <button type="button" className="btns btn btn-primary" onClick={() =>{
          setIsSelect(true)
          setSignup(false);
          }}>Login</button><br /><br />
      </div><br /><br/><br />
    </div>
    </>} </>
 )  
}