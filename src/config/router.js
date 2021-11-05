import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Detail from '../views/Detail/index'
import Auth from "../views/Auth/index";
import Main from "../Main";
import PostAd from "../views/PostAd/postAd";
import Login from '../views/Login/login';
import Dashboard from '../views/Dashboard';

// kisi bh cheez ko nick name dene ky liay hum  'as' use kreingy phr jo nick name hoga woh likhenge 
//is Rule ko hum alias khete h eg : jaise uper BrowserRouter as Router hua h hai 
export default function Change() {
    const [user, setUser] = useState()
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, userData => {
            setUser(userData)
        })
    }, [])

    return (<Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders tservhe first one that matches the current URL. */}
            <Switch>
                <Route path="/" exact>{ProtectedRoute(!user, <Main />, '/dashboard')}</Route>
                <Route path="/login" exact><Login /></Route>
                <Route path="/signup" exact><Auth /></Route>
                <Route path="/postad" exact>{ProtectedRoute(user, <PostAd />)}</Route>
                <Route path="/dashboard" exact>{ProtectedRoute(user, <Dashboard />)}</Route>
                <Route exact path="/detail/:adId">{ProtectedRoute(user, <Detail />)}</Route>
            </Switch>
        </div>
    </Router>)
}

function ProtectedRoute(user, component, redirectTo = '/') {
    return user ? component : <Redirect to={redirectTo} />
}