import './App.css';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Main() {
  const history = useHistory()
  const theme=useSelector((state)=>state.theme)
  console.log('theme inside Welcome header-->',theme)
  return (
      <div className="App" >
        <h1 style={{ backgroundColor: 'blue' }}>Welcome to Olx App</h1>
        <div className="main-div" >
          <button type="button" className="btns btn btn-primary" onClick={() => history.push('/signup')}>SignUp</button>
          <br /><br />
          <button type="button" onClick={() => history.push('/login')} className="btns btn btn-primary">Login</button>
          <br /><br />
        </div>
      </div>
  )
}