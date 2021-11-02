import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "../views/Login/login";
// import PostAd from "../views/PostAd/postAd";
// import Detail from "../views/Detail";
import Auth from "../views/Auth/index";
import Main from "../Main";
// import App from "../App";

// kisi bh cheez ko nick name dene ky liay hum  'as' use kreingy phr jo nick name hoga woh likhenge 
//is Rule ko hum alias khete h eg : jaise uper BrowserRouter as Router hua h hai 

export default function Change() {
    return (<Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders tservhe first one that matches the current URL. */}
            <Switch>
            <Route path="/"  exact component={Main} />
            <Route path="/signup" exact component={Auth} />     
            </Switch>
        </div>
    </Router>)
}