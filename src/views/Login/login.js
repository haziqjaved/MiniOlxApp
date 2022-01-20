import { useState } from "react";
import { loginUser } from "../../config/firebase"
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import './App.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wait, setWait] = useState(false)


    const logIn = async () => {
        setWait(true)
        try{
            const user=await loginUser(email,password)
            alert(`Login as ${user.fullname}`)
        }catch(e){
            alert(e.message)
        }
        setWait(false)
        history.push('/dashboard')
    }
    return (
        <>
            <div id="container">
        <div className="form-wrap">
          <h1 style={{color:'black',backgroundColor:'transparent'}}>Login</h1>

          <p>It's free and take a minute only</p>
          <form onSubmit={e => e.preventDefault()}>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com" onChange={e => setEmail(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="e.g:Hard One"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
           {wait ?
         <img width="80" src='https://i.gifer.com/4V0b.gif' /> : <button type="submit" onClick={logIn} className="btn">
              Login
            </button>}
            <p className="bottom-text">
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
        <footer>
          <p style={{color: "black"}}>
            Dont Have any Account
            <span style={{color:'blue'}} onClick={()=>history.push('/signup')}> Signup</span>
          </p>
        </footer>
      </div>
        </>
        // <div align='center'>
        //     <fieldset style={{ width: 450, height: 540 }}>
        //         <legend align='center' >Log In</legend>
        //         <label className='email'>Email:<br />
        //             <input style={{ width: 320 }} onChange={e => setEmail(e.target.value)} type="email" placeholder="Write your email" /></label><br />
        //         <label className='pass'>Password:<br />
        //             <input style={{ width: 320 }} onChange={e => setPassword(e.target.value)} type="password" placeholder="Write your password" />
        //             <br /><br />
        //             {wait ?
        //                 <img width="80" src='https://i.gifer.com/4V0b.gif' /> :
        //                 <button className='LoginBtn btn-primary' onClick={logIn}>LogIn</button>
        //             }
        //             <br />
        //         </label>
        //     </fieldset>
        // </div>
        );
}
export default Login;