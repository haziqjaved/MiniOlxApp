import React,{ useState} from 'react'
import { Navbar, Nav,  Container, Form, FormControl, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { logout } from "../../config/firebase";
import Featured_Card from "../Featured_Card";
import Slider from '../Slider/index.js';
import Navbar2 from '../Navbar2'
import { useHistory,Link } from "react-router-dom";

export default function Dashboard() {

  const history = useHistory();
  return (<div>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
    <img
        src={require("../../Assets/olx-removebg-preview.png").default}
        width="45"
        height="45"
        className="d-inline-block align-top"
        alt="Olx logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <Nav.Link href="#action1">Home</Nav.Link> */}
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Find Cars,Mobile Phones and more...."
          className="me-2"
          style={{borderRadius:'20px'}}
          aria-label="Search"
        />
        </Form>
      </Nav>
        <Button variant='outline-primary' style={{borderRadius:'10px'}}  onClick={() =>history.push('/postad')}>+Sell</Button> &nbsp;&nbsp;
        <Button onClick={logout} variant='outline-danger' style={{borderRadius:'10px'}}>Logout</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

    {/* Navbar2 */}
      <Navbar2 />
    {/* Carousel */}
    <Slider />
    {/* Cards OF Ads Details  */}
    <Featured_Card />
  </div>
  )
}
