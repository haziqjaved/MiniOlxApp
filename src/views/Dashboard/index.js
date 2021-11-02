import { useState } from "react";
import Featured_Card from "../Featured_Card";
import PostAd from "../PostAd/postAd";
import '../Dashboard/index.css'
export default function Dashboard() {
  const [select, setSelect] = useState(false);
  return (
    <>
      {
        select ?
          <PostAd />
          :
          <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" style={{ color: 'blue', fontWeight: 'bold', fontSize: '30px' }} href="#">Ol<span style={{ fontSize: '25px' }}>x</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="d-flex">
                    <input class="form-control me-2" style={{ width: '850px', marginLeft: '50px' }} type="search" placeholder="Find Car,Mobile Phone & more..." aria-label="Search" />
                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="Button btn btn-outline-warning" onClick={() => { setSelect(true) }} type="button"><span style={{fontSize: '20px', fontWeight: 'bold' }}>+</span>Sell</button>
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