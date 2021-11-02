import './App.css';
import { useHistory } from "react-router-dom";
export default function Main() {
  const history = useHistory()
  return (<div className="App">
    <h1 style={{ backgroundColor: 'blue' }}>Welcome to Olx App</h1>
    <div className="main-div" >
      {/* <Link to='/signup'> */}
        <button type="button" className="btns btn btn-primary"  onClick={()=>history.push('/signup')}>SignUp</button>
      {/* </Link> */}
      <br /><br />
      {/* <Link to='/login'> */}
        <button type="button" onClick={()=>history.push('/login')} className="btns btn btn-primary">Login</button>
        {/* </Link> */}
        <br /><br />
    </div>
  </div>)
}