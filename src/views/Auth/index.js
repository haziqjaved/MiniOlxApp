import { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import { registerUser } from '../../config/firebase';
import '../Login/App.css'

export default function Auth() {
    const history=useHistory();
    const [load, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    const [phoneNo,setPhone]= useState();
    const signUp = async () => {
        setLoading(true)
        try 
        {await registerUser({
           fullname,
          email, 
          phoneNo , 
          password}) 
        alert('Succecfully Signed UP')
        }catch(e){alert(e.message) }
        setLoading(false)
        //use for navigation
        history.push('/')
    }
    return (
        <>
             <div id="container">
        <div className="form-wrap">
          <h1 style={{color:'black',backgroundColor:'transparent'}}>Sign Up</h1>

          <p>It's free and take a minute only</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="e.g:Billy"   onChange={e => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="billy@gmail.com" onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="032222222"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"  onChange={e => setPassword(e.target.value)}
              />
            </div>
     {load ?
        <img width="80" src='https://i.gifer.com/4V0b.gif' /> :<button type="submit" onClick={signUp} className="btn">
              SignUp
            </button>}
            <p className="bottom-text">
              By clicking the Sign Up button, you agree to our
              <a href="#"> Terms & Conditions</a>
              <a href="#"> Privacy Policy</a>
            </p>
          </form>
        </div>
        <footer>
          <p style={{color: "black"}}>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>
        </footer>
      </div>
        </>
        );
}