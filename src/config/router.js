import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "../views/Login/login";
// import PostAd from "../views/PostAd/postAd";
// import Detail from "../views/Detail";
import Auth from "../views/Auth/index";
import Main from "../Main";
import PostAd from "../views/PostAd/postAd";
import Login from '../views/Login/login';
import Dashboard from '../views/Dashboard';
// import App from "../App";

// kisi bh cheez ko nick name dene ky liay hum  'as' use kreingy phr jo nick name hoga woh likhenge 
//is Rule ko hum alias khete h eg : jaise uper BrowserRouter as Router hua h hai 

export default function Change() {
    return (<Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders tservhe first one that matches the current URL. */}
            <Switch>
            <Route path="/" exact><Main /></Route>
            <Route path="/login" exact><Login /></Route>
            <Route path="/signup" exact><Auth /></Route>
            <Route path="/login/dashboard" exact><Dashboard/></Route> 
            
            <Route path="/login/dashboard/postad" exact><PostAd/></Route>    
            </Switch>
        </div>
    </Router>)
}