import { useState } from "react";
import {loginUser} from "../../config/firebase"
import '../Auth/index.css'
import Dashboard from "../Dashboard";
function Login(){
    const [screenChange , setScreenChange] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[wait,setWait]=useState(false)
    
    // logIn function used on login btn
    const logIn = async()=> {
        setWait(true)
        try{ 
        await loginUser(email, password)
        }catch(e){alert(e.message) }
        console.log('user from component', loginUser)
        setWait(false)
        setScreenChange(true);
    }
    return (
        <>
        {
            screenChange? <Dashboard /> 
            : 
            <div align='center'>
            <fieldset style={{ width: 450, height: 540 }}>
                <legend align='center' >Log In</legend>
                <label className='email'>Email:<br />
                    <input style={{ width: 320 }}
                        onChange={e => setEmail(e.target.value)}
                        type="email" placeholder="Write your email" /></label><br />
                <label className='pass'>Password:<br />
                    <input style={{ width: 320 }}
                        onChange={e => setPassword(e.target.value)}
                        type="password" placeholder="Write your password" />
                    <br /><br />
                    {wait ?
                        <img width="80" src='https://i.gifer.com/4V0b.gif' /> :
                        <button className='LoginBtn' onClick={logIn}>LogIn</button>
                    }
                </label>
            </fieldset>
        </div>

        }
      </> );
}
export default Login;