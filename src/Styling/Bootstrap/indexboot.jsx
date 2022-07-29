import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ram from './ram.svg';
import namarama from './namarama.png';
import github from './github.png';



export default class Bootstrap extends React.Component {
  render() {
    return (


      // Navbar Start

    <Navbar bg="dark" variant="dark" className="navini text-white" style ={{backgroundImage:'linear-gradient(to right,#27AB12, #010418, #290380,#33035a)'}}>
      <Container fluid>

        {/* logo */}
        <Navbar.Brand href="#" className="Logo mr-3">

        <img
              alt=""
              src={ram}
              width="65"
              
              className="d-inline-block align-top"
            />{' '}

            


        </Navbar.Brand>
        {/* logo END */}
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Nama Logo */}
            <Nav.Link ><img
              alt=""
              src={namarama}
              width="300"
              
              className="d-inline-block align-top mr-5"
            />{' '}</Nav.Link>
            {/* Nama Logo END */}


            
            
            
          </Nav>
          <Nav>
          <NavDropdown title="Contact Me" id="navbarScrollingDropdown" className='me-3 ml-5 dropdown' >
              <NavDropdown.Item href="https://wa.me/+6281380580240" target="_blank" >
                <img src="https://img.icons8.com/color/48/000000/whatsapp.png" /> Whatsapp
              </NavDropdown.Item>
              <NavDropdown.Item href="https://instagram.com/ramdhey_?igshid=YmMyMTA2M2Y=" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" /> Instagram

              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:ramadheayudhistira@gmail.com" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" /> Gmail
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/rama-dhea-yudhistira-058b46229/" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" /> Linkedin
              </NavDropdown.Item>
              
              
          </NavDropdown>


            <Nav.Link eventKey={2} href="https://github.com/ramdhey?tab=repositories" target="_blank">
            <img
              alt=""
              src={github}
              width="30"
              
              className="gitub d-inline-block align-top mr-5"
            /> {' '}
              My Github
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // Navbar END



    );
  }
}