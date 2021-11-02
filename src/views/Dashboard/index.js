import { useState } from "react";
import Featured_Card from "../Featured_Card";
import PostAd from "../PostAd/postAd";
import '../Dashboard/index.css'
import { logout } from "../../config/firebase";
export default function Dashboard() {
  const [select, setSelect] = useState(false);
  return (
    <>
      {
        select ?
          <PostAd />
          :
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
              <div className="container-fluid">
                <a className="navbar-brand" style={{ color: 'blue', fontWeight: 'bold', fontSize: '30px' }} href="#">Ol<span style={{ fontSize: '25px' }}>x</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="d-flex">
                    <input className="form-control me-2" style={{ width: '850px', marginLeft: '50px' }} type="search" placeholder="Find Car,Mobile Phone & more..." aria-label="Search" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="Button btn btn-outline-primary" onClick={() => { setSelect(true) }} type="button"><span style={{fontSize: '20px', fontWeight: 'bold' }}>+</span>Sell</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="Button btn btn-outline-warning" onClick={logout} type="button">Logout</button>
                  </form>
                </div>
              </div>
            </nav>
            <br />
            {/* Cards OF Ads Details */}
            <Featured_Card />
          </>
      }  
    </>
  )
}