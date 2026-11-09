import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

export default function HeaderNavbar({ isLoggedIn, userProfile, onLogin, onLogout }) {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">JoaozinhoDadosBA</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="mx-auto my-3 my-md-0">
            <Nav.Link href="#">Início</Nav.Link>
            <Nav.Link href="#pisos">Pisos salariais</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2 pb-2 pb-md-0">
            {isLoggedIn ? <><span className="text-white small me-2">Olá, {userProfile.nome}</span><Button variant="outline-light" size="sm" onClick={onLogout}>Sair</Button></>
              : <><Button variant="outline-light" size="sm" onClick={onLogin}>Login</Button><Button variant="success" size="sm" onClick={onLogin}>Seja Sócio</Button></>}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
