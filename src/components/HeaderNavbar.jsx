import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

export default function HeaderNavbar({ isLoggedIn, userProfile, onLogin, onLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold">SINDADOS<span className="brand-accent">-BA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="mx-auto my-3 my-md-0">
            <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#pisos">Pisos salariais</Nav.Link>
            <Nav.Link href="#participar">Participar</Nav.Link>
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
